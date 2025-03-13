"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import TagFilter from "./TagFilter";

type ProjectsListProps = {
  projects: {
    slug: string;
    title: string;
    description: string;
    tags: string[];
    media: string | string[];
    githubRepo: string;
  }[];
  allTags: string[];
};

export default function ProjectsList({ projects, allTags }: ProjectsListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState(allTags);

  const filteredProjects = projects.filter((project) => {
    const matchesTags = selectedTags.length === allTags.length || project.tags.some((tag) => selectedTags.includes(tag));
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTags && matchesSearch;
  });

  return (
    <div className="w-full space-y-6">
      {/* Search Input */}
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 rounded-md searchbar text-white focus:outline-none"
        />
      </div>

      {/* Tag Filter */}
      <div className="relative w-full max-w-md">
        <TagFilter tags={allTags} selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
      </div>

      {/* Project Cards */}
      {filteredProjects.map((project) => (
        <ProjectCard
          key={project.slug}
          title={project.title}
          description={project.description}
          slug={project.slug}
          tags={project.tags}
          media={project.media}
          githubRepo={project.githubRepo}
        />
      ))}
    </div>
  );
}
