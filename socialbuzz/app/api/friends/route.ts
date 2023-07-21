import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/libs/serverAuth";
import { NextResponse } from "next/server";

// fetch current user's friends to text them
export async function GET(req: Request) {
    try {
        const { currentUser } = await getCurrentUser();

        if (!(currentUser)) {
            return NextResponse.json({error: 'User is not logged in'})
        }

        const friends = await prisma.user.findMany({
            where: {
                followingIds: {
                    has: currentUser.id
                }
            }
        });

        return NextResponse.json(friends || []);

    } catch (error) {
        console.log(error)
        return NextResponse.json([])
    }
}