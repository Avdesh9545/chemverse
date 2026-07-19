import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          Welcome to ChemVerse 🚀
        </h1>

        <p className="mt-4 text-lg">
          Signed in as <strong>{session.user?.email}</strong>
        </p>
      </div>
    </main>
  );
}