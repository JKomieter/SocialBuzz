import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/libs/serverAuth";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    //get currently logged in user and follow user with id
    try {
        const { currentUser } = await getCurrentUser();
        const { userId } = await req.json();

        console.log(`Body: userId: ${userId}`);

        if (!(currentUser)) {
            return NextResponse.json({error: 'User is not logged in'})
        }


        // push current user id to followersIds array of user with id
        const follower = await prisma.user.update({
            where: {
                id: userId as string
            },
            data: {
                followersIds: {
                    push: currentUser.id as string
                }
            }
        })
        // push user id to followingIds array of current user
        const following = await prisma.user.update({
            where: {
                id: currentUser.id as string
            },
            data: {
                followingIds: {
                    push: userId as string
                }   
            }
        })

        return NextResponse.json(follower);

    } catch (error) {
        console.log(error)
        return NextResponse.json({error: 'Something went wrong'})
    }
}