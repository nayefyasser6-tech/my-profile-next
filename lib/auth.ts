import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Admin",
      credentials: {
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const adminPassword = process.env.ADMIN_PASSWORD;

        if (!adminPassword || !credentials?.password) {
          return null;
        }

        if (credentials.password === adminPassword) {
          return { id: "admin", name: "Admin" };
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/admin/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
