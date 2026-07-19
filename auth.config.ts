import type { NextAuthConfig } from "next-auth";

export default {
  providers: [],

  pages: {
    signIn: "/login",
  },

  session: {
    strategy: "jwt",
  },

  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = !!auth?.user;
      const isDashboard = request.nextUrl.pathname.startsWith("/dashboard");

      if (isDashboard) {
        return isLoggedIn;
      }

      return true;
    },
  },
} satisfies NextAuthConfig;