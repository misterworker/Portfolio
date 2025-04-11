"use client";

import { useEffect, useRef, useState } from "react";

interface Message {
  from: "user" | "assistant";
  content: string;
}

function generateUUID() {
  return crypto.randomUUID();
}

export default function BotChat({ onClose }: { onClose: () => void }) {
  const [fingerprint] = useState(generateUUID);
  const [userId] = useState(generateUUID);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [waiting, setWaiting] = useState(false);
  const [interrupted, setInterrupted] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const sendMessage = async () => {
    const userMessage = input.trim();
    if (!userMessage) return;

    setMessages((prev) => [...prev, { from: "user", content: userMessage }]);
    setInput("");
    setWaiting(true);
    setInterrupted(false);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fingerprint: fingerprint,
          user_id: userId,
          user_input: userMessage,
          num_rewind: 0,
        }),
      });

      const data = await res.json();

      if (data.response) {
        setMessages((prev) => [...prev, { from: "assistant", content: data.response }]);
      }

      if (data.other_name === "interrupt") {
        setInterrupted(true);
      }

      if (data.other_name === "draft_email") {
        setFeedbackMsg(data.other_msg);
      }
    } catch (error) {
      setMessages((prev) => [...prev, { from: "assistant", content: "⚠️ Error talking to assistant." }]);
    }

    setWaiting(false);
    inputRef.current?.focus();
  };

  const handleResume = async (action: boolean) => {
    setInterrupted(false);
    setWaiting(true);
    try {
      const res = await fetch("/api/resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action, userId }),
      });

      const data = await res.json();
      if (data.response) {
        setMessages((prev) => [...prev, { from: "assistant", content: data.response }]);
      }

      if (data.other_name === "provide_feedback") {
        setFeedbackMsg(data.other_msg);
      }
    } catch {
      setMessages((prev) => [...prev, { from: "assistant", content: "⚠️ Error resuming conversation." }]);
    }

    setWaiting(false);
    inputRef.current?.focus();
  };

  const handleWipe = async () => {
    const res = await fetch("/api/wipe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    });

    const data = await res.json();
    if (data.response) {
      setMessages([]);
    }
  };

  const generateMailtoLink = () => {
    if (!feedbackMsg) return "";
    const subject = encodeURIComponent("Feedback for Portfolio");
    const body = encodeURIComponent(feedbackMsg);
    return `mailto:ethanroo2016@gmail.com?subject=${subject}&body=${body}`;
  };

  useEffect(() => {
    const handleBeforeUnload = () => {
      navigator.sendBeacon(
        "/api/wipe",
        new Blob([JSON.stringify({ userId })], { type: "application/json" })
      );
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [userId]);

  return (
    <div className="w-80 h-96 bg-white dark:bg-gray-900 text-black dark:text-white shadow-xl rounded-lg p-4 flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold">Assistant</span>
        <div className="flex gap-2">
          <button onClick={handleWipe} className="text-xs text-red-500 hover:text-red-700 cursor-pointer">Wipe</button>
          <button onClick={onClose} className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer">Close</button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto text-sm bg-gray-100 dark:bg-gray-800 rounded p-2 space-y-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`px-3 py-2 rounded-lg break-words max-w-full ${
              msg.from === "user"
                ? "bg-blue-100 dark:bg-blue-700 text-right self-end"
                : "bg-gray-200 dark:bg-gray-700 text-left self-start"
            }`}
          >
            {msg.content}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {interrupted && (
        <div className="mt-2 text-xs text-yellow-600 dark:text-yellow-400">
          Assistant paused for your input:
          <div className="flex justify-between mt-1">
            <button
              className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded text-xs cursor-pointer"
              onClick={() => handleResume(true)}
            >
              Continue
            </button>
            <button
              className="bg-gray-400 hover:bg-gray-500 text-white px-2 py-1 rounded text-xs cursor-pointer"
              onClick={() => handleResume(false)}
            >
              Stop
            </button>
          </div>
        </div>
      )}

      {feedbackMsg && (
        <div className="mt-4 text-sm text-green-600 dark:text-green-400 relative bg-green-50 dark:bg-green-900 p-3 rounded">
          <button
            className="absolute top-1 right-2 text-green-700 dark:text-green-300 hover:text-green-900 dark:hover:text-white text-lg leading-none cursor-pointer"
            onClick={() => setFeedbackMsg(null)}
          >
            &times;
          </button>
          <p>Your feedback has been recorded! Would you like to send it to us?</p>
          <a
            href={generateMailtoLink()}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-2 block text-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Send Feedback via Email
          </a>
        </div>
      )}

      <div className="mt-2 flex">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          ref={inputRef}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          disabled={waiting || interrupted}
          className="p-2 flex-1 border border-gray-300 dark:border-gray-700 rounded-l focus:outline-none dark:bg-gray-700 dark:text-white"
        />
        <button
          onClick={sendMessage}
          disabled={waiting || interrupted}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-r cursor-pointer"
        >
          Send
        </button>
      </div>
    </div>
  );
}
