import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    // post story
    try {
        const { story, userId, type } = await req.json()

        // TODO: story could either be image or video
        // handle that here
        const newStory = await prisma.story.create({
            data: {
                image: story,
                userId
            }
        })

        return NextResponse.json(newStory);
    } catch (error) {
        console.log(error);
        return NextResponse.json(error);
    }
}