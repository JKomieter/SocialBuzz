import Image from "next/image"


interface FeedMediaProps {
    media: string; 
}

const FeedMedia: React.FC<FeedMediaProps> = ({ media }) => {
    return (
        <div className="w-full max-h-[500px] overflow-hidden" 
            style={{border: "solid gray", borderWidth: "0.2px"}}>
            <Image src={media} alt={media} width={500} height={200} 
            style={{width: "100%", height: "100%", objectFit: "cover"}}/>
        </div>
    )
}

export default FeedMedia