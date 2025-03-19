"use client"

import Image from "next/image";
import { certificates, Certificate } from "@/data/certs";
import { useState, MouseEvent } from "react";

export default function Certificates() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Certificates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <CertificateCard key={index} cert={cert} />
        ))}
      </div>
    </div>
  );
}

interface CertificateCardProps {
  cert: Certificate;
}

function CertificateCard({ cert }: CertificateCardProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  // Calculate tilt based on mouse position relative to card
  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!isHovered) return;
    
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    
    // Calculate mouse position relative to card center
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Convert to tilt angles (max 10 degrees)
    const tiltX = -(y / rect.height * 50); // Inverse Y for natural tilt
    const tiltY = (x / rect.width * 50);
    
    setTilt({ x: tiltX, y: tiltY });
  };
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 }); // Reset tilt when mouse leaves
  };
  
  return (
    <a
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col border border-gray-200 rounded-lg shadow-md overflow-hidden transition-all duration-300"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: isHovered ? 'transform 0.1s ease' : 'transform 0.5s ease',
        boxShadow: isHovered ? '0 10px 20px rgba(0,0,0,0.15)' : '0 4px 6px rgba(0,0,0,0.1)'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative h-48 w-full bg-gray-100">
        <Image
          src={cert.image}
          alt={cert.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4 flex-grow">
        <h3 className="font-semibold text-gray-800">{cert.title}</h3>
        {cert.issuer && (
          <p className="text-sm text-gray-600 mt-1">{cert.issuer}</p>
        )}
        {cert.date && (
          <p className="text-xs text-gray-500 mt-1">{cert.date}</p>
        )}
      </div>
    </a>
  );
}