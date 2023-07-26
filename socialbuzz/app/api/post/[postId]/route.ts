import prisma from "@/app/libs/prismadb";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

interface IParams {
    postId: string;
}

//get specific user
export async function GET(req: NextApiRequest, { params }: {params: IParams}) {
    try {
        const { postId } = params;       

        const post = await prisma.post.findUnique({
            where: {
                id: postId as string,
            },
            select: {
                id: true,
                image: true,
                caption: true,
                likeIds: true,
                createdAt: true,
                comments: {
                    select: {
                        id: true,
                        body: true,
                        createdAt: true,
                        user: {
                            select: {
                                id: true,
                                username: true,
                                profileImage: true,
                            }
                        }
                    },
                    orderBy: { createdAt: 'desc' },
                },
                user: {
                    select: {
                        id: true,
                        username: true,
                        profileImage: true,
                    }
                }
            },
        })

        if (!post) {
            return NextResponse.json({message: 'Post not found'});
        }  

        return NextResponse.json(post);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Could not get post' });
    }
}