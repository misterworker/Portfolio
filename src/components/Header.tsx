"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";
import { BsSun, BsMoon } from "react-icons/bs";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Stats", href: "/stats" },
    // TODO: disable route temporarily, thinking about what I should even put here
  ];

  // State to manage header visibility
  const [isVisible, setIsVisible] = useState(true);
 
  // Track scroll direction
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setIsVisible(window.scrollY < lastScrollY.current);
        lastScrollY.current = window.scrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Cleanup on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 right-0 flex items-center px-6 py-4 shadow-md transition-all z-50 ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      {/* Main container to control width */}
      <div className="w-full flex items-center">
        {/* Navigation - Aligned to the left */}
        <nav className="flex items-center space-x-6">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative px-2 py-2 rounded-md transition-all ${
                    pathname === item.href
                      ? "text-blue-400 font-bold before:absolute before:inset-x-0 before:-bottom-1 before:h-1 before:bg-blue-400"
                      : "hover:text-blue-500"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Push theme toggle to the right */}
        <div className="ml-auto">
          <div
            className="relative w-12 h-6 flex items-center justify-between bg-gray-700 rounded-full cursor-pointer px-1"
            onClick={toggleTheme}
          >
            <BsSun className="text-yellow-400" size={14} />
            <div
              className={`absolute w-4 h-4 bg-white rounded-full shadow-md transition-all duration-300 
                ${theme === "dark" ? "left-[5%]" : "left-[60%]"}
              `}
            />
            <BsMoon className="text-black" size={14} />
          </div>
        </div>
      </div>
    </header>
  );
}
