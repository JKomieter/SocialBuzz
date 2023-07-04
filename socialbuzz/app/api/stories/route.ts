import { deleteExpiredReels } from "@/app/actions/deleteExpiredReels";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/libs/serverAuth";
import { NextResponse } from "next/server";


export async function GET(req: Request) {
    try {
        const { currentUser } = await getCurrentUser();

        if (!currentUser) {
            return NextResponse.redirect("/login");
        }
        // get current user's followers' Ids and fetch their stories
        const followerIds = currentUser.followersIds;

        const stories = await prisma.story.findMany({
            where: {
                userId: {
                    in: followerIds
                }
            },
            include: {
                user: true
                },
            orderBy: {
                createdAt: "desc"
            }
        });

        // delete stories that are older than 24 hours
        deleteExpiredReels();

        return NextResponse.json(stories || []);

    } catch (error) {
        console.log(error);
        return NextResponse.json([]);
    }
}