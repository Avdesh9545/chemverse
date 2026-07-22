"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const body = {
  name: formData.get("name"),
  email: formData.get("email"),
  password: formData.get("password"),
  confirmPassword: formData.get("confirmPassword"),
};

    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const result = await response.json();

    setLoading(false);

   if (!response.ok) {
  console.log(result);
  setError(
    result.message ??
    JSON.stringify(result.errors) ??
    "Registration failed."
  );
  return;
}

    router.push("/login");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg"
      >
        <h1 className="mb-6 text-center text-3xl font-bold">
          Create Account
        </h1>

        <input
          name="name"
          type="text"
          placeholder="Full Name"
          required
          className="mb-4 w-full rounded border p-3"
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="mb-4 w-full rounded border p-3"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          className="mb-4 w-full rounded border p-3"
        />
        <input
  name="confirmPassword"
  type="password"
  placeholder="Confirm Password"
  required
  className="mb-4 w-full rounded border p-3"
/>

        {error && (
          <p className="mb-4 text-sm text-red-600">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded bg-violet-600 p-3 font-semibold text-white hover:bg-violet-700 disabled:opacity-50"
        >
          {loading ? "Creating..." : "Create Account"}
        </button>
      </form>
    </main>
  );
}