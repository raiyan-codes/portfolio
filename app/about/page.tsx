import { Metadata } from "next";
import { Navigation } from "../components/nav";
import Particles from "../components/particles";
import AboutContent from "./about-content";

export const metadata: Metadata = {
  title: "About | Raiyan",
  description: "Learn more about Raiyan - Software Engineer & Developer",
};

export default function About() {
  return (
    <div className="relative">
      <Navigation />
      <AboutContent />
      <Particles className="absolute inset-0 -z-10" quantity={150} />
    </div>
  );
}
