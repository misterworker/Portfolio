"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/projects/slug/SlugSidebar";
import ProjectDetails from "@/components/projects/slug/projectDetails";
import { HiChevronLeft } from "react-icons/hi";
import NextLink from "next/link";

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

  // State to track if we're on mobile or desktop
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    // Check on mount
    checkScreenSize();
    
    // Listen for window resize
    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="flex min-h-screen">
      <Sidebar headers={headers} />

      {/* Main Content */}
      <div
        className={`flex-1 overflow-y-auto p-6 transition-all duration-300
          ${isMobile ? "ml-0" : "ml-64"}`}
      >
        <NextLink href="/" className="inline-flex items-center text-sm hover:text-blue-400 mb-4">
          <HiChevronLeft className="mr-1" />Back
        </NextLink>
        
        <ProjectDetails project={project} />

        {/* Render media content */}
        <div className="mt-6">
          {slugProject.media.map((item, index) => {
            switch (item.type) {
              case "text":
                return (
                  <p
                    key={item.id}
                    className="text-gray-300 mt-2 text"
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
                      <p className="italic text-gray-400 mt-2 text-center text">
                        {item.desc}
                      </p>
                    )}
                  </div>
                );
              case "video":
                const isYouTubeLink = item.content.includes("youtube.com") || item.content.includes("youtu.be");
              
                return (
                  <div key={item.id} className="mt-4">
                    {isYouTubeLink ? (
                      <iframe
                        className="w-full max-h-[500px] rounded-md"
                        src={item.content}
                        title="YouTube video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      // Fallback for non-YouTube videos (standard <video> tag)
                      <video controls className="w-full max-h-[500px] object-contain rounded-md">
                        <source src={item.content} />
                        Your browser does not support the video tag.
                      </video>
                    )}
                    {item.desc && (
                      <p className="italic text-gray-400 mt-2 text-center">{item.desc}</p>
                    )}
                  </div>
                );                
              case "header":
                return (
                  <div key={item.id} id={item.id}>
                    {item.desc === "h2" ? (
                      <h2 className="text-2xl font-bold text-gray-400 mt-4 text">
                        {item.content}
                      </h2>
                    ) : item.desc === "h3" ? (
                      <h3 className="text-xl font-bold text-gray-400 mt-4 text">
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