"use client";

import Link from "next/link";
import React, { useState } from "react";
import Particles from "../components/particles";

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  const renderContent = () => {
    switch (activeTab) {
      case "skills":
        return (
          <ul className="list-disc list-inside text-left pl-4 flex flex-col gap-4">
            <li className="flex items-center">
              <img src="/cs_icons/javascript.jpg" alt="JavaScript" className="w-8 h-8 mr-2" />
              JavaScript
            </li>
            <li className="flex items-center">
              <img src="/cs_icons/react.jpg" alt="React" className="w-8 h-8 mr-2" />
              React
            </li>
            <li className="flex items-center">
              <img src="/cs_icons/nextdotjs.jpg" alt="Next.js" className="w-8 h-8 mr-2" />
              Next.js
            </li>
            <li className="flex items-center">
              <img src="/cs_icons/nodedotjs.jpg" alt="Node.js" className="w-8 h-8 mr-2" />
              Node.js
            </li>
            <li className="flex items-center">
              <img src="/cs_icons/python.jpg" alt="Python" className="w-8 h-8 mr-2" />
              Python
            </li>
            <li className="flex items-center">
              <img src="/cs_icons/vite.jpg" alt="Vite" className="w-8 h-8 mr-2" />
              Vite
            </li>
            <li className="flex items-center">
              <img src="/cs_icons/kalilinux.jpg" alt="Kali Linux" className="w-8 h-8 mr-2" />
              Kali Linux
            </li>
          </ul>
        );
      case "education":
        return <p className="text-sm">B.S. in Computer Science from New York University</p>;
      case "certifications":
        return (
          <ul className="list-disc list-inside text-left pl-4 text-sm">
            <li>Google Professional Cybersecurity Certificate</li>
            <li>COMPtia Security+ (in progress)</li>
          </ul>
        );
      case "sportshighlights":
        return (
          <div>
            <Link href="/sportshighlights">
              <button className="px-4 py-2 text-sm text-white bg-blue-600 rounded-full">
                View Sports Highlights
              </button>
            </Link>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen overflow-hidden bg-gradient-to-tl from-navy via-navy to-navy">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          <Link href="/" className="text-sm duration-500 text-zinc-500 hover:text-zinc-300">
            Home
          </Link>
          <Link href="/projects" className="text-sm duration-500 text-zinc-500 hover:text-zinc-300">
            Projects
          </Link>
          <Link href="/about" className="text-sm duration-500 text-zinc-500 hover:text-zinc-300">
            About
          </Link>
          <Link href="/contact" className="text-sm duration-500 text-zinc-500 hover:text-zinc-300">
            Contact
          </Link>
        </ul>
      </nav>
      <div className="max-w-6xl mx-auto my-16 text-center text-zinc-100 animate-fade-in">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src="/headshot.jpg"
            alt="Raiyan"
            className="w-full md:w-1/4 object-cover rounded-lg shadow-lg"
          />
          <div className="flex flex-col items-center md:items-start text-left md:text-left">
            <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl my-4">About Me</h1>
            <p className="text-base mb-8">
              Hi, I'm Raiyan. I'm a software engineer with a passion for building web applications.
              [Your filler text here]
            </p>
            <div className="flex gap-4 mb-4">
              <span
                onClick={() => setActiveTab("skills")}
                className={`cursor-pointer text-base ${
                  activeTab === "skills" ? "text-white border-b-2 border-purple-500" : "text-zinc-500"
                }`}
              >
                Skills
              </span>
              <span
                onClick={() => setActiveTab("education")}
                className={`cursor-pointer text-base ${
                  activeTab === "education" ? "text-white border-b-2 border-purple-500" : "text-zinc-500"
                }`}
              >
                Education
              </span>
              <span
                onClick={() => setActiveTab("certifications")}
                className={`cursor-pointer text-base ${
                  activeTab === "certifications" ? "text-white border-b-2 border-purple-500" : "text-zinc-500"
                }`}
              >
                Certifications
              </span>
              <span
                onClick={() => setActiveTab("sportshighlights")}
                className={`cursor-pointer text-base ${
                  activeTab === "sportshighlights" ? "text-white border-b-2 border-purple-500" : "text-zinc-500"
                }`}
              >
                Sports Highlights
              </span>
            </div>
            <div>{renderContent()}</div>
            <div className="my-8">
              <Link href="/path-to-your-resume.pdf">
                <button className="px-4 py-2 text-sm text-white bg-blue-600 rounded-full">
                  Download Resume
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Particles className="absolute inset-0 -z-10" quantity={100} />
    </div>
  );
}
