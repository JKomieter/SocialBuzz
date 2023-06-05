"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import UserHero from "../components/UserHero";
import Highlights from "../components/Highlights";
import Following from "../components/Following";


interface UserProfilePageProps {
    firstName: string;
    email: string;
    lastName: string;
    username: string;
    posts: any[];
    followers: any[];
    following: any[];
    profilePicture: string;
    coverPicture: string;
    description: string;
    bio: string;
}


const UserProfilePage = () => { 
    const params = useParams();
    const username = params.username as string;
    const [user, setUser] = useState<UserProfilePageProps | null>(null);
    
    useEffect(() => {
        const getUser = async () => {
            const response = await axios.post(`/api/userProfile`, {username});
            setUser(response.data);
        };
        getUser();
    }, [username]);


    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col w-full h-full items-center px-8 py-8 gap-7">
           <UserHero userProfilePic={user.profilePicture} username={user.username}
            lastName={user.lastName} followers={user.followers}
            following={user.following} bio={user.bio} />
            <Highlights />
           <div  
            className='w-screen md:hidden flex py-4 px-3 border-[#fff] border-y-[0.8px] flex-row justify-between'>
                <p className='text-white font-normal'>{user.followers?.length || 0} Followers</p>
                <p className='text-white font-normal'>{user.following?.length || 0} Following</p>
                <p className='text-white font-normal'>0 Posts</p>
            </div>
        </div>
    );
}



export default UserProfilePage;