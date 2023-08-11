import NextAuth from "next-auth/next";
import { authOptions } from "@/libs/auth";


const handler = NextAuth(authOptions)

export { handler as POST, handler as GET}

export const dynamic = "force-dynamic";