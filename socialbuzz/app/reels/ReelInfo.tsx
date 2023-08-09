import { BsDot } from "react-icons/bs";
import AvatarFrame from "../../components/avatar/AvatarFrame";
import { useRouter } from "next/navigation";
import useCurrentUser from "../../actions/useCurrentUser";
import { useMemo } from "react";



interface ReelInfoProps {
    username: string;
    userId: string;
    caption: string;
    music: string;
    profileImage: string;
}


const ReelInfo: React.FC<ReelInfoProps> = ({
    username,
    userId,
    caption,
    music,
    profileImage,
}) => {

    const router = useRouter();

    const { data: currentUser } = useCurrentUser();

    const checkIfFollowing = useMemo(() => {
      // check if the current user is following the user
      // return true if so, false if not
      try {
        const map = new Map(currentUser?.followingIds);
        return map.has(userId);
      } catch (error) {
        console.log(error);
        return false;
      }
      
    }, [currentUser.followingIds, userId]);

    return (
      <div className="absolute w-[full] lg:translate-y-[520px] sm:translate-y-[490px] translate-y-[420px]">
        <div className="flex flex-col gap-4 w-full items-start justify-between">
          <div className="flex flex-row w-full gap-3 items-center justify-between">
            <div className="flex flex-row gap-2 items-center">
              <AvatarFrame
                profileImage={profileImage}
                size="w-10 h-10"
                handleOnClick={() => router.push(`/user/${userId}`)}
                showBackground={false}
              />
              <span className="font-semibold text-neutral-300">{username}</span>
            </div>
            <BsDot size={25} color="white" />
            <p className="font-semibold text-neutral-300">
                {
                    checkIfFollowing ? "Following" : "Follow"
                }
            </p>
          </div>
          <span className="text-neutral-300 w-full">{caption}</span>
          <span className="text-neutral-300 w-full">{music}</span>
        </div>
      </div>
    );
}

export default ReelInfo;