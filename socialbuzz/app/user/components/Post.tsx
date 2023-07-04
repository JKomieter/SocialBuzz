import Video from "@/app/components/media/Video";
import Image from "next/image";
import { useMemo } from "react";


interface FeedProps {
    id: string;
    image: string;
    video: string;
}

// Component to display User Posts
const UserPosts: React.FC<FeedProps> = ({ id, image, video }) => {
    const isImage = useMemo(() => {
        // check if the media is an image
        if (image) return true;
    }, [image])

    return (
        <div className="flex flex-col md:h-[200px] h-[160px]">
            {
                isImage ? (
                    <Image src={image} alt={"Image"} className="w-full h-full"
                    width={100} height={50} style={{objectFit: "cover"}} />
                ) : (
                    <Video video={video} />
                )
            }
            
        </div>
    )
};

export default UserPosts;