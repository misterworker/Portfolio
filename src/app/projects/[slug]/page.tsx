import { notFound } from 'next/navigation';
import projects from '../projects';
import slugProjects from './slugProjects';

export default function ProjectPage({ params }: { params: { slug: string } }) {

  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return notFound();
  }

  const slugProject = slugProjects.find((p) => p.slug === params.slug);

  if (!slugProject) {
    return notFound();
  }

  return (
    <div className="container mx-auto p-6">
      {/* Back to Project link */}
      <a
        href="/projects" // Simple anchor tag to navigate back to the projects page
        className="text-blue-500 hover:text-blue-400 mt-4 mb-4"
      >
        &larr; Back to Projects
      </a>

      <h1 className="text-3xl font-bold text-blue-400">{project.title}</h1>
      <p className="text-gray-300 mt-2 text" dangerouslySetInnerHTML={{ __html: project.description }}/>

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
          const key = `${item.type}-${index}`; // Create a unique key using the item type and index
          switch (item.type) {
            case 'text':
              return (
                <p key={key} className="text-gray-300 mt-2 text" dangerouslySetInnerHTML={{ __html: item.content }} />
              );
            case 'image':
              return (
                <div key={key}>
                  <img
                    src={item.content}
                    alt={`Image ${index + 1}`}
                    className="mt-4 w-full h-auto rounded-md max-h-[500px] object-contain"
                  />
                  {item.desc && (
                    <p className="italic text-gray-400 mt-2 text-center">{item.desc}</p>
                  )}
                </div>
              );
            case 'video':
              return (
                <div key={key}>
                  <video controls className="mt-4 w-full max-h-[500px] object-contain rounded-md">
                    <source src={item.content} />
                    Your browser does not support the video tag.
                  </video>
                  {item.desc && (
                    <p className="italic text-gray-400 mt-2 text-center">{item.desc}</p>
                  )}
                </div>
              );
              case 'header':
                return (
                  <div key={key}>
                    {item.desc === 'h2' ? (
                      <h2 className="text-2xl font-bold text-gray-400 mt-4">{item.content}</h2>
                    ) : item.desc === 'h3' ? (
                      <h3 className="text-xl font-bold text-gray-400 mt-4">{item.content}</h3>
                    ) : null}
                  </div>
                );
            default:
              return null;
            }
        })}
      </div>
    </div>
  );
}
