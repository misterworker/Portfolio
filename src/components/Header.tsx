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
  ];

  // State to manage header visibility
  const [isVisible, setIsVisible] = useState(true);

  // Track scroll direction
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY.current) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        lastScrollY.current = window.scrollY;
      }
    };
  
    window.addEventListener("scroll", handleScroll);
    
    // Cleanup on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 right-0 flex justify-between items-center px-8 py-4 shadow-md transition-all z-50 ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      {/* Navigation */}
      <nav
        className={`flex justify-between items-center space-x-8 text-lg font-medium rounded-md transition-all ${
          theme === "dark" ? "text-gray-100" : "text-gray-800"
        } w-full max-w-4xl mx-auto`}
      >
        <ul className="flex space-x-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`relative px-2 py-2 rounded-md transition-all ${
                  pathname === item.href
                    ? "text-blue-400 font-bold before:absolute before:inset-x-0 before:-bottom-1 before:h-1 before:bg-blue-400"
                    : `hover:text-blue-500`
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Theme Toggle */}
      <div
        className="relative w-12 h-6 flex items-center bg-gray-700 rounded-full cursor-pointer"
        onClick={toggleTheme}
      >
        <div
          className={`absolute w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ${
            theme === "dark" ? "translate-x-0" : "translate-x-6"
          }`}
        />
        <BsSun className="absolute left-0.5 text-yellow-400" size={14} />
        <BsMoon className="absolute right-0.5 text-black" size={14} />
      </div>
    </header>

  );
}
