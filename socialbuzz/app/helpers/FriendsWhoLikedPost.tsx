import { useMemo } from "react";
import SmallAvatar from "../components/avatar/SmallAvatar";
import RelatedUsers from "./RelatedUsers";

// component to display currentUser's friends who liked a post
interface FriendsWhoLikedPostProps {
    likeIds: string[];
    followingIds: string[];
}


const FriendsWhoLikedPost: React.FC<FriendsWhoLikedPostProps> = ({
    likeIds,
    followingIds
}) => {
    
    const filterFriends = useMemo(() => {
        // filter the friends of the current user
        // who liked the post using 

        const friends = followingIds?.filter((followingId) => {
            return likeIds?.includes(followingId);
        }); 

        return friends;
    }, [followingIds, likeIds]);

    console.log(filterFriends);


    return (
        <div className="text-neutral-400 text-sm px-3 flex flex-row gap-2 items-center">
            <span className="flex flex-row">
                {
                    filterFriends?.map((friend) => (
                        <SmallAvatar 
                        key={friend} 
                        userId={friend}/>
                    ))
                }
            </span>
            <span className="flex flex-row items-center gap-1">
                {
                    filterFriends?.map((friend) => (
                        <RelatedUsers 
                        key={friend}
                        userId={friend} />
                    ))
                }
                and {likeIds?.length - filterFriends?.length} others 
            </span>
        </div>
    )
};

export default FriendsWhoLikedPost;