"use client";

import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  slug: string;
  tags: string[];
  media: string;
  githubRepo: string;
  expandedProject: string | null;
  toggleDescription: (slug: string) => void;
};

export default function ProjectCard({
  title,
  description,
  slug,
  tags,
  media,
  githubRepo,
  expandedProject,
  toggleDescription,
}: ProjectCardProps) {
  return (
    <div className="card p-6 rounded-md shadow-md transition-all">
      {/* Project Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-blue-400">{title}</h2>
        <Link
          href={githubRepo}
          target="_blank"
          className="text-blue-500 hover:text-blue-400"
        >
          GitHub
        </Link>
      </div>

      {/* Project Media */}
      {media && (
        <img
          src={media}
          alt={title}
          className="mt-4 w-full h-auto rounded-md"
        />
      )}

      {/* Tags */}
      <div className="mt-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-sm text-gray-400 mr-2 bg-gray-700 rounded-full px-3 py-1"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Description with Toggle */}
      <div className="mt-4">
        <button
          onClick={() => toggleDescription(slug)}
          className="text-blue-500 hover:text-blue-400 cursor-pointer"
        >
          {expandedProject === slug ? "Hide Description" : "Show Description"}
        </button>
        {expandedProject === slug && (
          <p className="mt-2 text-gray-300" dangerouslySetInnerHTML={{ __html: description }} />
        )}
      </div>
    </div>
  );
}
