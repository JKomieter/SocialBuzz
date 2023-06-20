import prisma from "@/app/libs/prismadb";
import { all } from "axios";
import { NextResponse } from "next/server";

// request to like a post
export async function POST(req: Request) {
    try {
        const { feedId, userId } = await req.json();

        // check if user has already liked the post
        const post = await prisma.post.findUnique({
            where: { id: feedId },
        })

        if (!post) {
            return NextResponse.json({ error: "Post not found" })
        }

        const likeIdsSet = new Set(post?.likeIds);
        const currentUserAlreadyLiked = likeIdsSet.has(userId);

        if (currentUserAlreadyLiked) {
            return NextResponse.json({ error: "You have already liked this post" })
        }

        // update post
        const updatedPost = await prisma.post.update({
            where: { id: feedId },
            data: {
                likeIds: [...post.likeIds, userId]
            }
        })

        return NextResponse.json(updatedPost);

    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Something went wrong" })
    }
}