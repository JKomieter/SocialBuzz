import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import getCurrentUser from "@/app/libs/serverAuth";
import { NextApiRequest } from "next/types";

export async function GET(req: NextApiRequest, { params }) {
  try {
    const { currentUser } = await getCurrentUser();
    const { userId } = params;
    console.log(`userId: ${userId}`);

    if (userId && currentUser) {
      // Return posts for a specific user
      return NextResponse.json({error: "User not found"})
    }

    const posts = await prisma.post.findMany({
        where: {
          userId: userId as string,
        },
      });

      return NextResponse.json(posts);
  } catch (error) {

    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}
