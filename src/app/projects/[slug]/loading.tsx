"use client";

import React from "react";

export default function ProjectBlogLoading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <div className="text-center">
        <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-blue-400 border-r-transparent align-middle mb-6"></div>
        
        <h2 className="text-xl md:text-2xl text-white font-semibold mb-2">
          Loading project...
        </h2>
        <p className="text-gray-400">
          Please wait while we prepare the content for you
        </p>
      </div>
      
      {/* Skeleton UI for project content */}
      <div className="w-full max-w-4xl mt-12 px-4">
        {/* Project title skeleton */}
        <div className="h-8 bg-gray-700 rounded-md w-3/4 mb-4 animate-pulse"></div>
        
        {/* Description skeleton */}
        <div className="h-4 bg-gray-700 rounded-md w-full mb-2 animate-pulse"></div>
        <div className="h-4 bg-gray-700 rounded-md w-5/6 mb-2 animate-pulse"></div>
        <div className="h-4 bg-gray-700 rounded-md w-4/6 mb-6 animate-pulse"></div>
        
        {/* Tags skeleton */}
        <div className="flex flex-wrap gap-2 mb-8">
          <div className="h-6 bg-gray-700 rounded-full w-20 animate-pulse"></div>
          <div className="h-6 bg-gray-700 rounded-full w-24 animate-pulse"></div>
          <div className="h-6 bg-gray-700 rounded-full w-16 animate-pulse"></div>
        </div>
        
        {/* Image skeleton */}
        <div className="h-64 bg-gray-700 rounded-md w-full mb-8 animate-pulse"></div>
        
        {/* Content sections skeleton */}
        <div className="h-6 bg-gray-700 rounded-md w-1/3 mb-4 animate-pulse"></div>
        <div className="h-4 bg-gray-700 rounded-md w-full mb-2 animate-pulse"></div>
        <div className="h-4 bg-gray-700 rounded-md w-full mb-2 animate-pulse"></div>
        <div className="h-4 bg-gray-700 rounded-md w-5/6 mb-6 animate-pulse"></div>
      </div>
    </div>
  );
}