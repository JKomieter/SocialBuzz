import prisma from "@/app/libs/prismadb";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

// the params that we will get from the url
interface IParams {
    userId: string;
}

//get specific user
export async function GET(
    request: Request,
    { params }: { params: IParams }
) {

    try {
        const { userId } = params;

        const user = await prisma.user.findUnique({
            where: {
                id: userId
            },
             include: {
                posts: true,     
                notifications: true, 
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