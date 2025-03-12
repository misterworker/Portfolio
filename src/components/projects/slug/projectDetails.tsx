"use client";

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper-bundle.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

type ProjectDetailsProps = {
  project: {
    title: string;
    description: string;
    media: string | string[];
    githubRepo?: string;
  };
};

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  // Ensure media is always an array
  const mediaArray = Array.isArray(project.media) ? project.media : [project.media];

  // State to handle the swiper
  const [swiperRef, setSwiperRef] = useState<any>(null);

  return (
    <>
      <div className="container">
        {/* Back to Project link */}
        <a
          href="/projects" // Simple anchor tag to navigate back to the projects page
          className="text-blue-500 hover:text-blue-400 mb-6"
        >
          &larr; Back to Projects
        </a>
        <h1 className="text-3xl font-bold text-blue-400">{project.title}</h1>
        <p className="text-gray-300 mt-2 text" dangerouslySetInnerHTML={{ __html: project.description }} />

        {/* Project Media - Swiper Carousel */}
        {mediaArray.length > 1 ? (
          <div className="mt-4">
            <Swiper
              spaceBetween={10}
              navigation={true}
              pagination={{ clickable: false }}
              onSwiper={setSwiperRef}
              scrollbar={{ draggable: true }}
              loop={true}
              modules={[Pagination, Navigation]}
            >
              {mediaArray.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`${project.title} image ${index + 1}`}
                    className="w-full h-auto rounded-md max-h-[300px] object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <img
            src={mediaArray[0]}
            alt={project.title}
            className="mt-4 w-full h-auto rounded-md max-h-[500px] object-contain"
          />
        )}

        {/* GitHub Link */}
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
      </div>
    </>
  );
}
