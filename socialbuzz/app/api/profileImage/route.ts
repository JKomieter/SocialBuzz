import prisma from "@/libs/prismadb";
import getCurrentUser from "@/libs/serverAuth";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    try {
        const { currentUser } = await getCurrentUser();
        const { profileImage } = await req.json() as { profileImage: string };

        if (!currentUser) return NextResponse.json({error: 'User is not logged in'});

        // change profile image of current user
        const user = await prisma.user.update({
            where: {
                id: currentUser.id as string
            },
            data: {
                profileImage 
            }
        })

        return NextResponse.json(user);
    } catch (error) {
        console.log(error);
        return NextResponse.json({error: 'Something went wrong'});
    }
}