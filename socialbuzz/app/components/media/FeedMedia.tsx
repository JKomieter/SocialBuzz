import Image from "next/image"


interface FeedMediaProps {
    media: string; 
    radius?: string;
}

const FeedMedia: React.FC<FeedMediaProps> = ({ media, radius }) => {
    return (
        <div className="w-full max-h-[500px] overflow-hidden" 
            style={{border: "solid gray", borderWidth: "0.2px"}}>
                {
                    (
                        <Image src={media} alt={media} width={500} height={200} 
                        className="transition-opacity opacity-0 duration-[2s]"
                        style={{width: "100%", height: "100%", objectFit: "cover", borderRadius: radius}}
                        onLoadingComplete={(image) => image.classList.remove("opacity-0")}/>
                    ) || (
                        <video src={media} controls className="w-full h-full" 
                            style={{objectFit: "cover", borderRadius: radius}}/>
                    )
                }
        </div>
    )
}

export default FeedMedia