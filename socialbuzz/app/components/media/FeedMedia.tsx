import Image from "next/image"
import { useMemo } from "react";
import Video from "./Video";


interface FeedMediaProps {
    video: string; 
    radius?: string;
    image?: string
}

const FeedMedia: React.FC<FeedMediaProps> = ({ image, radius, video }) => {

    const isImage = useMemo(() => {
        // check if the media is an image
        if (image) return true;
        return false;
    }, [image])

    return (
        <div className="w-full max-h-[500px] overflow-hidden" 
            style={{border: "solid gray", borderWidth: "0.2px"}}>
                {
                    isImage ?
                    (
                        <Image src={image as string} alt={"Image"} width={500} height={200} 
                        className="transition-opacity opacity-0 duration-[2s]"
                        style={{width: "100%", height: "100%", objectFit: "cover", borderRadius: radius}}
                        onLoadingComplete={(image) => image.classList.remove("opacity-0")}/>
                    ) : (
                        <Video video={video} />
                    )
                }
        </div>
    )
}

export default FeedMedia