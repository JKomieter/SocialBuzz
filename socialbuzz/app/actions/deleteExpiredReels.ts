import prisma from "../libs/prismadb";


export async function deleteExpiredReels() {
    // delete all reels that are older than 24 hours
    try {
        const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);

        const expiredReels = await prisma.reel.findMany({
            where: {
            createdAt: { lte: twentyFourHoursAgo },
            },
        });

        for (const reel of expiredReels) {
            await prisma.reel.delete({ where: { id: reel.id } });
            console.log(`Deleted reel with ID ${reel.id}`);
        }

    } catch (error) {
        console.error(error);
    }
}