import React, { useCallback } from 'react';
import usePostInfo from '@/app/hooks/usePostInfo';
import FeedButtons from '@/app/components/buttons/FeedButtons';
import AvatarFrame from '@/app/components/avatar/AvatarFrame';
import PostFrame from '@/app/components/avatar/PostFrame';
import { useRouter } from 'next/navigation';
import PostComments from '@/app/components/comment/PostComments';
import PostLikers from '@/app/components/postLikers/PostLikers';
import FeedComment from '@/app/components/comment/FeedComment';


export interface User {
    id: string;
    username: string;
    profileImage: string;
}

interface PostInfoProps {
    id: string;
    caption: string;
    likeIds: string[];
    createdAt: string;
    comments: Comment[];
    isLoading: boolean;
    user: User;
}

 export interface Comment {
    id: string; 
    body: string;
    createdAt: string;
    user: User;
}

const PostInfo: React.FC<PostInfoProps> = ({
    id,
    caption,
    likeIds,
    createdAt,
    comments,
    isLoading,
    user
}) => {
    const router = useRouter()
    const { setIsOpen } = usePostInfo();

    const handleOnClick = useCallback((userId: string) => {
        // take the user to the user profile
        setIsOpen(false);
        router.push(`/user/${userId}`);
    }, [router, setIsOpen]);

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
                handleLike={() => {}} />
            </div>
            <PostLikers
            likeIds={likeIds} />
            <div className="px-3 pb-3">
                <FeedComment 
                comment={'comment'} 
                setComment={() => {}} 
                handleSubmit={() => {}} />
            </div>
        </div>
    )
};

export default PostInfo;

