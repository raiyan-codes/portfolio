// app/projects/page.tsx
import Image from "next/image";
import { Metadata } from "next";
import { Navigation } from "../components/nav";
import Particles from "../components/particles";
import { Card } from "../components/card";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects | Raiyan Khan",
  description: "Explore my latest software engineering projects",
};

const projects = [
  {
    title: "Simulated CPU",
    description:
      "A high-level simulator for a 64-bit RISC CPU in C, inspired by an early MIPS processor, focusing on integer registers and instructions.",
    image: "/cpu.jpg",
    link: "https://github.com",
    tags: ["C", "Assembly", "RISC"]
  },
  {
    title: "Combat Sports Sparring Timer",
    description:
      "A timer app that offers customizable time options for different martial art forms.",
    image: "/timer.jpg",
    link: "https://github.com",
    tags: ["React", "JavaScript"]
  },
  {
    title: "Portfolio Website",
    description: "The responsive, modern portfolio website you're currently viewing.",
    image: "/portfolio.jpg",
    link: "https://github.com",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Incoming Project",
    description: "Stay tuned for more exciting projects!",
    image: "/incoming.jpg",
    tags: ["Coming Soon"]
  }
];

export default function ProjectsPage() {
  return (
    <div className="relative">
      <Navigation />
      <div className="px-6 pt-32 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-40 lg:pt-48">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h1>
          <p className="mt-4 text-zinc-400">
            A collection of projects I've built to showcase my skills and interests.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
          {projects.slice(0, 2).map((project, i) => (
            <Card
              key={i}
              href={project.link}
              className="relative overflow-hidden group"
            >
              <div className="relative z-10 flex flex-col p-6 h-full">
                <h2 className="mt-2 text-xl font-bold text-zinc-100 group-hover:text-white">
                  {project.title}
                </h2>
                <p className="mt-2 text-sm text-zinc-400 group-hover:text-zinc-300">
                  {project.description}
                </p>
                <div className="flex gap-2 mt-4 flex-wrap">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 text-xs rounded-full bg-zinc-800 text-zinc-300">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <div className="flex items-center gap-1 mt-4 text-zinc-400 group-hover:text-zinc-300">
                    <span className="text-sm">View Project</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
        
        <div className="grid grid-cols-1 gap-4 mx-auto sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(2).map((project, i) => (
            <Card
              key={i}
              href={project.link}
              className="relative overflow-hidden group"
            >
              <div className="relative z-10 flex flex-col p-6 h-full">
                <h2 className="text-lg font-semibold text-zinc-100 group-hover:text-white">
                  {project.title}
                </h2>
                <p className="mt-2 text-sm text-zinc-400 group-hover:text-zinc-300">
                  {project.description}
                </p>
                <div className="flex gap-2 mt-4 flex-wrap">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 text-xs rounded-full bg-zinc-800 text-zinc-300">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <div className="flex items-center gap-1 mt-4 text-zinc-400 group-hover:text-zinc-300">
                    <span className="text-sm">View Project</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
      <Particles className="absolute inset-0 -z-10" quantity={100} />
    </div>
  );
}
