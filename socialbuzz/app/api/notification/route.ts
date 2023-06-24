import getSession from "@/app/actions/getSession";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


export async function POST(id: string) {
    try {
        const session = await getSession();

        if (!session) return NextResponse.redirect("/auth/login");

        const notification = await prisma.notification.update({
            where: {
                id
            },
            data: {
                read: true
            }
        })

        return NextResponse.json(notification)
    } catch(error) {
        console.log(error);
        return NextResponse.json({error: "something went wrong"})
    }
}