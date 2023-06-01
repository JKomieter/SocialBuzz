import getSession from "./getSession";
import prisma from "../libs/prismadb";

const getCurrentUser = async () => {
    try {
        const session = await getSession();
        //get current info about current user in session
        if (!session?.user?.email) {
            return null;
        }

        const currentUser = await prisma.user.findUnique({
            where: {
                email: session.user.email as string
            },
        })

        return currentUser;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export default getCurrentUser;