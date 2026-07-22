"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import ChemVerseLogo from "@/components/ui/ChemVerseLogo";
import UserMenu from "./UserMenu";

type NavItem = {
  label: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    label: "Classes",
    href: "/class",
  },
];

type AppNavbarProps = {
  userName?: string | null;
};

export default function AppNavbar({
  userName,
}: AppNavbarProps) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/dashboard"
          className="flex items-center gap-3"
        >
          <ChemVerseLogo size={42} />

          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">
              ChemVerse
            </h1>

            <p className="text-xs text-slate-500">
              Learn Chemistry Smarter
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => {
            const active =
              pathname === item.href ||
              pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`border-b-2 pb-1 text-sm font-semibold transition ${
                  active
                    ? "border-violet-600 text-violet-600"
                    : "border-transparent text-slate-700 hover:border-violet-300 hover:text-violet-600"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* User Menu */}
        <UserMenu userName={userName} />
      </div>
    </header>
  );
}