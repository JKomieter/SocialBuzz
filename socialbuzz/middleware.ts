import { NextResponse, NextRequest } from 'next/server';
import { getSession } from "next-auth/react"

export default async function middleware(request: NextRequest) {
    // redeirect to login page if user is not logged in
    const session = await getSession();
    console.log(session);

    if (!session && request.nextUrl.pathname === '/' || request.nextUrl.pathname === '/home') {
        const url = request.nextUrl.clone();
        url.pathname = '/auth/login';
        return NextResponse.redirect(url);
    } 

    if (session && request.nextUrl.pathname === '/home') {
        return NextResponse.next();
    }
    
    return NextResponse.next();
}

export const config = {
    matcher: ['/', '/home']
}





