import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";



export async function POST(req: Request) {
    // post a comment related to the post

    try {
        const { feedId, userId, comment } = await req.json()

        console.log(feedId, userId, comment)

        const newComment = await prisma.comment.create({
            data: {
                body: comment,
                userId: userId,
                postId: feedId,
            }
        })
        console.log(newComment)

        return NextResponse.json(newComment);
    } catch(error) {
        console.log(error);
        return NextResponse.json({message: "Could not post comment"});
    }
}