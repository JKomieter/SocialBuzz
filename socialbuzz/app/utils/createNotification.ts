import prisma from "../libs/prismadb";


export async function createNotification(
    senderId: string, 
    receiverId: string, 
    type: string, 
    commentBody?: string, 
    postId?: string) {
    try {

        const senderUser = await prisma.user.findUnique({ 
            where: { id: senderId } 
        });
        const receiverUser = await prisma.user.findUnique({ 
            where: { id: receiverId } 
        });

        if (!(senderUser && receiverUser)) {
            return;
        }

        const notification = await prisma.notification.create({
            data: {
                sender: { connect: { id: senderId } },
                receiver: { connect: { id: receiverId } },
                type,
                read: false,
                postId,
                commentBody: commentBody,
            }
        })

        return notification;
    } catch (error) {
        console.log(error)
    }
}