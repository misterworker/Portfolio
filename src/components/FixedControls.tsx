"use client";

import { useTheme } from "./ThemeProvider";
import { BsSun, BsMoon, BsLockFill, BsUnlock } from "react-icons/bs";
import { useState, useEffect } from "react";

export default function FixedControls() {
  const { theme, toggleTheme } = useTheme();
  const [isLocked, setIsLocked] = useState(false);

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
      const event = new CustomEvent("headerLockChanged", { 
        detail: { isLocked: newLockState } 
      });
      window.dispatchEvent(event);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* Lock Toggle */}
      <div
        className={`p-3 rounded-full cursor-pointer shadow-lg transition-colors ${
          theme === "dark" ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-100"
        }`}
        onClick={toggleLock}
        title={isLocked ? "Unlock header (allow hiding on scroll)" : "Lock header (prevent hiding on scroll)"}
      >
        {isLocked ? (
          <BsLockFill className={`${theme === "dark" ? "text-blue-400" : "text-blue-500"}`} size={20} />
        ) : (
          <BsUnlock className="text-gray-500" size={20} />
        )}
      </div>

      {/* Theme Toggle */}
      <div
        className={`p-3 rounded-full cursor-pointer shadow-lg transition-colors ${
          theme === "dark" ? "bg-gray-800 hover:bg-gray-700" : "bg-white hover:bg-gray-100"
        }`}
        onClick={toggleTheme}
        title={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      >
        {theme === "dark" ? (
          <BsSun className="text-yellow-400" size={20} />
        ) : (
          <BsMoon className="text-gray-700" size={20} />
        )}
      </div>
    </div>
  );
}