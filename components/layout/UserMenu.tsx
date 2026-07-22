"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

type UserMenuProps = {
  userName?: string | null;
};

export default function UserMenu({ userName }: UserMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-3 rounded-xl px-3 py-2 transition hover:bg-slate-100"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 font-bold text-violet-700">
          {userName?.charAt(0).toUpperCase() ?? "U"}
        </div>

        <div className="hidden text-left md:block">
          <p className="text-sm font-semibold text-slate-900">
            {userName ?? "Student"}
          </p>

          <p className="text-xs text-slate-500">
            View Menu
          </p>
        </div>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 rounded-2xl border border-slate-200 bg-white shadow-xl">
          <Link
            href="/dashboard"
            className="block px-5 py-3 hover:bg-slate-50"
          >
            Dashboard
          </Link>

          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="w-full px-5 py-3 text-left text-red-600 hover:bg-red-50"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}