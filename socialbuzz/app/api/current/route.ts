import { NextResponse } from "next/server";
import getCurrentUser from "@/app/libs/serverAuth";

//get currently logged in user
export async function GET(req: Request) {
    try {
        const { currentUser } = await getCurrentUser();

        return NextResponse.json(currentUser);
    } catch(error) {
        console.log(error);
        return NextResponse.json({ error: 'Something went wrong' })
    }
}