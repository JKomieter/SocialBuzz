# SocialBuzz

Socialbuzz is an innovative social media platform designed to connect people from all around the world. 
It provides a user-friendly inbterface and a wide range of features that foster meaningful connections and engaging interactions.
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

#### TODO
   - Provide features for password recovery and account management.
   - Implement privacy settings to control the visiblity of profile information.
   - Allow users to add locations to posts.
   - Provide personalized recommendations based on user interests and interactions.
   - Display notifications on real-time.
   - Implement text-messaging, multimedia sharing and read receipts.

