"use client";

import React from "react";
import { Link } from "react-scroll";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { RiCollapseDiagonal2Line, RiExpandDiagonal2Line  } from "react-icons/ri";
import NextLink from "next/link";

interface SidebarProps {
  headers: { content: string; desc: string; id: string }[];
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  headers,
  isCollapsed,
  toggleSidebar,
}) => {
  return (
    <div
      className={`fixed left-0 bg-gray-800 text-white h-full overflow-y-auto transition-all duration-300 ${
        isCollapsed ? "w-14 pl-4 pt-4" : "w-64 p-4"
      }`}
    >
      {isCollapsed ? (
        <button
          onClick={toggleSidebar}
          className="mb-4 focus:outline-none text-xl cursor-pointer"
        >
          <RiExpandDiagonal2Line />
        </button>
      ) : (
        <>
          <div className="flex justify-between items-center mb-4">
            <NextLink href="/" className="flex items-center text-sm hover:text-blue-400">
              <HiChevronLeft className="mr-1" />Back
            </NextLink>
            <button
              onClick={toggleSidebar}
              className="focus:outline-none text-xl cursor-pointer"
            >
              <RiCollapseDiagonal2Line />
            </button>
          </div>
          <h2 className="text-lg font-bold mb-4">Progress</h2>
          <ul className="space-y-2">
            {headers.map((header) => (
              <li key={header.id} className="pl-2">
                <Link
                  to={header.id}
                  smooth={true}
                  duration={500}
                  offset={-50}
                  className={`cursor-pointer hover:text-blue-400 ${
                    header.desc === "h3" ? "ml-4" : ""
                  }`}
                >
                  {header.content}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Sidebar;