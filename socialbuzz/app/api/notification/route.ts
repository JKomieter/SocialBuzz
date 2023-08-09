import getSession from "@/actions/getSession";
import prisma from "@/libs/prismadb";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
  try {
    const session = await getSession();
    const { id } = await request.json();

    if (!session) return NextResponse.redirect("/auth/login");

    const notification = await prisma.notification.update({
      where: {
        id,
      },
      data: {
        read: true,
      },
    });

    return NextResponse.json(notification);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "something went wrong" });
  }
}