import React, { useCallback } from 'react';
import usePostInfo from '@/app/hooks/usePostInfo';
import FeedButtons from '@/app/components/buttons/FeedButtons';
import AvatarFrame from '@/app/components/avatar/AvatarFrame';
import PostFrame from '@/app/components/avatar/PostFrame';
import { useRouter } from 'next/navigation';


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

    const handleOnClick = useCallback(() => {
        // take the user to the user profile
        setIsOpen(false);
        router.push("")
    }, [router, setIsOpen]);

    return (
        <div className="w-full h-full sm:basis-1/2 flex flex-col gap-3">
            <PostFrame 
            profileImage={user?.profileImage}
            username={user?.username}
            display='hidden sm:flex' />
            <div className='overflow-y-scroll px-3 py-2 flex flex-col
            gap-3 items-center w-full h-full border-b-[0.3px] border-neutral-400'>
                {
                    comments?.map((comment) => (
                        <div className="flex flex-row justify-between items-center w-full" key={comment.id}>
                            <div className="flex flex-row items-center gap-3">
                                <AvatarFrame 
                                handleOnClick={handleOnClick}
                                profileImage={comment.user?.profileImage} 
                                size="w-10 h-10" />
                                <p className="text-neutral-300 text-sm">{comment.user?.username}</p>
                            </div>
                            <p className="text-neutral-300 text-sm">{comment?.body}</p>
                        </div>
                    ))
                }
            </div>
            <div className='px-3 py-2'>
                <FeedButtons isLiked={false} handleLike={() => {}} />
            </div>
            
        </div>
    )
};

export default PostInfo;

