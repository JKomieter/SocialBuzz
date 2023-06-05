import NextAuth from "next-auth/next";
import { authOptions } from "@/app/libs/auth";


const handler = NextAuth(authOptions)

export { handler as POST, handler as GET}