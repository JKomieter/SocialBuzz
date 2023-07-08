import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt';


export async function middleware(request: NextRequest) {
    // Check if there is a session
    const token = await getToken({ req: request });

    // if (token) {
    //     return NextResponse.next();
    // }

    // return NextResponse.rewrite(new URL("/auth/login", request.url));
    return NextResponse.next()
    
}