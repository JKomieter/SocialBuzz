import Video from "@/components/media/Video";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { PostProps } from "./Posts";
import CenterIcons from "./CenterIcons";
import usePostInfo from "@/hooks/usePostInfo";

// Component to display each User Post
const Post: React.FC<PostProps> = ({ 
    id, 
    image, 
    video,
    likeIds,
    comments
}) => {
    const mediaRef = useRef<HTMLDivElement>(null);
    const [ Height, setHeight ] = useState<number>(0);
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const { setIsOpen, setPostId } = usePostInfo();

    const isImage = useMemo(() => {
        // check if the media is an image
        if (image) return true;
    }, [image])

    const changeHeight = () => {
        // set the height to be equal to the width of the mediaRef
        if (mediaRef.current) {
            setHeight(mediaRef.current.clientWidth);
        }
    }

    const handleOpenPost = useCallback((e: any) => {
        // handle the open post event
        e.preventDefault();
        setIsOpen(true);
        setPostId(id);
    }, [id, setIsOpen, setPostId]);

    useEffect(() => {
        // set the height to be equal to the width of the mediaRef
        changeHeight();
    }, [])

    // change the height when the window is resized
    window.addEventListener("resize", changeHeight);

    return (
        <div className="flex justify-center items-center
        cursor-pointer" style={{height: Height}}
        ref={mediaRef} onMouseEnter={(e) => setIsHovered(true)}
        onMouseLeave={(e) => setIsHovered(false)}
        data-testid="post" onClick={(e) => handleOpenPost(e)}>
            {
                isImage ? (
                    <Image src={image} alt={"Image"} 
                    className="w-full h-full"
                    width={100} height={50} 
                    style={{objectFit: "cover"}} />
                ) : (
                    <Video video={video} />
                )
            }
            {isHovered && (
                <CenterIcons likeIds={likeIds} comments={comments} />
            )}
        </div>
    )
};



export default Post;

