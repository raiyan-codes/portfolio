"use client";

import { Github, Mail, Linkedin, Phone, MapPin, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Card } from "../components/card";
import TypingText from "@/app/components/typing-text";
import PageLoader from "@/app/components/page-loader";
import { motion } from "framer-motion";

const socials = [
  {
    icon: <Mail size={24} />,
    href: "mailto:gr2257@nyu.edu",
    label: "Email",
    handle: "gr2257@nyu.edu",
    color: "group-hover:text-blue-400",
  },
  {
    icon: <Phone size={24} />,
    href: "tel:347-748-5284",
    label: "Phone",
    handle: "(347) 748-5284",
    color: "group-hover:text-green-400",
  },
  {
    icon: <Github size={24} />,
    href: "https://github.com/raiyan-codes",
    label: "Github",
    handle: "raiyan-codes",
    color: "group-hover:text-purple-400",
  },
  {
    icon: <Linkedin size={24} />,
    href: "https://linkedin.com/in/",
    label: "LinkedIn",
    handle: "Connect with me",
    color: "group-hover:text-blue-500",
  },
];

export default function ContactContent() {
  return (
    <>
      <PageLoader />
      <div className="px-6 pt-32 mx-auto space-y-8 max-w-7xl lg:px-8 md:pt-40 lg:pt-48">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <motion.h1 
            className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl font-mono"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="relative">
              Let's Connect
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-[3px] bg-emerald-400"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </span>
          </motion.h1>
          <motion.p 
            className="mt-4 text-zinc-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </motion.p>
        </div>

        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-16 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
          {socials.map((s, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card>
                <Link
                  href={s.href}
                  target={s.href.startsWith("mailto:") || s.href.startsWith("tel:") ? "_self" : "_blank"}
                  className="p-4 relative flex flex-col items-center gap-4 h-full duration-700 group md:gap-8 md:py-16 lg:py-20"
                >
                  <span
                    className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                    aria-hidden="true"
                  />
                  <span className={`relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 ${s.color}`}>
                    {s.icon}
                  </span>
                  <div className="z-10 flex flex-col items-center">
                    <span className="text-xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
                      {s.handle}
                    </span>
                    <span className="mt-2 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                      {s.label}
                    </span>
                  </div>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 pt-10 border-t border-zinc-800 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col space-y-3">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-zinc-400" />
                <span className="text-zinc-300">New York, NY</span>
              </div>
              <Link
                href="https://raiyan-new.vercel.app/"
                target="_blank"
                className="flex items-center text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                <span>raiyan-new.vercel.app</span>
              </Link>
            </div>
            
            <div className="flex gap-4">
              <Link
                href="/resume.pdf"
                target="_blank"
                className="px-5 py-2 text-sm text-white bg-zinc-800 hover:bg-zinc-700 rounded-full transition-colors hover:shadow-glow"
              >
                Download Resume
              </Link>
              <Link
                href="/about"
                className="px-5 py-2 text-sm text-zinc-900 bg-white hover:bg-zinc-200 rounded-full transition-colors"
              >
                View My Work
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
} 