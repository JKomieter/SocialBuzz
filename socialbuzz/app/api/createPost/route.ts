import getSession from "@/actions/getSession";
import prisma from "@/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
    const session = await getSession();

    const { post, caption, type } = await request.json();

    if (!session) {
        const url = request.nextUrl.clone();
        url.pathname = "/auth/login";
        return NextResponse.rewrite(url);
    }

    try {
        const user = await prisma.user.findUnique({
            where: {
                email: session?.user?.email as string
            }
        });

        if (!user) {
            const url = request.nextUrl.clone();
            url.pathname = "/auth/login";
            return NextResponse.rewrite(url);
        }

        let newPost;
        // check type of media to be stored
        if (type === "image") {
            newPost = await prisma.post.create({
                data: {
                    image: post as string,
                    caption: caption as string,
                    userId: user.id,
                }
            })
        };

        if (type === "video") {
            newPost = await prisma.post.create({
                data: {
                    video: post as string,
                    caption: caption as string,
                    userId: user.id,
                }
            });
        };


        return NextResponse.json(newPost);
        
    } catch (error) {
        console.log(error);
        return NextResponse.json(error);
    }
}