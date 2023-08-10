import { NextResponse } from "next/server";
import getCurrentUser from "@/libs/serverAuth";

//get currently logged in user
export async function GET(req: Request) {
    try {
        const { currentUser } = await getCurrentUser();

        if (!currentUser) {
            // redirect user to "/auth/login" if not logged in
            return NextResponse.json({ error: 'Something went wrong' })
        }

        return NextResponse.json(currentUser);
    } catch(error) {
        console.log(error);
        return NextResponse.json({ error: 'Something went wrong' })
    }
}

export const dynamic = "force-dynamic";