"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import Header from "@/components/Header";

const projects = [
  {
    title: "Project 1",
    description: "This is a description for project 1.",
    slug: "project-1",
    tags: ["AI", "Data Science"],
    media: "/images/project1.jpg",
    githubRepo: "https://github.com/misterworker/project-1",
  },
  {
    title: "Fitness App",
    description: "A fitness app to track workouts.",
    slug: "fitness-app",
    tags: ["Fitness", "Mobile"],
    media: "/images/fitness-app.jpg",
    githubRepo: "https://github.com/misterworker/fitness-app",
  },
  // Add more projects here...
];

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("Tech");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  // Filter projects based on the selected topic
  const filteredProjects = projects.filter((project) => {
    const matchesTopic =
      selectedTopic === "Tech"
        ? !project.tags.includes("Fitness")
        : project.tags.includes("Fitness");
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesTopic && matchesSearch;
  });

  // Function to toggle project description
  const toggleDescription = (slug: string) => {
    setExpandedProject(expandedProject === slug ? null : slug);
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center space-y-6 p-6">
        {/* Filter by Topic */}
        <div className="flex space-x-4">
          <button
            onClick={() => setSelectedTopic("Tech")}
            className={`${
              selectedTopic === "Tech"
                ? "bg-blue-500"
                : "bg-gray-700"
            } px-4 py-2 rounded-md text-white transition duration-300`}
          >
            Tech
          </button>
          <button
            onClick={() => setSelectedTopic("Fitness")}
            className={`${
              selectedTopic === "Fitness"
                ? "bg-blue-500 text-white"
                : "bg-gray-700 text-white"
            } px-4 py-2 rounded-md text-white transition duration-300`}
          >
            Fitness
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 rounded-md searchbar text-white focus:outline-none"
          />
        </div>

        {/* Projects List */}
        <div className="w-full max-w-4xl space-y-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              slug={project.slug}
              tags={project.tags}
              media={project.media}
              githubRepo={project.githubRepo}
              expandedProject={expandedProject}
              toggleDescription={toggleDescription}
            />
          ))}
        </div>
      </div>
    </>
  );
}
