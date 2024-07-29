import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Eye } from "lucide-react";

export const revalidate = 60;

const projects = [
  {
    slug: "project1",
    title: "Project One",
    description: "This is a description for Project One. It does amazing things with technology.",
    date: "2023-07-01",
    views: 18000,
  },
  {
    slug: "project2",
    title: "Project Two",
    description: "This is a description for Project Two. It provides outstanding features and performance.",
    date: "2023-04-01",
    views: 16000,
  },
  {
    slug: "project3",
    title: "Project Three",
    description: "This is a description for Project Three. It revolutionizes the way we use tools.",
    date: "2023-05-01",
    views: 7000,
  },
];

const featured = projects[0];
const top2 = projects[1];
const top3 = projects[2];
const sorted = projects.filter((p) => p.slug !== featured.slug && p.slug !== top2.slug && p.slug !== top3.slug);

export default function ProjectsPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">Projects</h2>
          <p className="mt-4 text-zinc-400"></p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            <article className="relative w-full h-full p-4 md:p-8">
              <div className="flex items-center justify-between gap-2">
                <div className="text-xs text-zinc-100">
                  {featured.date ? (
                    <time dateTime={new Date(featured.date).toISOString()}>
                      {Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(new Date(featured.date))}
                    </time>
                  ) : (
                    <span>SOON</span>
                  )}
                </div>
                <span className="flex items-center gap-1 text-xs text-zinc-500">
                  <Eye className="w-4 h-4" />{" "}
                  {Intl.NumberFormat("en-US", { notation: "compact" }).format(featured.views ?? 0)}
                </span>
              </div>

              <h2
                id="featured-post"
                className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
              >
                {featured.title}
              </h2>
              <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                {featured.description}
              </p>
              <div className="absolute bottom-4 md:bottom-8">
                <p className="hidden text-zinc-200 lg:block">Read more <span aria-hidden="true">&rarr;</span></p>
              </div>
            </article>
          </Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            {[top2, top3].map((project) => (
              <Card key={project.slug}>
                <Article project={project} views={project.views ?? 0} />
              </Card>
            ))}
          </div>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          {sorted.map((project, index) => (
            <div className="grid grid-cols-1 gap-4" key={index}>
              <Card>
                <Article project={project} views={project.views ?? 0} />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
