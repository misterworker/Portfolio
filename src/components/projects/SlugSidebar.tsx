"use client"

import React from 'react';
import { Link } from 'react-scroll';

interface SidebarProps {
  headers: { content: string, desc: string, id: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ headers }) => {
  return (
    <div className="fixed left-0 w-64 p-4 bg-gray-800 text-white h-full overflow-y-auto">
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
                header.desc === 'h3' ? 'ml-4' : ''
              }`}
            >
              {header.content}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
