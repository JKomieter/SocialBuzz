import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/libs/serverAuth";
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
            orderBy: { createdAt: 'desc' },
        })

        return NextResponse.json(notifications);
    } catch (error) {
        console.log(error);
    }
}