import getSession from "@/actions/getSession";
import prisma from "@/libs/prismadb";
import { createNotification } from "@/utils/createNotification";
import { NextResponse } from "next/server";

// request to like a post
export async function POST(req: Request) {
    try {
        const session = await getSession();

        if (!session) return NextResponse.redirect("/auth/login")
        const { feedId, userId } = await req.json();

        // check if user has already liked the post
        const post = await prisma.post.findUnique({
            where: { id: feedId },
        })

        if (!post) {
            return NextResponse.json({ error: "Post not found" })
        }
        let updatedPost;

        const likeIdsSet = new Set(post?.likeIds);
        const currentUserAlreadyLiked = likeIdsSet.has(userId);

        if (currentUserAlreadyLiked) {
            // we need to remove the like
            // remove userId from likeIds array
            // update likeIds array without userId
            likeIdsSet.delete(userId);

            // update post
            const newLikeIds = Array.from(likeIdsSet);

            updatedPost = await prisma.post.update({
                where: { id: feedId },
                data: {
                    likeIds: [...newLikeIds]
                }
            })

            return NextResponse.json({ error: "You have already liked this post" })
        }

        // update post
        updatedPost = await prisma.post.update({
            where: { id: feedId },
            data: {
                likeIds: [...post.likeIds, userId]
            }
        })

        const notified = await createNotification(
            userId as string,
            post.userId,
            'liked',
        );

        return NextResponse.json(updatedPost);

    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Something went wrong" })
    }
}