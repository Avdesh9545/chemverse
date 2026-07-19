import { login } from "@/app/actions/auth";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100">
      <form
        action={login}
        className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg"
      >
        <h1 className="mb-6 text-center text-3xl font-bold">
          ChemVerse Login
        </h1>

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="mb-4 w-full rounded border p-3"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="mb-6 w-full rounded border p-3"
          required
        />

        <button
          type="submit"
          className="w-full rounded bg-violet-600 p-3 font-semibold text-white hover:bg-violet-700"
        >
          Sign In
        </button>
      </form>
    </main>
  );
}