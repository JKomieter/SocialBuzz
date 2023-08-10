import prisma from "@/libs/prismadb";
import getCurrentUser from "@/libs/serverAuth";
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
      select: {
        id: true,
        image: true,
        caption: true,
        video: true,
        isCommentable: true,
        createdAt: true,
        userId: true,
        likeIds: true,
        comments: {
          select: {
            id: true,
          },
        },
        location: true,
        user: {
          select: {
            id: true,
            stories: {
              select: {
                id: true,
              },
            },
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


export const dynamic = "force-dynamic";