import prisma from "@/libs/prismadb";
import getCurrentUser from "@/libs/serverAuth";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    // post story
    try {
        const { currentUser } = await getCurrentUser();
        const { story, type } = await req.json()

        // TODO: story could either be image or video
        // handle that here
        let newStory;
        
        if (type === "image") {
            newStory = await prisma.story.create({
                data: {
                    image: story,
                    user: {
                        connect: {
                            id: currentUser.id
                        }
                    },
                }
            })
        }

        if (type === "video") {
            newStory = await prisma.story.create({
                data: {
                    video: story,
                    user: {
                        connect: {
                            id: currentUser.id
                        }
                    }
                }
            })
        }

        await prisma.user.update({
            where: { id: currentUser.id },
            data: { storyCount: { increment: 1 } },
        });

        return NextResponse.json(newStory);
    } catch (error) {
        console.log(error);
        return NextResponse.json(error);
    }
}