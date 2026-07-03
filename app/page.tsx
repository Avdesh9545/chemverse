import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import GradesSection from "@/components/home/GradesSection";
import NotesSection from "@/components/notes/NotesSection";
import StatsSection from "@/components/home/StatsSection";
export default function Home() {
  return (
    <>
  <Navbar />
  <Hero />
  <GradesSection />
  <NotesSection />
  <StatsSection />
    </>
  );
}