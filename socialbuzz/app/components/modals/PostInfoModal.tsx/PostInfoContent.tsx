import PostInfo from "./components/PostInfo";
import PostMedia from "./components/PostMedia";
import { Comment } from "./components/PostInfo";
import { User } from "./components/PostInfo";
import PostFrame from "../../avatar/PostFrame";


interface PostInfoContentProps {
    id: string;
    image: string;
    video: string;
    caption: string;
    likeIds: string[];
    createdAt: string;
    comments: Comment[];
    isLoading: boolean;
    user: User,
    mutatePost: () => void;
}



const PostInfoContent: React.FC<PostInfoContentProps> = ({
    id,
    image,
    video,
    caption,
    likeIds,
    createdAt,
    comments,
    isLoading,
    user,
    mutatePost
}) => {
    return (
        <div className="flex sm:flex-row flex-col w-full h-full bg-black mt-3 rounded-lg">
            <PostFrame 
                profileImage={user?.profileImage}
                username={user?.username}
                display='flex sm:hidden' 
                userId={user?.id} />
            <PostMedia 
                image={image} 
                video={video} />
            <PostInfo 
                id={id}
                likeIds={likeIds}
                createdAt={createdAt}
                comments={comments}
                isLoading={isLoading}
                caption={caption}
                user={user}
                mutatePost={mutatePost} />
        </div>
    )
}

export default PostInfoContent;