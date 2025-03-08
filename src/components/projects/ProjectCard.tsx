"use client";

import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

// import swiper style
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// modules
import { Pagination, Navigation } from 'swiper/modules';

type ProjectCardProps = {
  title: string;
  description: string;
  slug: string;
  tags: string[];
  media: string | string[]; // media can be a single string or an array of strings
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
  // Ensure media is always an array
  const mediaArray = Array.isArray(media) ? media : [media];

  // State to handle the swiper
  const [swiperRef, setSwiperRef] = useState<any>(null);

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
                  alt={`${title} image ${index + 1}`}
                  className="w-full h-auto rounded-md max-h-[300px] object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <img
          src={mediaArray[0]}
          alt={title}
          className="mt-4 w-full h-auto rounded-md max-h-[500px] object-contain"
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
