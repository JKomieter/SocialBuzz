import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import getCurrentUser from "@/app/libs/serverAuth";
import { NextApiRequest } from "next";

export async function GET(req: NextApiRequest) {
  try {
    const { currentUser } = await getCurrentUser();
    const { userId } = req.query;

    let posts;

    if (userId && currentUser) {
      // Return posts for a specific user
      posts = await prisma.post.findMany({
        where: {
          userId: userId as string,
        },
      });

      return NextResponse.json(posts);
    }

    return NextResponse.json([]);
  } catch (error) {

    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}
