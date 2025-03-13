"use client";

import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css/zoom";

// modules
import { Pagination, Navigation, Zoom } from 'swiper/modules';

type ProjectCardProps = {
  title: string;
  description: string;
  slug: string;
  tags: string[];
  media: string | string[];
  githubRepo: string;
};

export default function ProjectCard({
  title,
  description,
  slug,
  tags,
  media,
  githubRepo,
}: ProjectCardProps) {
  // Ensure media is always an array
  const mediaArray = Array.isArray(media) ? media : [media];

  // State to handle the swiper
  const [swiperRef, setSwiperRef] = useState<any>(null);

  return (
    <div className="group relative bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:translate-y-[-4px]">
      {/* Project Media - Swiper Carousel */}
      <div
        className="w-full h-48 sm:h-56 md:h-64 overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {mediaArray.length > 1 ? (
          <Swiper
            spaceBetween={0}
            navigation={true}
            pagination={{ clickable: true }}
            onSwiper={setSwiperRef}
            zoom={true}
            loop={true}
            modules={[Pagination, Navigation, Zoom]}
            className="h-full w-full"
          >
            {mediaArray.map((image, index) => (
              <SwiperSlide key={index} className="h-full">
                <div className="h-full w-full flex items-center justify-center">
                  <img
                    src={image}
                    alt={`${title} image ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <img
            src={mediaArray[0]}
            alt={title}
            className="w-full h-full object-cover"
          />
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
      </div>

      <Link href={`/projects/${slug}`} className="absolute inset-0 top-[50%] z-10">
        <span className="sr-only">View {title} project</span>
      </Link>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          {/* Title */}
          <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h2>

          {/* Github Icon */}
          <a
            href={githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-gray-700 relative z-20"
            aria-label="GitHub repository"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-4 line-clamp-3" dangerouslySetInnerHTML={{ __html: description }} />

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-gray-300 bg-gray-700/50 rounded-full px-2 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      {/* Hover Effect Indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  );
}
