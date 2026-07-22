import { DefaultSession } from "next-auth";

export type AppRole = "ADMIN" | "TEACHER" | "STUDENT";

declare module "next-auth" {
  interface User {
    id: string;
    role: AppRole;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  }

  interface Session {
    user: {
      id: string;
      role: AppRole;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: AppRole;
  }
}