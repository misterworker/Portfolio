"use client";

import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

interface SidebarProps {
  headers: { content: string; desc: string; id: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ headers }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // Consider screens below 1024px as mobile
    };

    // Check on mount
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Close sidebar when clicking a link on mobile
  const handleLinkClick = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile hamburger menu */}
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 right-4 z-50 bg-gray-700 text-white p-2 rounded-md focus:outline-none"
          aria-label="Toggle navigation"
        >
          {isOpen ? <RiCloseLine size={24} /> : <RiMenu3Line size={24} />}
        </button>
      )}

      {/* Sidebar - always visible on desktop, conditionally visible on mobile */}
      <div
        className={`fixed left-0 bg-gray-800 text-white h-full overflow-y-auto transition-all duration-300 z-40
          ${isMobile 
            ? isOpen ? "w-64 translate-x-0" : "w-64 -translate-x-full" 
            : "w-64"} 
          lg:translate-x-0 p-4`}
      >
        <h2 className="text-lg font-bold mb-4">Progress</h2>
        <ul className="space-y-2">
          {headers.map((header) => (
            <li key={header.id} className="pl-2">
              <Link
                to={header.id}
                smooth={true}
                duration={500}
                offset={-50}
                className={`cursor-pointer hover:text-blue-400 block py-1
                  ${header.desc === "h3" ? "ml-4" : ""}`}
                onClick={handleLinkClick}
              >
                {header.content}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile overlay to close sidebar when clicking outside */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-opacity-50 z-30"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;