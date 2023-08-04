import { use, useCallback, useEffect, useMemo, useState } from "react";
import { IoPlay } from "react-icons/io5";
import { useInView } from "react-intersection-observer";

interface VideoProps {
  video: string;
  radius?: string;
  showVidIcon?: boolean;
}

const Video: React.FC<VideoProps> = ({ video, radius, showVidIcon }) => {
  const { ref: videoRef, inView: videoIsVisible } = useInView();
  const videoEl = document.querySelector("video");


  //   const handlePlayPause = useCallback(() => {
  //     const video = document.querySelector("video");
  //     if (onPlay) {
  //       video?.pause();
  //       return setOnPlay(false);
  //     } else {
  //       video?.play();
  //       return setOnPlay(true);
  //     }
  //   }, [onPlay]);

  if (videoIsVisible) {
    videoEl?.play();
  } else {
    videoEl?.pause();
  }

  const showPlay = useMemo(() => {
    return videoIsVisible ? "hidden" : "absolute";
  }, [videoIsVisible]);

  return (
    <div
      ref={videoRef}
      className="flex justify-center items-center h-full"
    //   onClick={handlePlayPause}
    >
      <video
        src={video}
        controls={false}
        className="w-full h-full"
        data-testid="video"
        style={{ objectFit: "cover", borderRadius: radius }}
      />
      {showVidIcon && (
        <span className={`${showPlay}`}>
          <IoPlay size={40} color="white" />
        </span>
      )}
    </div>
  );
};

export default Video;
