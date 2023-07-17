import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { TbMessageCircle2 } from "react-icons/tb";


interface FeedButtonsProps {
    handleLike: () => void;
    isLiked: boolean;
    size: number
}

const FeedButtons: React.FC<FeedButtonsProps> = ({
    handleLike,
    isLiked,
    size
}) => {
    return (
        <div className="flex flex-row w-full items-center justify-between">
            <div className="flex flex-row gap-4 w-full 
                items-center">
                {
                    isLiked ? (
                        <AiFillHeart size={size} color="red" className="cursor-pointer" 
                        onClick={handleLike} /> 
                        ) : (
                        <AiOutlineHeart size={size} color="#fff" className="cursor-pointer" 
                        onClick={handleLike} />
                    )
                }
                <TbMessageCircle2 size={size} color="#fff" className="cursor-pointer" />
                <IoPaperPlaneOutline size={size} color="#fff" className="cursor-pointer" />
            </div>
            <BsBookmark size={size} color="#fff" className="cursor-pointer" />
        </div>
    );
}

export default FeedButtons;