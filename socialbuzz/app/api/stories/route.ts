import { deleteExpiredStories } from "@/utils/deleteExpiredStories";
import prisma from "@/libs/prismadb";
import getCurrentUser from "@/libs/serverAuth";
import { NextResponse } from "next/server";
import { fr } from "date-fns/locale";

// get all friends' stories
export async function GET(req: Request) {
    try {
        const { currentUser } = await getCurrentUser();

        if (!currentUser) {
            return NextResponse.redirect("/login");
        }
        // get current user's followers' Ids and fetch their stories
        const followingIds = currentUser.followingIds;

        // find user friends of currentUSer who have stories
        const friendsWithStories = await prisma.user.findMany({
            where: {
                id: {
                    in: [...followingIds, currentUser.id]
                },
                stories: {
                    some: {}
                }
            },
            include: {
                stories: {
                    orderBy: {
                        createdAt: "desc"
                    }
                }   
            }
        });

        // delete stories that are older than 24 hours
        deleteExpiredStories();

        return NextResponse.json(friendsWithStories || []);

    } catch (error) {
        console.log(error);
        return NextResponse.json([]);
    }
}

export const dynamic = "force-dynamic";