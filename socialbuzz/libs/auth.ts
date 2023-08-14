import prisma from "./prismadb";
import { AuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          throw new Error("Username and password are required");
        }

        console.log(credentials?.username);
        const user = await prisma.user.findUnique({
          where: { username: credentials?.username },
        });

        console.log(user);

        if (!user) {
          throw new Error("Invalid credentials");
        }

        const isValid = bcrypt.compare(
          credentials?.password,
          user?.hashedPassword
        );

        if (!isValid) {
          throw new Error("Invalid credentials");
        }

        return user;
      },
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/login",
  },
  callbacks: {
    async session({ session, token, user }) {
      return session;
    },
  },
};
