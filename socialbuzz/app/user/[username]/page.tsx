"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import UserHero from "../components/UserHero";
import Highlights from "../components/Highlights";
import Following from "../components/Following";
import UserProfileNav from "../components/UserProfileNav";
import Posts from "../components/Posts";
import useChangeProfileImage from "@/app/hooks/useChangeProfileImage";


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
    const useProfile = useChangeProfileImage();
    
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
        <div className="flex flex-col w-full items-center px-3 py-8 gap-7 justify-center">
           <UserHero userProfilePic={user.profilePicture} username={user.username}
                lastName={user.lastName} followers={user.followers}
                following={user.following} bio={user.bio} posts={user.posts}
                img={useProfile.profileImage as string}/>
            <Highlights />
            <UserProfileNav followers={user.followers?.length}
                following={user.following?.length} posts={user.posts?.length} />
            <Posts posts={user.posts} />
        </div>
    );
}



export default UserProfilePage;