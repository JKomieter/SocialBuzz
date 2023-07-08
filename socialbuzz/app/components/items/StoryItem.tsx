import Image from "next/image";
import { Story } from "@/app/stories/components/StoryPage";
import { useMemo } from "react";

const StoryItem: React.FC<Story> = ({ 
    image, video, caption, music, 
    seenIds, id, createdAt
 }) => {
    const isImage = useMemo(() => {
        // return true if image is not null
        return image !== null;
    }, [image])

    return (
        <div className="w-full h-full">
        {
            isImage ? (
                <Image src={image} alt="Loading..."
                objectFit="fill"
                style={{width: "100%", height: "100%",
                objectFit: "cover"}} />
            ) : (
                <video src={video} autoPlay loop
                style={{width: "100%", height: "100%",
                objectFit: "cover"}} />
            )
        }
        </div>
    )
}


export default StoryItem;