"use client";
import { useParams } from "next/navigation";
import UserHero from "../components/UserHero";
import Highlights from "../components/Highlights";
import UserProfileNav from "../components/UserProfileNav";
import Posts from "../components/Posts";
import getUser from "@/app/actions/getUser";
import FadeLoader from "react-spinners/FadeLoader";

const UserProfilePage = () => {
  const { userId } = useParams();
  const { data: user, mutate, isLoading } = getUser(userId as string);

  if (isLoading)
    return (
      <div className="flex items-center justify-center">
        <FadeLoader color="white" />
      </div>
    );

  return (
    <div className="flex flex-col w-full items-center px-2 py-8 gap-7 justify-center">
      <UserHero
        userProfileImage={user?.profileImage}
        username={user?.username}
        lastName={user.lastName}
        followers={user.followersIds}
        userId={userId}
        following={user.followingIds}
        bio={user.bio}
        posts={user.posts}
        mutateFetchedUser={mutate}
      />
      <Highlights />
      <UserProfileNav
        followers={user.followersIds?.length}
        following={user.followingIds?.length}
        posts={user.posts?.length}
      />
      <Posts posts={user.posts} />
    </div>
  );
};

export default UserProfilePage;
