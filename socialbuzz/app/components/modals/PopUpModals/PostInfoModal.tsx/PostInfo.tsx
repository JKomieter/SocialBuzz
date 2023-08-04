import React, { useCallback, useState } from 'react';
import usePostInfo from '@/app/hooks/usePostInfo';
import FeedButtons from '@/app/components/buttons/FeedButtons';
import PostFrame from '@/app/components/avatar/PostFrame';
import { useRouter } from 'next/navigation';
import PostComments from '@/app/components/comment/PostComments';
import FriendsWhoLikedPost from '@/app/helpers/FriendsWhoLikedPost';
import FeedComment from '@/app/components/comment/FeedComment';
import axios from 'axios';
import useCurrentUser from '@/app/actions/useCurrentUser';


export interface User {
    id: string;
    username: string;
    profileImage: string;
    followerIds: string[];
}

interface PostInfoProps {
    id: string;
    caption: string;
    likeIds: string[];
    createdAt: string;
    comments: Comment[];
    isLoading: boolean;
    user: User;
    mutatePost: () => void;
}

 export interface Comment {
    id: string; 
    body: string;
    createdAt: Date;
    user: User;
}

const PostInfo: React.FC<PostInfoProps> = ({
    id,
    caption,
    likeIds,
    createdAt,
    comments,
    isLoading,
    user,
    mutatePost
}) => {
    const router = useRouter()
    const { setIsOpen } = usePostInfo();
    const [ comment, setComment ] = useState<string>("")
    const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();

    const handleOnClick = useCallback((userId: string) => {
        // take the user to the user profile
        setIsOpen(false);
        router.push(`/user/${userId}`);
    }, [router, setIsOpen]);

    const handleSubmit = useCallback(async () => {
        // submit the comment
        try {
            await axios.post('/api/comment', {
                feedId: id,
                userId: currentUser?.id,
                comment
            })

            setComment("");
            mutatePost();
            mutateCurrentUser();
        } catch (error) {
            console.log(error)
        }
    }, [comment, currentUser?.id, id, mutateCurrentUser, mutatePost]);


    const handleLike = useCallback(async () => {
        // handle like
        try {
            await axios.post('/api/like', {
                feedId: id,
                userId: currentUser?.id
            })
            mutatePost();
            mutateCurrentUser();
        } catch (error) {
            console.log(error)
        }
    }, [currentUser?.id, id, mutateCurrentUser, mutatePost]);

    return (
        <div className="w-full h-full sm:basis-1/2 flex flex-col gap-3">
            <PostFrame 
                profileImage={user?.profileImage}
                username={user?.username}
                display='hidden sm:flex'
                userId={user?.id} />
            <PostComments 
                comments={comments} 
                handleOnClick={handleOnClick} />
            <div className='px-2 py-2'>
                <FeedButtons 
                    isLiked={false} 
                    size={24}
                    handleLike={handleLike} />
            </div>
            <FriendsWhoLikedPost
                likeIds={likeIds}
                followingIds={currentUser?.followingIds} 
                showRoundedImages={true} 
                padding="px-3" />
            <div className="px-3 pb-3">
                <FeedComment 
                    comment={comment} 
                    setComment={(e) => setComment(e)} 
                    handleSubmit={handleSubmit} />
            </div>
        </div>
    )
};

export default PostInfo;

