import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/libs/serverAuth";
import { NextResponse } from "next/server";


// feed posts for Feed
export async function GET(req: Request) {
  try {
    const { currentUser } = await getCurrentUser();

    if (!currentUser.id) {
      return NextResponse.json({ error: "Not authenticated" });
    }

    const following = await prisma.user.findUnique({
        where: { id: currentUser.id },
    })
      
    // all users that currentUser follows
    const followingIds = following?.followingIds as Array<string>;

    // posts from them
    const feed = await prisma.post.findMany({
      where: {
        userId: {
          in: [...followingIds, currentUser.id],
        },
      },
      include: {
        user: true,
        comments: {
          include: {
            user: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });


    return NextResponse.json(feed || []);
  } catch (error) {
    console.error(error);
    return NextResponse.json([]);
  }
}
