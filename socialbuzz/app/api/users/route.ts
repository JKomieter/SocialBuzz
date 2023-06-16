import { NextResponse } from 'next/server';
import prisma from '@/app/libs/prismadb';
import getCurrentUser from '@/app/libs/serverAuth';

export async function GET(request: Request) {
  try {

    const { currentUser } = await getCurrentUser();

    // fetch users data from the database
    // exclude the current user from the list
    const allUsers = await prisma.user.findMany({
        orderBy: {
            createdAt: 'desc'
        },
        where: {
          NOT: {
            email: currentUser?.email
          }
        }
    });
    // Todo : will fetch friends and followers differently
    

    // Return the user data as the API response
    return NextResponse.json(allUsers);
  } catch (error) {
    console.error(error);
    return NextResponse.json([]);
  }
}

