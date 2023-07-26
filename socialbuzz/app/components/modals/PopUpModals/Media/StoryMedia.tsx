import Image from "next/image";
import { useMemo } from "react";
import style from "styled-jsx/style";

interface StoryMediaProps {
    media: string;
}

const StoryMedia: React.FC<StoryMediaProps> = ({ media }) => {

    const isImage = useMemo(() => {
        return media.startsWith("data:image");
    }, [media])


    return (
       isImage ? (
            <Image src={media} alt="Story" width={400} height={400} 
            style={{objectFit: "cover", borderRadius: "16px", height: "100%"}}/>    
       ) : (
            <video controls src={media} style={{height: "100%",
            borderRadius: "16px", objectFit: 'cover', width: "100%"}} />
       )
    )
}

export default StoryMedia;