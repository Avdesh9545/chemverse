import { ReactNode } from "react";
import AppNavbar from "./AppNavbar";

type AppShellProps = {
  userName?: string | null;
  children: ReactNode;
};

export default function AppShell({
  userName,
  children,
}: AppShellProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <AppNavbar userName={userName} />

      <main>{children}</main>
    </div>
  );
}