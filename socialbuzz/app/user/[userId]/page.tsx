"use client";
import { useParams } from "next/navigation";
import UserHero from "../components/UserHero";
import Highlights from "../components/Highlights";
import UserProfileNav from "../components/UserProfileNav";
import Posts from "../components/Posts";
import useChangeProfileImage from "@/app/hooks/useChangeProfileImage";
import getUser from "@/app/actions/getUser";



const UserProfilePage = () => { 
    const { userId  } = useParams();
    const { data: user, mutate } = getUser(userId as string);
    const useProfile = useChangeProfileImage();

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col w-full items-center px-3 py-8 gap-7 justify-center">
           <UserHero userProfileImage={user.profileImage} username={user.username}
                lastName={user.lastName} followers={user.followersIds} userId={userId}
                following={user.followingIds} bio={user.bio} posts={user.posts}
                img={useProfile.profileImage as string} mutateFetchedUser={mutate} />
            <Highlights />
            <UserProfileNav followers={user.followers?.length}
                following={user.following?.length} posts={user.posts?.length} />
            <Posts posts={user.posts} />
        </div>
    );
}



export default UserProfilePage;