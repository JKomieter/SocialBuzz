import getUser from "@/actions/getUser";
import Image from "next/image";
import { useCallback, useMemo } from "react";
import { formatDistanceToNowStrict } from "date-fns"
import { RiMoreFill } from "react-icons/ri";
import useCurrentUser from "@/actions/useCurrentUser";
import axios from "axios";
import { useState } from "react";
import FeedMedia from "../media/FeedMedia";
import FeedButtons from "../buttons/FeedButtons";
import { BsDot } from "react-icons/bs";
import FeedComment from "../comment/FeedComment";
import { useRouter } from "next/navigation";
import FriendsWhoLikedPost from "@/helpers/FriendsWhoLikedPost";
import usePostInfo from "@/hooks/usePostInfo";


interface FeedItemProps {
    id: string;
    image: string;
    video: string;
    caption: string;
    isCommentable: boolean;
    createdAt: Date;
    userId: string;
    likeIds: string[];
    comments: string[];
    location: string;
    stories: string[];
    mutateFeed: any;
}

// component for each feed item
const FeedItem: React.FC<FeedItemProps> = ({
    id,
    image,
    caption,
    isCommentable,
    createdAt,
    userId,
    likeIds,
    comments,
    location,
    mutateFeed,
    video,
    stories
}) => {

    const { data: fetchedUser, mutate: mutateUser } = getUser(userId as string);
    const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();
    const { setIsOpen, setPostId } = usePostInfo();
    const router = useRouter();

    const [ comment, setComment ] = useState("")

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

    const handleSubmit = useCallback(async () => {
        // handle comment
        try {
            await axios.post('/api/comment', {
                feedId: id,
                userId: currentUser?.id,
                comment
            })

            setComment("");
            mutateFeed();
            mutateCurrentUser();
        } catch (error) {
            console.log(error)
        }
    }, [comment, currentUser?.id, id, mutateCurrentUser, mutateFeed]);

    const handleGoToUser = useCallback(() => {
        // go to user profile
        router.push(`/user/${userId}`)
    }, [router, userId]);

    const userHasStory = useMemo(() => {
        //return true if user has story
        if (stories.length > 0) return true;
        return false;
    }, [stories.length]);

    const handlePostInfo = useCallback(() => {
        // open post info
        setPostId(id);
        setIsOpen(true);
    }, [id, setIsOpen, setPostId]);

    const backGround = userHasStory ?
        'linear-gradient(to top right, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5, #4f5bd5, #4f5bd5)'
        : ""

    return (
        <div className="flex flex-col gap-3 w-full items-center">
            <span className="md:hidden w-screen border-b-neutral-600 " 
            style={{borderBottomWidth: "0.1px"}}/>
            <div className="flex flex-row justify-between w-full items-center">
                <div className="flex flex-row gap-1 w-full items-center"
                onClick={handleGoToUser}>
                    <span className="rounded-full h-12 w-12 p-[3px] border-[1px]"
                        style={{background: backGround}}>
                        <Image 
                            src={fetchedUser?.profileImage || "/images/personplaceholder.png"} 
                            alt="/images/personplaceholder.png" 
                            width={100}
                            className="rounded-full w-full h-full object-cover cursor-pointer"
                            height={100} 
                            style={{objectFit: "cover"}} />
                    </span>
                    <p className="text-md font-medium lowercase cursor-pointer">{fetchedUser?.username}</p>
                    <BsDot 
                        size={20} 
                        color="gray"/>
                    <p className="text-neutral-500 text-sm">
                        {createdAtFormat}
                    </p>
                </div>
                <RiMoreFill 
                    size={25} 
                    color="#fff" />
            </div>
            <FeedMedia 
                image={image} 
                video={video}/>
            <FeedButtons 
                handleLike={handleLike} 
                isLiked={isLiked as boolean} 
                size={27} />
            <FriendsWhoLikedPost
                padding="px-0"
                showRoundedImages
                likeIds={likeIds}
                followingIds={currentUser?.followingIds} />
            <span className="text-white font-semibold text-sm w-full">
                {likeIds.length || 0} likes
            </span>
            <div className="text-white text-sm w-full">
                <span className="lowercase font-semibold">{fetchedUser?.username}</span> 
                <span className="font-normal"> {caption}</span>
            </div>
            {
                comments.length > 0 && (
                    <p className="text-sm text-neutral-600 w-full cursor-pointer"
                    onClick={handlePostInfo}>
                        View all {comments.length} comments
                    </p>
                )
            }
            <FeedComment 
            comment={comment} 
            handleSubmit={handleSubmit}
            setComment={(e) => setComment(e)} />
            <span className="md:w-full w-screen border-b-neutral-600 " 
            style={{borderBottomWidth: "0.2px"}} />
        </div>
    )
}

export default FeedItem;
