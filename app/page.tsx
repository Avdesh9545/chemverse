import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import FeaturesSection from "@/components/home/FeaturesSection";
import GradesSection from "@/components/home/GradesSection";
import NotesSection from "@/components/notes/NotesSection";
import StatsSection from "@/components/home/StatsSection";
import Footer from "@/components/layout/Footer";
//import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturesSection />
      <GradesSection />
      <NotesSection />
      <StatsSection />
      <Footer />
    </>
  );
}