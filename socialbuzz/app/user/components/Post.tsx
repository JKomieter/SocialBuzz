import Video from "@/app/components/media/Video";
import Image from "next/image";
import { useMemo } from "react";
import { Post } from "./Posts";
import CenterIcons from "./CenterIcons";


// Component to display User Posts
const UserPosts: React.FC<Post> = ({ 
    id, 
    image, 
    video,
    likeIds,
    comments
}) => {
    const isImage = useMemo(() => {
        // check if the media is an image
        if (image) return true;
    }, [image])

    return (
        <div className="flex justify-center items-center
        md:h-[220px] h-[160px] cursor-pointer">
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
            <CenterIcons likeIds={likeIds} comments={comments} />
        </div>
    )
};


export default UserPosts;