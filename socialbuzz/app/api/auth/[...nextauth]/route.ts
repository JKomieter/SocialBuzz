import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/app/libs/prismadb";
import bcrypt from "bcrypt";
import { AuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";


export const authOption: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.username || !credentials?.password) {
                    throw new Error("Please enter username and password")
                }
                // find user in database and compare password
                const user = await prisma.user.findUnique({
                    where: {
                        username: credentials.username
                    }
                })

                if (!user || !user.hashedPassword) {
                    throw new Error("Invalid username or password")
                }

                const isValid = await bcrypt.compare(credentials.password, user.hashedPassword)

                if (!isValid) {
                    throw new Error("Invalid username or password")
                }

                return user;
            }
        })
    ],
    debug: process.env.NODE_ENV === "development",
    jwt: {
        secret: process.env.NEXTAUTH_SECRET
    },
    session: {
        strategy: "jwt",
    }
}

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };