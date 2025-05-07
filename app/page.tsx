import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-900/70 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-400 hover:text-zinc-100"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-full h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={150}
      />
      
      <h1 className="z-10 text-5xl text-transparent duration-1000 cursor-default font-display sm:text-7xl md:text-9xl bg-clip-text bg-gradient-to-r from-zinc-100/90 to-zinc-400 animate-title">
        Raiyan
      </h1>
      
      <div className="hidden w-full h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      
      <div className="my-8 text-center animate-fade-in">
        <h2 className="text-md text-zinc-400 mx-6 md:mx-0">
          Software Engineer & Developer. Building innovative digital experiences.
        </h2>
      </div>
      
      <div className="flex flex-row items-center justify-center gap-5 mt-4 animate-fade-in">
        <Link
          href="https://github.com/"
          target="_blank"
          className="text-zinc-400 hover:text-zinc-100 transition-colors"
        >
          <Github className="w-6 h-6" />
        </Link>
        <Link
          href="https://linkedin.com/in/"
          target="_blank"
          className="text-zinc-400 hover:text-zinc-100 transition-colors"
        >
          <Linkedin className="w-6 h-6" />
        </Link>
        <Link
          href="mailto:gr2257@nyu.edu"
          className="text-zinc-400 hover:text-zinc-100 transition-colors"
        >
          <Mail className="w-6 h-6" />
        </Link>
      </div>
      
      <Link
        href="/about"
        className="flex items-center mt-8 text-zinc-400 hover:text-zinc-100 transition-colors animate-fade-in"
      >
        <span className="mr-2">View my work</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
