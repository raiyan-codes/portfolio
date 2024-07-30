"use client";

import { Github, Mail } from "lucide-react";
import Link from "next/link";
import Particles from "../components/particles";
import { Card } from "../components/card";

const socials = [
  {
    icon: <Mail size={20} />,
    href: "mailto:rgconsults101@gmail.com",
    label: "Email",
    handle: "rgconsults101@gmail.com",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/raiyan-codes",
    label: "Github",
    handle: "raiyan-codes",
  },
];

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-start w-screen min-h-screen overflow-hidden bg-gradient-to-tl from-navy via-navy to-navy">
      <nav className="mt-6 mb-6 animate-fade-in">
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
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-16 sm:mt-0 sm:grid-cols-2 lg:gap-16">
          {socials.map((s, index) => (
            <Card key={index}>
              <Link
                href={s.href}
                target="_blank"
                className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16"
              >
                <span
                  className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                  {s.icon}
                </span>
                <div className="z-10 flex flex-col items-center">
                  <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                    {s.handle}
                  </span>
                  <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    {s.label}
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
      <Particles className="absolute inset-0 -z-10" quantity={100} />
    </div>
  );
}
