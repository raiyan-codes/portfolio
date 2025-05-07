import { Metadata } from "next";
import { Navigation } from "../components/nav";
import Particles from "../components/particles";
import ContactContent from "./contact-content";

export const metadata: Metadata = {
  title: "Contact | Raiyan",
  description: "Get in touch with Raiyan",
};

export default function Contact() {
  return (
    <div className="relative">
      <Navigation />
      <ContactContent />
      <Particles className="absolute inset-0 -z-10" quantity={150} />
    </div>
  );
}
