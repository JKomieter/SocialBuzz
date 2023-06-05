import prisma from "@/app/libs/prismadb";
import getSession from "./getSession";
import { User } from "next-auth";

async function getAllUsers(): Promise<User[]> {
  const session = await getSession();

  if (!session?.user?.email) {
    return [];
  }

  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      where: {
        NOT: {
          email: session.user.email
        }
      }
    });

    console.log(users)

    return users;
  } catch (error: any) {
    return [];
  }
};


export default getAllUsers;