"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import UserMenu from "./UserMenu";

type NavItem = {
  label: string;
  href: string;
  disabled?: boolean;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Classes", href: "/class" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Bookmarks", href: "#", disabled: true },
  { label: "About", href: "#", disabled: true },
];

type AppNavbarProps = {
  userName?: string | null;
};

export default function AppNavbar({
  userName,
}: AppNavbarProps) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-lg font-bold text-white">
            C
          </div>

          <div>
            <p className="text-lg font-bold text-slate-900">
              ChemVerse
            </p>

            <p className="text-xs text-slate-500">
              Learn Chemistry Smarter
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) =>
            item.disabled ? (
              <span
                key={item.label}
                className="cursor-not-allowed text-sm font-medium text-slate-400"
              >
                {item.label}
              </span>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`border-b-2 pb-1 text-sm font-medium transition ${
                  pathname === item.href
                    ? "border-violet-600 text-violet-600"
                    : "border-transparent text-slate-700 hover:border-violet-300 hover:text-violet-600"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* User Menu */}
        <UserMenu userName={userName} />
      </div>
    </header>
  );
}