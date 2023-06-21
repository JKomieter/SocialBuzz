import getUser from "@/app/actions/getUser";
import Image from "next/image";
import { BsBookmark, BsDot } from "react-icons/bs";
import { useCallback, useMemo } from "react";
import { formatDistanceToNowStrict } from "date-fns"
import { RiMoreFill } from "react-icons/ri";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TbMessageCircle2 } from "react-icons/tb";
import { IoPaperPlaneOutline } from "react-icons/io5";
import useCurrentUser from "@/app/actions/useCurrentUser";
import axios from "axios";

interface FeedItemProps {
    id: string;
    media: string;
    caption: string;
    isCommentable: boolean;
    createdAt: Date;
    userId: string;
    likeIds: string[];
    comments: string[];
    location: string;
    mutateFeed: any;
}

// component for each feed item
const FeedItem: React.FC<FeedItemProps> = ({
    id,
    media,
    caption,
    isCommentable,
    createdAt,
    userId,
    likeIds,
    comments,
    location,
    mutateFeed
}) => {

    const { data: fetchedUser, mutate: mutateUser } = getUser(userId as string);
    const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();

    const isLiked = useMemo(() => {
        // check if the current user liked the post
        if (!currentUser) return;

        const likedIdsSet = new Set(likeIds);
        return likedIdsSet.has(currentUser.id);
    }, [currentUser, likeIds])

    const createdAtFormat = useMemo(() => {
        if (!createdAt) {
            return null;
        }

        return formatDistanceToNowStrict(new Date(createdAt))
    }, [createdAt]);

    const handleLike = useCallback(async () => {
        // handle like
        try {
            await axios.post('/api/like', {
                feedId: id,
                userId: currentUser?.id
            })
            mutateFeed();
            mutateCurrentUser();
        } catch (error) {
            console.log(error)
        }
    }, [currentUser?.id, id, mutateCurrentUser, mutateFeed]);

    console.log(fetchedUser)

    return (
        <div className="flex flex-col gap-3 w-full items-center">
            <div className="flex flex-row justify-between w-full items-center">
                <div className="flex flex-row gap-1 w-full items-center">
                    <span className="rounded-full h-12 w-12 p-[3px] border-[1px]"
                    style={{backgroundImage: "linear-gradient(to bottom right, teal, coral)"}}>
                        <Image src={fetchedUser?.profileImage || "/images/personplaceholder.png"} 
                        alt="/images/personplaceholder.png" width={100}
                        className="rounded-full w-full h-full object-cover cursor-pointer"
                        height={100} style={{objectFit: "cover"}} />
                    </span>
                    <p className="text-md font-medium lowercase cursor-pointer">{fetchedUser?.username}</p>
                    <BsDot size={20} color="gray"/>
                    <p className="text-neutral-500 text-sm">
                        {createdAtFormat}
                    </p>
                </div>
                <RiMoreFill size={25} color="#fff" />
            </div>
            <div className="w-full max-h-[500px] overflow-hidden" 
            style={{border: "solid gray", borderWidth: "0.2px"}}>
                <Image src={media} alt={media} width={500} height={200} 
                style={{width: "100%", height: "100%", objectFit: "cover"}}/>
            </div>
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
            <span className="text-white font-semibold text-sm w-full">
                {likeIds.length || 0} likes
            </span>
            <div className="text-white text-sm w-full">
                <span className="lowercase font-semibold">{fetchedUser?.username}</span> 
                <span className="font-normal"> {caption}</span>
            </div>
        </div>
    )
}

export default FeedItem;
