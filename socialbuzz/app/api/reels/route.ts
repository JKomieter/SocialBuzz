import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/libs/serverAuth";
import { NextResponse } from "next/server";

// route to get reels
export async function GET(req: Request) {
  try {
    const { currentUser } = await getCurrentUser();

    if (!currentUser.id) {
      return NextResponse.json({ error: "Not authenticated" });
    }

    // look for post where video is not null
    const reels = await prisma.post.findMany({
      where: {
        video: {
          not: null,
        },
      },
      select: {
        id: true,
        video: true,
        caption: true,
        createdAt: true,
        isCommentable: true,
        user: {
          select: {
            id: true,
            username: true,
            profileImage: true,
            followersIds: true,
          },
        },
        comments: {
          select: {
            id: true,
            body: true,
            createdAt: true,
            postId: true,
            user: {
              select: {
                id: true,
                username: true,
                profileImage: true,
              }
            }
          },
        },
        likeIds: true,
      }
    });


    return NextResponse.json(reels || []);
  } catch (error) {
    console.log(error);
    return NextResponse.json([]);
  }
}
