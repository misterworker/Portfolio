"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";
import { BsSun, BsMoon, BsLockFill, BsUnlock } from "react-icons/bs";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Certificates", href: "#certificates" },
    { name: "Projects", href: "#projects" },
  ];

  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("/");
  const [isLocked, setIsLocked] = useState(false);
  const lastScrollY = useRef(0);

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
    // If locking, make sure header is visible
    if (newLockState) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        // Skip header visibility changes if locked
        if (!isLocked) {
          setIsVisible(window.scrollY < lastScrollY.current);
        }
        lastScrollY.current = window.scrollY;
        
        // Handle section detection
        const sections = navItems
          .filter(item => item.href.startsWith('#'))
          .map(item => item.href.substring(1));
          
        // Check if at the top of the page (Home section)
        if (window.scrollY < 200) {
          setActiveSection("#home");
          return;
        }
        
        // Check which section is in view
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            // Consider a section in view when it's top is close to viewport top
            if (rect.top <= 150 && rect.bottom >= 150) {
              setActiveSection(`#${section}`);
              return;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems, isLocked]);

  // Handle initial hash in URL
  useEffect(() => {
    if (window.location.hash) {
      setActiveSection(window.location.hash);
    } else {
      setActiveSection(pathname);
    }
  }, [pathname]);

  return (
    <header
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-4xl rounded-xl backdrop-blur-lg transition-all z-50 
      ${theme === "dark" ? "bg-gray-900/60" : "bg-white/60"} 
      ${isVisible || isLocked ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="w-full flex flex-wrap items-center justify-between px-4 sm:px-6 py-3">
        {/* Navigation */}
        <nav className="w-full sm:w-auto">
          <ul className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-6 sm:gap-y-0 sm:gap-x-6">
            {navItems.map((item) => (
              <li key={item.href} className="flex-shrink-0">
                <Link
                  href={item.href}
                  className={`relative px-2 py-1 rounded-md transition-all ${
                    activeSection === item.href
                      ? "text-blue-400 font-bold" 
                      : "hover:text-blue-500"
                  }`}
                >
                  {item.name}
                  {activeSection === item.href && (
                    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-400 mt-6 sm:mt-5"></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Controls */}
        <div className="ml-auto mt-4 sm:mt-0 flex items-center space-x-3">
          {/* Lock Toggle */}
          <div
            className="p-1.5 rounded-full cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            onClick={toggleLock}
            title={isLocked ? "Unlock header (allow hiding on scroll)" : "Lock header (prevent hiding on scroll)"}
          >
            {isLocked ? (
              <BsLockFill className={`${theme === "dark" ? "text-blue-400" : "text-blue-500"}`} size={18} />
            ) : (
              <BsUnlock className="text-gray-500" size={18} />
            )}
          </div>

          {/* Theme Toggle */}
          <div
            className="relative w-12 h-6 flex items-center justify-between bg-gray-700 rounded-full cursor-pointer px-1"
            onClick={toggleTheme}
          >
            <BsSun className="text-yellow-400" size={14} />
            <div
              className={`absolute w-4 h-4 bg-white rounded-full shadow-md transition-all duration-300 
                ${theme === "dark" ? "left-[5%]" : "left-[60%]"}`}
            />
            <BsMoon className="text-black" size={14} />
          </div>
        </div>
      </div>
    </header>
  );
}