import VimeoPlayer from "react-player/vimeo";
import { Reel } from "@/app/reels/Reels";

const ReelItem: React.FC<Reel> = ({
    user,
    likeIds,
    comments,
    video,
    caption,
    isCommentable,
}) => {
    return (
        <div className="h-[80vh] w-full flex flex-row justify-center items-end">
            <VimeoPlayer
                url={video}
                controls={true}
                width="100%"
                height="100%"
                className="h-full w-full"
            />
        </div>
    )
}

export default ReelItem;