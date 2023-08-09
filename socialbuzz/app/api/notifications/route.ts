import prisma from "@/libs/prismadb";
import getCurrentUser from "@/libs/serverAuth";
import { NextResponse } from "next/server";

// fetch all notifications for the current user
export async function GET(req: Request) {
    try {
        const { currentUser } = await getCurrentUser();

        if (!currentUser) return NextResponse.json({message: "You are not logged in"});

        const notifications = await prisma.notification.findMany({
            where: {
                receiverId: currentUser?.id
            },
            select: {
                id: true,
                senderId: true,
                receiverId: true,
                postId: true,
                type: true,
                read: true,
                createdAt: true,
                commentBody: true,
            },
            orderBy: { createdAt: 'desc' },
        })
        
        return NextResponse.json(notifications);
    } catch (error) {
        console.log(error);
        
    }
}