import prisma from "@/app/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";

interface IParams {
    userId: string;
}

//get specific user
export async function GET(req: NextRequest, { params }: {params: IParams}) {
    try {
        const { userId } = params;       

        const user = await prisma.user.findUnique({
            where: {
                id: userId as string,
            },
             include: {
                posts: true,     
                receivedNotifications: true, 
                reels: true,         
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