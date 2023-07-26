import { AiOutlineHeart } from "react-icons/ai";
import AvatarFrame from "../avatar/AvatarFrame";
import { Comment } from "../modals/PopUpModals/PostInfoModal.tsx/PostInfo";


interface CommentsProps {
    comments: Comment[];
    handleOnClick: (userId: string) => void;
}

// component for displaying comments of a post
const PostComments: React.FC<CommentsProps> = ({
    comments,
    handleOnClick,
}) => {

    return (
        <div className='overflow-y-scroll px-3 py-2 flex flex-col
            gap-4 items-center w-full h-full border-b-[0.3px] border-neutral-500'>
                {
                    comments?.map((comment) => (
                        <div key={comment.id} className="w-full flex flex-row items-center justify-between">
                            <div className="w-full flex flex-row items-center gap-2" >
                                <AvatarFrame 
                                    showBackground={false}
                                    handleOnClick={() => handleOnClick(comment.user?.id)}
                                    profileImage={comment.user?.profileImage} 
                                    size="w-8 h-8" 
                                />
                                <div className="flex flex-row gap-1">
                                    <p onClick={() => handleOnClick(comment.user?.id)}
                                    className="text-neutral-300 font-bold text-sm cursor-pointer">
                                        {comment.user?.username}
                                    </p>
                                    <p className="text-neutral-300 overflow-hidden
                                    text-sm ml-0.5 h-4.5">
                                        {comment?.body}
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 items-center">
                                <AiOutlineHeart size={18} color="white" />
                                <p className="text-sm text-neutral-300">0</p>
                            </div>
                        </div>
                    ))
                }
            </div>
    )
};

export default PostComments;