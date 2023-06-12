import prisma from "@/app/libs/prismadb";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
    //creating a new user
    const body = await request.json();

    console.log(body)
    try {

        const {
            email,
            firstName,
            lastName,
            username,
            password,
        } = body;
    
        const hashedPassword = await bcrypt.hash(password, 12);
    
        //insert user info into database
        const user = await prisma.user.create({
            data: {
                email,
                firstName,
                lastName,
                username,
                hashedPassword
            }
        });
        return NextResponse.json(user)
    }catch (error) {
        return NextResponse.redirect("/auth/register")
    }
}