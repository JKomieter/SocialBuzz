import prisma from "../libs/prismadb";


export async function deleteExpiredStories() {
    // delete all reels that are older than 24 hours
    try {
        const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);

        const expiredStories = await prisma.story.findMany({
            where: {
            createdAt: { lte: twentyFourHoursAgo },
            },
        });

        for (const story of expiredStories) {
            await prisma.story.delete({ where: { id: story.id } });
            console.log(`Deleted story with ID ${story.id}`);
        }

        return expiredStories;

    } catch (error) {
        console.error(error);
    }
}