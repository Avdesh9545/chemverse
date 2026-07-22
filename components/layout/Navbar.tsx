import Link from "next/link";

import { auth } from "@/auth";
import ChemVerseLogo from "@/components/ui/ChemVerseLogo";
import UserMenu from "@/components/layout/UserMenu";
import SearchBar from "./SearchBar";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Classes",
    href: "/class",
  },
  {
    label: "Notes",
    href: "/class",
  },
  {
    label: "Practice",
    href: "/class",
  },
  {
    label: "Tests",
    href: "/class",
  },
];

export default async function Navbar() {
  const session = await auth();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/75 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1550px] items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-4 transition-transform duration-300 hover:scale-[1.02]"
        >
          <div className="text-violet-600">
            <ChemVerseLogo size={56} />
          </div>

          <div>
            <h1 className="text-[34px] font-extrabold leading-none tracking-tight text-slate-900">
              ChemVerse
            </h1>

            <p className="mt-0.5 text-sm font-medium tracking-wide text-slate-500">
              Learn Chemistry Smarter
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative text-[17px] font-semibold tracking-tight text-slate-700 transition-colors duration-300 hover:text-violet-600 after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-violet-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <div className="hidden xl:block">
            <SearchBar />
          </div>

          {session?.user ? (
            <>
              <Link
                href="/dashboard"
                className="rounded-2xl bg-violet-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-700 hover:shadow-xl active:scale-95"
              >
                Dashboard
              </Link>

              <UserMenu userName={session.user.name} />
            </>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                href="/login"
                className="rounded-2xl border border-violet-600 px-6 py-3 font-semibold text-violet-700 transition-all duration-300 hover:bg-violet-50"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="rounded-2xl bg-violet-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-violet-700 hover:shadow-xl active:scale-95"
              >
                Register →
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}