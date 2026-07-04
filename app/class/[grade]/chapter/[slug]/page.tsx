import NotesHero from "./components/NotesHero";
import NotesSidebar from "./components/NotesSidebar";
import NotesContent from "./components/NotesContent";
import PDFViewer from "./components/PDFViewer";
import DownloadCard from "./components/DownloadCard";

export default function NotesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10">

      <NotesHero
        title="Matter in Our Surroundings Notes"
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-4">

        <div className="space-y-6">
          <NotesSidebar />
          <DownloadCard />
        </div>

        <div className="lg:col-span-3 space-y-8">
          <NotesContent />
          <PDFViewer />
        </div>

      </div>

    </main>
  );
}