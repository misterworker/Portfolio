"use client";

import { useTheme } from "./ThemeProvider";
import { BsRobot, BsSun, BsMoon, BsLockFill, BsUnlock, BsQuestionCircle } from "react-icons/bs";
import { useState, useEffect } from "react";
import BotChat from "@/components/BotChat"

interface FixedControlsProps {
  hideLock?: boolean;
  hideTheme?: boolean;
  hideHelp?: boolean;
}

const TooltipWrapper = ({ tooltip, children }: { tooltip: string; children: React.ReactNode }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => setShowTooltip(true);
  const handleMouseLeave = () => setShowTooltip(false);
  const handleTouchStart = () => setShowTooltip(true);
  const handleTouchEnd = () => setShowTooltip(false);
  const handleClick = () => setShowTooltip(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={handleClick}
    >
      {showTooltip && (
        <div className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 px-2 py-1 rounded 
        bg-black text-white text-xs whitespace-nowrap z-50">
        {tooltip}
        </div>
      )}
      {children}
    </div>
  );
};

export default function FixedControls({
  hideLock = false,
  hideTheme = false,
  hideHelp = false,
}: FixedControlsProps) {
  const { theme, toggleTheme } = useTheme();
  const [isLocked, setIsLocked] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => setShowChat(!showChat);

  // Load the locked state from localStorage on initial render
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLockState = localStorage.getItem("headerLocked");
      if (savedLockState !== null) {
        setIsLocked(savedLockState === "true");
      }
    }
  }, []);

  // Toggle lock state and save to localStorage
  const toggleLock = () => {
    const newLockState = !isLocked;
    setIsLocked(newLockState);
    if (typeof window !== "undefined") {
      localStorage.setItem("headerLocked", newLockState.toString());
    }

    // Dispatch a custom event that Header can listen for
    if (typeof window !== "undefined") {
      const event = new CustomEvent("headerLockChanged", { detail: { isLocked: newLockState } });
      window.dispatchEvent(event);
    }
  };

  return (
    <>
    {/* Left-side: Bot Chat */}
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-2">

    <TooltipWrapper tooltip="Chat with Assistant">
      <div
        className={`p-3 rounded-full cursor-pointer shadow-lg transition-colors ${
          theme === "dark" ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-100"
        }`}
        onClick={toggleChat}
      >
        <BsRobot className={`${theme === "dark" ? "text-green-400" : "text-green-600"}`} size={20} />
      </div>
    </TooltipWrapper>

    {showChat && <BotChat fingerprint="7" onClose={() => setShowChat(false)} />}

    </div>

    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* Lock Toggle */}
      {!hideLock && (
        <TooltipWrapper tooltip={isLocked ? "Unlock header (allow hiding on scroll)" : "Lock header (prevent hiding on scroll)"}>
          <div
            className={`p-3 rounded-full cursor-pointer shadow-lg transition-colors ${
              theme === "dark" ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-100"
            }`}
            onClick={toggleLock}
          >
            {isLocked ? (
              <BsLockFill className={`${theme === "dark" ? "text-blue-400" : "text-blue-500"}`} size={20} />
            ) : (
              <BsUnlock className="text-gray-500" size={20} />
            )}
          </div>
        </TooltipWrapper>
      )}

      {/* Theme Toggle */}
      {!hideTheme && (
        <TooltipWrapper tooltip={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}>
          <div
            className={`p-3 rounded-full cursor-pointer shadow-lg transition-colors ${
              theme === "dark" ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-100"
            }`}
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <BsSun className="text-yellow-400" size={20} />
            ) : (
              <BsMoon className="text-gray-700" size={20} />
            )}
          </div>
        </TooltipWrapper>
      )}

      {/* Help Button */}
      {!hideHelp && (
        <TooltipWrapper tooltip="Page Tour (Coming soon)">
          <div
            className={`p-3 rounded-full cursor-pointer shadow-lg transition-colors ${
              theme === "dark" ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-100"
            }`}
            // onClick can be later updated to open a help modal or page
            onClick={() => {}}
          >
            <BsQuestionCircle className="text-gray-500" size={20} />
          </div>
        </TooltipWrapper>
      )}
    </div>
    </>
  );
}
