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
        <div className="sm:basis-1/2 w-full sm:h-full h-14
        border-r-[0.3px] border-neutral-400 md:py-4">
            {
                image !== null ? (
                    <Image src={image} alt={"Image"} width={100} height={100}
                    style={{width: "100%", height: "100%", objectFit: "cover"}} />
                ) : (
                    <video src={video} controls={false} className="w-full h-full" />
                )
            }
        </div>
    )
};


export default PostMedia;