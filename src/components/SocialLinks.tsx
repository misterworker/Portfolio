"use client";

import { BsGithub, BsLinkedin, BsFillPhoneFill, BsFillEnvelopeFill } from "react-icons/bs";
import { FaCopy } from "react-icons/fa";
import { useState } from "react";

const SOCIAL_LINKS = [
  {
    href: "https://github.com/misterworker",
    label: "GitHub",
    icon: <BsGithub size={20} />,
  },
  {
    href: "https://www.linkedin.com/in/ethan-lee-224659251",
    label: "LinkedIn",
    icon: <BsLinkedin size={20} />,
  },
  {
    href: "tel:+1234567890",
    label: "Phone",
    icon: <BsFillPhoneFill size={20} />,
  },
  {
    href: "mailto:ethanroo2016@gmail.com",
    label: "Email",
    icon: <BsFillEnvelopeFill size={20} />,
  },
];

export default function SocialLinks() {
  const [isCopied, setIsCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("ethanroo2016@gmail.com");
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <div className="flex flex-wrap justify-center space-x-6 text-lg mb-6 max-w-full w-full">
      {SOCIAL_LINKS.map(({ href, label, icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-blue-400 mb-3"
        >
          {icon}
          <span>{label}</span>
        </a>
      ))}

      {/* Copy Email Button */}
      <button
        onClick={copyEmail}
        className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer mb-3"
      >
        <FaCopy size={20} />
        <span>{isCopied ? "Copied!" : "Copy Email"}</span>
      </button>
    </div>
  );
}
