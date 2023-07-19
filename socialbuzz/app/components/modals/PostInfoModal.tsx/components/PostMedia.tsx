import Image from "next/image";


interface PostMediaProps {
    image: string;
    video: string;
}

const PostMedia: React.FC<PostMediaProps> = ({
    image,
    video
}) => {
    return (
        <div className="sm:basis-1/2 w-full h-auto
        border-r-[0.3px] border-neutral-400 rounded-l-lg">
            {
                image !== null ? (
                    <Image src={image} alt={"Image"} width={100} height={100}
                    style={{width: "100%", 
                    height: "100%", 
                    objectFit: "cover",
                    borderTopLeftRadius: "8px",
                    borderBottomLeftRadius: "8px" }} />
                ) : (
                    <video src={video} controls={false} className="w-full h-full" />
                )
            }
        </div>
    )
};


export default PostMedia;