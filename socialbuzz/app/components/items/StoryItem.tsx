import Image from "next/image";
import { Story } from "@/app/stories/components/StoryPage";
import { useMemo } from "react";

const StoryItem: React.FC<Story> = ({ 
    image, video, caption, music, 
    seenIds, id, createdAt
 }) => {
    const isImage = useMemo(() => {
        // return true if image is not null
        return typeof image === "string";
    }, [image])

    return (
        <div className="w-full h-full">
        {
            isImage ? (
                <Image src={image as string} alt="Loading..."
                width={200} height={300} 
                style={{width: "100%", height: "100%",
                objectFit: "cover", borderRadius: "16px"}} />
            ) : (
                <video src={video} autoPlay loop
                className="w-full h-full rounded-2xl
                object-cover" data-testid="vid" />
            )
        }
        </div>
    )
}


export default StoryItem;