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
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Certificates", href: "#certificates" },
    { name: "Projects", href: "#projects" },
  ];

  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("/");
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        // Handle header visibility
        setIsVisible(window.scrollY < lastScrollY.current);
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
  }, [navItems]);

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
      ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
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

        {/* Theme Toggle */}
        <div className="ml-auto mt-4 sm:mt-0">
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