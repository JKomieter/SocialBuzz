import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { TbMessageCircle2 } from "react-icons/tb";


interface FeedButtonsProps {
    handleLike: () => void;
    isLiked: boolean;
}

const FeedButtons: React.FC<FeedButtonsProps> = ({
    handleLike,
    isLiked
}) => {
    return (
        <div className="flex flex-row w-full items-center justify-between">
            <div className="flex flex-row gap-4 w-full 
                items-center">
                {
                    isLiked ? (
                        <AiFillHeart size={28} color="red" className="cursor-pointer" 
                        onClick={handleLike} />
                        ) : (
                        <AiOutlineHeart size={28} color="#fff" className="cursor-pointer" 
                        onClick={handleLike} />
                    )
                }
                <TbMessageCircle2 size={28} color="#fff" className="cursor-pointer" />
                <IoPaperPlaneOutline size={27} color="#fff" className="cursor-pointer" />
            </div>
            <BsBookmark size={28} color="#fff" className="cursor-pointer" />
        </div>
    );
}

export default FeedButtons;