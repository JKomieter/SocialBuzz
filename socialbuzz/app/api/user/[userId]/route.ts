import prisma from "@/app/libs/prismadb";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";



//get specific user
export async function GET(req: NextApiRequest, { params }) {
    try {
        const { userId } = params;  
        console.log(`userId: ${userId}`);      

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