import prisma from "@/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {

    const posts = await prisma.post.findMany({});

    return NextResponse.json(posts);

  } catch (error) {

    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}


export const dynamic = "force-dynamic";