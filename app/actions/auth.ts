"use server";

import { signIn, signOut } from "@/auth";

export async function login(formData: FormData) {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");

  await signIn("credentials", {
    email,
    password,
    redirectTo: "/dashboard",
  });
}

export async function logout() {
  await signOut({
    redirectTo: "/login",
  });
}