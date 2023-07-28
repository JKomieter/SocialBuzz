import { useMemo } from "react";
import SmallAvatar from "../components/avatar/SmallAvatar";
import RelatedUsers from "./RelatedUsers";

// component to display currentUser's friends who liked a post
interface FriendsWhoLikedPostProps {
  likeIds: string[];
  followingIds: string[];
  showRoundedImages: boolean;
  padding: string;
}

const FriendsWhoLikedPost: React.FC<FriendsWhoLikedPostProps> = ({
  likeIds,
  followingIds,
  showRoundedImages,
  padding,
}) => {
  const filterFriends = useMemo(() => {
    // filter the friends of the current user
    // who liked the post using

    const friends = followingIds?.filter((followingId) => {
      return likeIds?.includes(followingId);
    });

    return friends;
  }, [followingIds, likeIds]);

  return (
    <div
      className={`text-neutral-400 text-sm ${padding} flex flex-row gap-2 items-center w-full`}
    >
      <span className="flex flex-row">
        {filterFriends?.map((friend, index) => (
          <SmallAvatar key={friend} userId={friend} index={index} />
        ))}
      </span>
      <span className="flex flex-row items-center gap-1">
        {showRoundedImages && <p>Liked by</p>}
        {filterFriends?.map((friend) => (
          <RelatedUsers key={friend} userId={friend} />
        ))}
        and {likeIds?.length - filterFriends?.length} others
      </span>
    </div>
  );
};

export default FriendsWhoLikedPost;
