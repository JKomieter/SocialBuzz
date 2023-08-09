import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

//get specific user
export async function POST(request: Request) {
    try {
        const { username } = await request.json();

        const user = await prisma.user.findUnique({
            where: {
                username
            },
            include: {
                posts: true,     
                reels: true,
                sentNotifications: true,         
                stories: true,       
                comments: true,     
            }
        })

        if (!user) {
            return NextResponse.json({message: 'User not found'});
        }

        return NextResponse.json(user);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Could not get user' });
    }
}