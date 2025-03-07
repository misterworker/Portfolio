"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";
import { BsSun, BsMoon } from "react-icons/bs";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Stats", href: "/stats" },
  ];

  return (
    <header
      className={`w-full flex justify-between items-center px-8 py-4 shadow-md transition-all ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Navigation - Centered */}
      <nav
        className={`absolute left-1/2 transform -translate-x-1/2 flex space-x-8 text-lg font-medium rounded-md transition-all ${
          theme === "dark" ? "text-gray-100" : "text-gray-800"
        }`}
      >
        <ul className="flex space-x-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`relative px-4 py-2 rounded-md transition-all ${
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

      {/* Theme Toggle - Right */}
      <div
        className="relative w-12 h-6 flex items-center bg-gray-700 rounded-full p-1 cursor-pointer"
        onClick={toggleTheme}
      >
        <div
          className={`absolute w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ${
            theme === "dark" ? "translate-x-6" : "translate-x-0"
          }`}
        />
        <BsSun className="absolute left-1 text-yellow-400" size={16} />
        <BsMoon className="absolute right-1 text-gray-300" size={16} />
      </div>
    </header>
  );
}
