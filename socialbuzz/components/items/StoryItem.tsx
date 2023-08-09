import Image from "next/image";
import { Story } from "@/app/stories/components/StoryPage";
import { useMemo } from "react";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

const StoryItem: React.FC<Story> = ({ 
    image, video, caption, music, 
    seenIds, id, createdAt
 }) => {
    const isImage = useMemo(() => {
        // return true if image is not null
        return typeof image === "string";
    }, [image])


    const imageContainerStyle = {
        width: '100%',
        height: '300px',
    };

    const imageStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        position: 'relative',
        borderRadius: '16px',
    };

    const videoStyle = {
        width: '100%',
        height: '100%',
        borderRadius: '16px',
        objectFit: 'cover',
    };

    return (
        <div style={imageContainerStyle}>
        {
            isImage ? (
                <Image 
                    src={image as string} 
                    alt="story"
                    width={200}
                    height={600}
                    style={imageStyle as CSSProperties} />
            ) : (
                <video 
                    src={video} 
                    autoPlay 
                    loop
                    style={videoStyle as CSSProperties}
                    data-testid="vid" />
            )
        }
        </div>
    )
}


export default StoryItem;