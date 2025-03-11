"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/projects/SlugSidebar";
import ProjectDetails from "./projectDetails";

interface ProjectProps {
  project: {
    title: string;
    description: string;
    slug: string;
    tags: string[];
    media: string | string[];
    githubRepo: string;
  };
  slugProject: {
    slug: string;
    media: {
      id: string;
      type: string;
      content: string;
      desc: string;
    }[];
  };
}

export default function ProjectBlog({ project, slugProject }: ProjectProps) {
  // Extract headers for the sidebar
  const headers = slugProject.media
    .filter((item) => item.type === "header")
    .map((item) => ({
      content: item.content,
      desc: item.desc,
      id: item.id,
    }));

  // Sidebar collapse state
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="flex min-h-screen">
      <Header />

      {/* Sidebar */}
      <Sidebar
        headers={headers}
        isCollapsed={isSidebarCollapsed}
        toggleSidebar={toggleSidebar}
      />

      {/* Main Content */}
      <div
        className={`flex-1 overflow-y-auto p-6 transition-all duration-300 ${
          isSidebarCollapsed ? "ml-16" : "ml-64"
        }`}
      >
        <ProjectDetails project={project} />

        {/* Render media content */}
        <div className="mt-6">
          {slugProject.media.map((item, index) => {
            switch (item.type) {
              case "text":
                return (
                  <p
                    key={item.id}
                    className="text-gray-300 mt-2"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                );
              case "image":
                return (
                  <div key={item.id}>
                    <img
                      src={item.content}
                      alt={`Image ${index + 1}`}
                      className="mt-4 w-full h-auto rounded-md max-h-[500px] object-contain"
                    />
                    {item.desc && (
                      <p className="italic text-gray-400 mt-2 text-center">
                        {item.desc}
                      </p>
                    )}
                  </div>
                );
              case "video":
                return (
                  <div key={item.id}>
                    <video
                      controls
                      className="mt-4 w-full max-h-[500px] object-contain rounded-md"
                    >
                      <source src={item.content} />
                      Your browser does not support the video tag.
                    </video>
                    {item.desc && (
                      <p className="italic text-gray-400 mt-2 text-center">
                        {item.desc}
                      </p>
                    )}
                  </div>
                );
              case "header":
                return (
                  <div key={item.id} id={item.id}>
                    {item.desc === "h2" ? (
                      <h2 className="text-2xl font-bold text-gray-400 mt-4">
                        {item.content}
                      </h2>
                    ) : item.desc === "h3" ? (
                      <h3 className="text-xl font-bold text-gray-400 mt-4">
                        {item.content}
                      </h3>
                    ) : null}
                  </div>
                );
              default:
                return null;
            }
          })}
        </div>
      </div>
    </div>
  );
}
