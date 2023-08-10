import prisma from "@/libs/prismadb";
import getCurrentUser from "@/libs/serverAuth";
import { NextRequest, NextResponse } from "next/server";

// fetch users that match the search query
export async function GET(request: NextRequest) {
  try {
    // get the username query from the request
    const currentUser = await getCurrentUser();

    if (!currentUser)
      return NextResponse.json({ error: "You are not logged in" });

    // const { username } = request.query;
    const username = "JKomieter";

    // get the current users or user

    const filteredUsers = await prisma.user.findMany({
      select: {
        username: true,
        profileImage: true,
        id: true,
        firstName: true,
        lastName: true,
        followersIds: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      where: {
        username: {
          contains: username as string,
        },
      },
    });

    // Return the user data as the API response
    return NextResponse.json(filteredUsers || []);
  } catch (error) {
    console.log(error);
    return NextResponse.json([]);
  }
}

export const dynamic = "force-dynamic";
