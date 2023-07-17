// component to display currentUser's friends who liked a post
interface FriendsWhoLikedPostProps {
    likeIds: string[];
    followingIds: string[];
}


const FriendsWhoLikedPost: React.FC<FriendsWhoLikedPostProps> = ({
    likeIds,
    followingIds
}) => {
    
    const filterFriends = async () => {
        // filter the friends of the current user
        // who liked the post using 

        const friends = followingIds?.filter((followingId) => {
            return likeIds?.includes(followingId);
        });

        
    };


    return (
        <div className="px-3">
            <p className="text-neutral-300 text-sm">Liked by</p>

        </div>
    )
};

export default FriendsWhoLikedPost;