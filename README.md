# SocialBuzz

Socialbuzz is an innovative social media platform designed to connect people from all around the world. 
It provides a user-friendly interface and a wide range of features that foster meaningful connections and engaging interactions.
It was inspired by Instagram.

<img src="socialbuzz/public/images/Screenshot 2023-07-18 at 7.27.11 PM.png" height="800" width="900" >

## Technologies
- [Next.js](https://nextjs.org/) - A React farmework for building server-rendered apllications.
- [Prisma](https://www.prisma.io/) - A mordern database toolkit for TypeScript and Node.js.
- [MongoDB](https://www.mongodb.com/) - A popular NoSQL database.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS farmework.
- [Jest](https://jestjs.io) and [Enzyme](https://enzymejs.github.io/enzyme/) - Testing framework for JavaScript and React components.
- [Framer Motion](https://www.framer.com/motion/) - A production ready motion library for React.
- [TypeScript](https://www.typescriptlang.org) - A typed superset of JavaScript.
- [Zustand](https://github.com/pmndrs/zustand) - A small, fast state management library for React.
- [NextAuth.js](https://next-auth.js.org/) - Authenticationlibrary for Next.js applications.
- [SWR](https://swr.vercel.app) - React hooks library for remote data fetching.
- [Talk.js](https://talkjs.com/)  - TalkJS is a powerful real-time messaging platform that enables seamless communication and chat functionality within your web or mobile applications



## Setup
1. Clone the repository:
```
git clone https://github.com/JKomieter/SocialBuzz.git
```

2. Required environmental variables (.env):
   ```
     DATABASE_URL= mongodb+srv://<user>:<password>@<cluster_name>/<collection_name>.
     NEXTAUTH_SECRET= "my_special_secret"
     NEXTAUTH_URL="http://localhost:3000"
     NEXTAUTH_JWT_SECRET="my_other_secret"
   ```
      **DO NOT surround the DATABASE_URL string with quotation marks as it is already surrounded when used in the schema.prisma.**
   ```
     datasource db {
      provider = "mongodb"
      url      = env("DATABASE_URL")
    }
   ```
   
   

4. To run this project, install it locally using npm:
```
$ cd socialbuzz
$ npm install
$ npm run dev
```
4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.


## Features

#### 1. User Registration and Authentication
   - Allows users to create new accounts and authenticate themselves using NextAuth.js
   - Implements secure authentication mechanism such as password hashing and token-based suthentication.

#### 2. User Profiles
   - Enables users to create and customize their profiles.
   - Allows users to upload a profile picture and provide personal information.

#### 3. Post Creation and Sharing
   - Enables users to create and share posts with text, images and videos.
   - Implements features such as adding captions.
   - Allows users to like and comment posts.

#### 4. Follow and Connect with Users
   - Implement a system to follow other users anf recieve updates from them.
   - Provide suggestions for users to discover and connect with new people.
   - Enable users to view and manage their followers and followings.

#### 5. Notifications and Activity Feed
   - Notifies user about likes, follows and comments.

#### 6. Real-Time Communication
   - Supports real-time, instant messaging, enabling users to exchange messages with their friends as if they were having a live                 conversation.

#### TODO
   - Provide features for password recovery and account management.
   - Implement privacy settings to control the visiblity of profile information.
   - Allow users to add locations to posts.
   - Provide personalized recommendations based on user interests and interactions.
   - Display notifications on real-time.
   - Implement text-messaging, multimedia sharing and read receipts.


## Architecture

#### Frontend
   * User interface:
        - Components folder contains components that is used all over the app.
             * Modal folder contains a set of reusable components that facilitate user interactions by displaying pop-up or slide-in modal                 dialogs on the screen. These modals are triggered when the user performs specific actions, such as creating a new post or                   performing other critical actions within the application.
                  For example:
                  Modal.tsx for all pop up components
               
               ```
               import { IoClose } from "react-icons/io5";
               interface ModalProps{
                   bodyContent: React.ReactElement;
                   onClose: () => void;
                   step?: number;
                   isJustifyCenter?: boolean;
               }
               
               //modal component for uploading profile image and creating posts
               const Modal: React.FC<ModalProps> = ({
                   bodyContent,
                   onClose,
                   step,
                   isJustifyCenter
               }) => {
                   return (
                        <div className="fixed z-50 flex outline-none 
                           items-center bg-black bg-opacity-70 gap-5
                           flex-col h-screen w-screen text-white p-8
                           ">
                               <div className="flex items-end w-full px-2 basis-1/9">
                                   <span className="w-full text-right flex justify-end">
                                       <IoClose color="#fff" className="cursor-pointer" 
                                       onClick={onClose} size={34} />
                                   </span>
                               </div>
                               <div className={`w-full max-h-[450px] min-h-[300px] md:h-full basis-8/9  
                                   ${step === 1 ? 'md:w-[40%]' : 'md:w-[60%]'}
                                   ${isJustifyCenter ? 'flex justify-center' : ''}
                                   transition-width duration-700 transition-all ease-in-out
                               `}>
                                   {bodyContent}
                               </div>
                       </div>
                   )
               }
               
               export default Modal;
               ```
               
            * Items folder houses a collection of reusable components that are specifically designed to display data presented in the form of             lists or arrays within the application. These components play a crucial role in rendering various content, such as posts, feeds,           stories, comments, or any other structured data that needs to be presented in a list-like format.
               For example, NotificationItems.tsx display the list of user notifications
              
              ```
              import getUser from "@/app/actions/getUser";
               import { useCallback, useMemo } from "react";
               import Image from "next/image";
               import { formatDistanceToNowStrict } from "date-fns";
               import { useRouter } from "next/navigation";
               import axios from "axios";
               
               interface NotificationItemProps {
                   id: string;
                   senderId: string;
                   receiverId: string;
                   postId: string;
                   type: string;
                   read: boolean;
                   createdAt: Date  
                   commentBody: string;
                   mutateNotifications: any;
               }
               
               const NotificationItem: React.FC<NotificationItemProps> = ({
                   id,
                   senderId,
                   receiverId,
                   postId,
                   type,
                   read,
                   createdAt,
                   commentBody,
                   mutateNotifications
               }) => {
                   const { data: sender, mutate: mutateSender } = getUser(senderId)
                   const router = useRouter()
               
                   const handleNotification = useMemo(() => {
                       // control the notification message
                       if (type === "liked") {
                           return ` liked your post`
                       }
               
                       if (type === "commented") {
                           return ` commented on your post`
                       }
               
                       if (type === "followed") {
                           return ` followed you`
                       }
                       
                   }, [type])
               
                   const createdAtFormat = useMemo(() => {
                       if (!createdAt) {
                           return null;
                       }
               
                       return formatDistanceToNowStrict(new Date(createdAt))
                   }, [createdAt]);
               
                   const handleClick = useCallback(async () => {
                       // handle when user clicks on notification
                       if (type === "followed") {
                           router.push(`/user/${senderId}`)
                       }
               
                       if (type === "commented" || type === "liked") {
                           router.push(`/post/${postId}`)
                       }
               
                       await axios.post("/api/notification", {id})
               
                       mutateNotifications();
                   }, [id, mutateNotifications, postId, router, senderId, type])
               
                   return (
                       <div className="w-full flex flex-row justify-between items-center 
                       p-3 hover:bg-neutral-900 duration-500 cursor-pointer" onClick={handleClick}>
                           <div className="w-full flex flex-row gap-2 items-center">
                               <span className="rounded-full h-10 w-10 overflow-hidden">
                                   <Image src={
                                   sender?.profileImage || "/images/personplaceholder.png"} 
                                   alt="" height={100} width={100} style={{objectFit: "cover"}}/>
                               </span>
                               <div className="text-sm">
                                   <span className="font-semibold text-white mr-1">
                                       {sender?.username}
                                   </span> 
                                   <span className="text-white ">
                                       {handleNotification} .
                                   </span> 
                                   <span className="text-neutral-500 text-xs">
                                       {" " + createdAtFormat}
                                   </span>
                               </div>
                           </div>
                       </div>
                   )
               }
                              export default NotificationItem;
              ```
                                
              * action folder serves as a central hub for encapsulating logic related to data fetching, manipulation, and interaction with external APIs. Within this folder, you'll find modules that contain functions designed to handle specific data-related tasks. These functions often utilize powerful tools like the useSWR hook and Axios to seamlessly retrieve and manage data from backend APIs.
               For example the getAllUsers.ts file fetches all the users in the database
               ```
                  // actions/fetchUsers.js
   
                  import useSWR from 'swr';
                  import axios from 'axios';
                  
                  /**
                   * Fetches a list of users from the backend API using Axios and useSWR.
                   * 
                   * @returns {Object} An object with the fetched user data, a mutation function, and a loading indicator.
                   */
                  const fetchUsers = () => {
                    // Fetch data using the useSWR hook and Axios
                    const { data, mutate, error } = useSWR('/api/users', async () => {
                      const response = await axios.get('/api/users');
                      return response.data;
                    });
                  
                    return {
                      data,       // Fetched user data
                      mutate,     // Mutation function to refresh the data
                      error       // Error, if any
                    }
                  }
                  
                  export default fetchUsers;
               ```

