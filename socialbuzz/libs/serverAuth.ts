import getSession from "../actions/getSession";
import prisma from "./prismadb";

const getCurrentUser = async () => {
    const session = await getSession();
     
    if (!session?.user?.email) {
        throw new Error('Not signed in')
    }
    // get currently logged in user
    // using the session data 

    const currentUser = await prisma.user.findUnique({
        where: {
            email: session.user.email
        }
    })

    if (!currentUser) {
        throw new Error('Not signed in')
    }

    return { currentUser };
}

export default getCurrentUser;