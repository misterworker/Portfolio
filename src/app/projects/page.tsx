import Header from "@/components/Header";
import ProjectsList from "@/components/projects/ProjectsList";
import projects from "../../data/projects";

export default function ProjectsPage() {
  // Extract unique tags from projects on the server
  const allTags = [...new Set(projects.flatMap((project) => project.tags))];

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row gap-8 p-6">
        <ProjectsList projects={projects} allTags={allTags} />
      </div>
    </>
  );
}
