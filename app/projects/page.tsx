// app/projects/page.tsx
import Link from "next/link";
import Image from "next/image";
import Particles from "../components/particles";

const projects = [
  {
    title: "Simulated CPU",
    description:
      "A high-level simulator for a 64-bit RISC CPU in C, inspired by an early MIPS processor, focusing on integer registers and instructions.",
    image: "/cpu.jpg",
  },
  {
    title: "Combat Sports Sparring Timer",
    description:
      "A timer app that offers customizable time options for different martial art forms.",
    image: "/timer.jpg",
  },
  {
    title: "Incoming Project",
    description: "Stay tuned for more exciting projects!",
    image: "/incoming.jpg",
  },
];

const ProjectsPage = () => {
  return (
    <div className="flex flex-col items-center justify-start w-screen min-h-screen overflow-hidden bg-gradient-to-tl from-navy via-navy to-navy">
      <nav className="mt-10 mb-9 animate-fade-in">
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
      <div className="max-w-6xl mx-auto text-center text-zinc-100 animate-fade-in">
        <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl my-4 text-center">
          My Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-zinc-800 rounded-lg p-6 shadow-lg">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="rounded-lg mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="text-zinc-400">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Particles className="absolute inset-0 -z-10" quantity={100} />
    </div>
  );
};

export default ProjectsPage;
