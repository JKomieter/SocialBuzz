import getSession from "@/app/actions/getSession";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
    const session = await getSession()

    const { post, caption } = await request.json()

    if (!session) {
        return NextResponse.redirect("/auth/login")
    }

    try {
        const user = await prisma.user.findUnique({
            where: {
                email: session?.user?.email as string
            }
        })

        if (!user) {
            return NextResponse.redirect("/auth/login")
        }

        const newPost = await prisma.post.create({
            data: {
                media: post,
                caption: caption as string,
                userId: user.id
            }
        })

        return NextResponse.json(newPost);
        
    } catch (error) {
        return NextResponse.redirect("/auth/login")
    }
}