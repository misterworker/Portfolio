import { notFound } from 'next/navigation';
import projects from '../projects';
import slugProjects from './slugProjects';
import ProjectPageClient from '@/components/projects/SlugClient';
import Sidebar from '@/components/projects/SlugSidebar';

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return notFound();
  }

  const slugProject = slugProjects.find((p) => p.slug === params.slug);

  if (!slugProject) {
    return notFound();
  }

  // Extract headers for the sidebar
  const headers = slugProject.media
    .filter(item => item.type === 'header')
    .map((item) => ({
      content: item.content,
      desc: item.desc,
      id: item.id
    }));

  return (
    <div className="flex min-h-screen"> {/* Flexbox layout to place sidebar and content side by side */}
      
      {/* Sidebar */}
      <Sidebar headers={headers} />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6 ml-64"> {/* Adjust margin to accommodate the sidebar */}
        <ProjectPageClient project={project} />

        {/* Render media content based on type */}
        <div className="mt-6">
          {slugProject.media.map((item, index) => {
            switch (item.type) {
              case 'text':
                return (
                  <p key={item.id} className="text-gray-300 mt-2 text" dangerouslySetInnerHTML={{ __html: item.content }} />
                );
              case 'image':
                return (
                  <div key={item.id}>
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
                  <div key={item.id}>
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
                  <div key={item.id} id = {item.id}>
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
    </div>
  );
}
