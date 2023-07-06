interface StoryCardProps {
    id: string;
    stories: Record<string, any>[];
    username: string;
    mutateFetchedUsers: () => void;
    profileImage: string;
}


const StoryCard: React.FC<StoryCardProps> = ({ 
    stories, id, username, 
    mutateFetchedUsers, profileImage }) => {
    console.log(username)
    return (
        <div className="rounded-2xl bg-neutral-500
         text-white max-w-[200px] min-w-[60px] 
         max-h-[450px] min-h-[300px]">
            {username}
        </div>
    )
}

export default StoryCard;