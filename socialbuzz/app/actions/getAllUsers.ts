// import prisma from "@/app/libs/prismadb";
// import getSession from "./getSession";
// import { User } from "next-auth";
import useSWR from 'swr';
import { fetcher } from '../utils/fetcher';

// async function getAllUsers(): Promise<User[]> {
//   const session = await getSession();

//   if (!session?.user?.email) {
//     return [];
//   }

//   try {
//     const users = await prisma.user.findMany({
//       orderBy: {
//         createdAt: 'desc'
//       },
//       where: {
//         NOT: {
//           email: session.user.email
//         }
//       }
//     });

//     console.log(users)

//     return users;
//   } catch (error: any) {
//     return [];
//   }
// };

const getAllUsers = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, mutate, isLoading } = useSWR('/api/users', fetcher);

  return {
    data,
    mutate,
    isLoading
  }
}

export default getAllUsers;