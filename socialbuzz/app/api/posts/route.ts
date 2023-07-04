import prisma from "@/app/libs/prismadb";
import { NextResponse, NextRequest } from "next/server";
import getCurrentUser from "@/app/libs/serverAuth";

export async function GET(req: NextRequest) {
  try {
    const { currentUser } = await getCurrentUser();

    if (!currentUser?.email) {
      const url = req.nextUrl.clone();
      url.pathname = "/auth/login";
      return NextResponse.rewrite(url);
    }

    const posts = await prisma.post.findMany({});

    return NextResponse.json(posts);

  } catch (error) {

    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}
