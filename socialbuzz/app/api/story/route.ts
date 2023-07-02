import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/libs/serverAuth";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    // post story
    try {
        const { currentUser } = await getCurrentUser();
        const { story, type } = await req.json()

        // TODO: story could either be image or video
        // handle that here
        const newStory = await prisma.story.create({
            data: {
                image: story,
                userId: currentUser.id,
            }
        })

        console.log(newStory);

        return NextResponse.json(newStory);
    } catch (error) {
        console.log(error);
        return NextResponse.json(error);
    }
}