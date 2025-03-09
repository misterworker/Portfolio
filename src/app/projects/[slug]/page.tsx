"use client"

import { notFound, useParams } from "next/navigation";
import projects from "../projects";
import Header from "@/components/Header";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

// import swiper style
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// modules
import { Pagination, Navigation } from 'swiper/modules';


export default function ProjectPage() {
  const params = useParams();
  const projectSlug = params.slug as string;
  const project = projects.find((p) => p.slug === projectSlug);
  if (!project) {
    return notFound();
  }
  
  // Ensure media is always an array
  const mediaArray = Array.isArray(project.media) ? project.media : [project.media];

  // State to handle the swiper
  const [swiperRef, setSwiperRef] = useState<any>(null);

  return (
    <>
      <Header />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-blue-400">{project.title}</h1>
        <p className="text-gray-300 mt-2 text" dangerouslySetInnerHTML={{ __html: project.description }}/>

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
                    alt={`${[project.title]} image ${index + 1}`}
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
