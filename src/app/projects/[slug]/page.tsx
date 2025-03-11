import { notFound } from "next/navigation";
import { use } from "react";
import projects from "../projects";
import slugProjects from "./slugProjects";
import ProjectBlog from "./projectBlog";

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);

  const project = projects.find((p) => p.slug === slug);
  const slugProject = slugProjects.find((p) => p.slug === slug);

  if (!project || !slugProject) {
    return notFound();
  }
  return <ProjectBlog project={project} slugProject={slugProject} />;
}
