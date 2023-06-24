import getSession from "@/app/actions/getSession";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        const session = await getSession();

        if (!session) return NextResponse.redirect("/auth/login")

        const count = await prisma.notification.count({
            where: {
                read: false
            }
        })

        return NextResponse.json(count);
    } catch(error) {
        console.log(error);
        return NextResponse.json({error: "Something went wrong"})
    }
}