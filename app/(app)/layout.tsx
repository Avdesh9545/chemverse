import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { auth } from "@/auth";
import AppNavbar from "@/components/layout/AppNavbar";

type AppLayoutProps = {
  children: ReactNode;
};

export default async function AppLayout({
  children,
}: AppLayoutProps) {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <AppNavbar userName={session.user.name} />

      <main>{children}</main>
    </div>
  );
}