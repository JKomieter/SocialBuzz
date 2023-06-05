import { NextResponse } from 'next/server';
import prisma from '@/app/libs/prismadb';

export async function GET(request: Request) {
  try {
    // Call your function to fetch user data from the database
    const allUsers = await prisma.user.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    });

    // Return the user data as the API response
    return NextResponse.json(allUsers);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Could not get users' });
  }
}

