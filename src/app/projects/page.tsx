"use client";

import { useState } from "react";
import ProjectCard from "@/components/projects/ProjectCard";
import Header from "@/components/Header";
import TagFilter from "@/components/projects/TagFilter";
import projects from "./projects"

// Extract unique tags from projects
const allTags = [...new Set(projects.flatMap((project) => project.tags))];

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState(allTags);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  // Filter projects based on selected tags and search query
  const filteredProjects = projects.filter((project) => {
    const matchesTags = selectedTags.length === allTags.length || project.tags.some((tag) => selectedTags.includes(tag));
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTags && matchesSearch;
  });

  const toggleDescription = (slug: string) => {
    setExpandedProject(expandedProject === slug ? null : slug);
  };

  return (
    <>
      <Header />
      <div className="flex flex-row gap-8 p-6">
        {/* Left Side: Projects List */}
        <div className="w-2/3 space-y-6">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-md searchbar text-white focus:outline-none"
            />
          </div>

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

        {/* Right Side: Tag Filter */}
        <div className="w-1/3">
          <TagFilter tags={allTags} selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
        </div>
      </div>
    </>
  );
}
