import { useCallback, useMemo, useState } from "react";
import { IoPlay } from "react-icons/io5";

interface VideoProps {
    video: string;
    radius?: string;
}

const Video: React.FC<VideoProps> = ({ video, radius }) => {
    const [ onPlay, setOnPlay ] = useState(false);

    const handlePlayPause = useCallback(() => {
        const video = document.querySelector("video");
        if (onPlay) {
            video?.pause();
            return setOnPlay(false);
        } else {
            video?.play();
            return setOnPlay(true);
        }
    }, [onPlay]);

    const showPlay = useMemo(() => {
        return onPlay ? "hidden" : "absolute";
    }, [onPlay]);


    return (
        <div className="flex justify-center items-center h-full" onClick={handlePlayPause}>
            <video src={video} controls={false} className="w-full h-full" data-testid="video" 
            style={{objectFit: "cover", borderRadius: radius}}  />
            <span className={`${showPlay}`}>
                <IoPlay size={40} color="white" />
            </span>
        </div>
    )
}

export default Video;