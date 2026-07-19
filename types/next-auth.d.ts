import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: "STUDENT" | "TEACHER" | "ADMIN";
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}

declare module "@auth/core/types" {
  interface User {
    id: string;
    role: "STUDENT" | "TEACHER" | "ADMIN";
  }
}