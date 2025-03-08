"use client"

import Image from 'next/image';
import Header from '@/components/Header';
import { BsGithub, BsLinkedin, BsFillPhoneFill, BsFillEnvelopeFill } from 'react-icons/bs';
import { FaCopy } from "react-icons/fa";
import { useState } from 'react';

export default function Home() {
  const [isCopied, setIsCopied] = useState(false);

  // Function to handle copying email to clipboard
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("ethanroo2016@gmail.com");
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset the copied state after 2 seconds
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen p-6 text">
        {/* Profile Picture */}
        <div className="mb-6">
          <Image
            src="/images/others/goober_pfp.jpg"
            alt="Profile Picture"
            width={150}
            height={150}
            className="rounded-full border-4 border-gray-500"
          />
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 text-lg mb-6">
          <a
            href="https://github.com/misterworker"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-blue-400"
          >
            <BsGithub size={20} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ethan-lee-224659251"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-blue-400"
          >
            <BsLinkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a
            href="tel:+1234567890"
            className="flex items-center space-x-2 hover:text-blue-400"
          >
            <BsFillPhoneFill size={20} />
            <span>Phone</span>
          </a>
          <a
            href="mailto:ethanroo2016@gmail.com"
            className="flex items-center space-x-2 hover:text-blue-400"
          >
            <BsFillEnvelopeFill size={20} />
            <span>Email</span>
          </a>
          {/* Copy Email Button */}
          <button
            onClick={copyEmail}
            className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer"
          >
            <FaCopy size={20} />
            <span>{isCopied ? "Copied!" : "Copy Email"}</span>
          </button>
        </div>

        {/* About Me Section */}
        <section className="max-w-xl text-center">
          <p className="text-xl text font-semibold mb-6">
            Application Developer, Data Analyst, Casual Armwrestler.
          </p>
          <p className="text mb-4">
            I haven't always been in the tech space, but my interest piqued when I entered <b>Applied AI & Analytics</b> at <b>Nanyang Polytechnic</b>. Since then, I founded a startup called <b>Maibel.ai</b> and created various personal projects (Including this!).
          </p>
          <p className="text mb-6">
            I also take an interest in fitness, casually trying out powerlifting, bodybuilding, and most recently <b>armwrestling</b>.
          </p>
        </section>

        {/* Call to Action - View Projects */}
        <section className="mt-10 text-center">
          <a
            href="/projects"  // Link to your projects page (update as needed)
            className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
          >
            View My Projects
          </a>
        </section>
      </main>
    </>
  );
}
