"use client";

import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsGithub } from "react-icons/bs";
import {useRouter} from "next/navigation"

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
  const router = useRouter();

  // Ensure media is always an array
  const mediaArray = Array.isArray(media) ? media : [media];

  // State to handle the swiper
  const [swiperRef, setSwiperRef] = useState<any>(null);

  return (
    <div className="
    group relative card-background rounded-lg overflow-hidden transition-all duration-300 
    hover:shadow-lg hover:shadow-blue-500/20 hover:translate-y-[-4px] cursor-pointer
    ">
      {/* Project Media - Swiper Carousel */}
      <div
        className="w-full h-48 sm:h-56 md:h-64 overflow-hidden relative"
        onClick={(e) => {
          e.stopPropagation(); 
        }}
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
            onClick={(e) => {
              router.push(`/projects/${slug}`);
            }}
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

      <Link href={`/projects/${slug}`} className="absolute inset-0 top-[65%] z-10">
        <span className="sr-only">View {title} project</span>
      </Link>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          {/* Title */}
          <h2 className="text-xl font-bold group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h2>

          {/* Github Icon */}
          <a
            href={githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text hover:text-white transition-colors p-2 rounded-full hover:bg-gray-700 relative z-20"
            aria-label="GitHub repository"
          >
            <BsGithub size={20}/>
          </a>
        </div>

        {/* Description */}
        <p className="card-desc-text mb-4 line-clamp-3" dangerouslySetInnerHTML={{ __html: description }} />

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-gray-300 card-tag rounded-full px-2 py-1"
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
