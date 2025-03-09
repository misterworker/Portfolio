import { notFound } from 'next/navigation';
import projects from '../projects'; // Keep the reference to projects
import slugProjects from './slugProjects'; // Import slugProjects

export default function ProjectPage({ params }: { params: { slug: string } }) {
  // Find the project based on the slug in 'projects'
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return notFound(); // If no project is found, render notFound
  }

  // Find the corresponding slugProject by the project's slug
  const slugProject = slugProjects.find((p) => p.slug === params.slug);

  if (!slugProject) {
    return notFound(); // If no matching slugProject is found, render notFound
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-400">{project.title}</h1>
      <p className="text-gray-300 mt-2 text">{project.description}</p>

      {/* Render GitHub link above the content */}
      {project.githubRepo && (
        <div className="mt-4">
          <a
            href={project.githubRepo}
            target="_blank"
            className="text-blue-500 hover:text-blue-400"
          >
            View on GitHub
          </a>
        </div>
      )}

      {/* Render media content based on type */}
      <div className="mt-6">
        {slugProject.media.map((item, index) => {
          switch (item.type) {
            case 'text':
              return (
                <p key={index} className="text-gray-300 mt-2" dangerouslySetInnerHTML={{ __html: item.content }} />
              );
            case 'image':
              return (
                <img
                  key={index}
                  src={item.content}
                  alt={`Image ${index + 1}`}
                  className="mt-4 w-full h-auto rounded-md max-h-[500px] object-contain"
                />
              );
            case 'video':
              return (
                <video key={index} controls className="mt-4 w-full max-h-[500px] object-contain rounded-md">
                  <source src={item.content} />
                  Your browser does not support the video tag.
                </video>
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}
