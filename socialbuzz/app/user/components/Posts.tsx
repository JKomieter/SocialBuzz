import Image from "next/image";
import { SlCamera } from "react-icons/sl";

interface PostsProps {
    posts: any[];
}

const Posts: React.FC<PostsProps> = ({
    posts
}) => {
    return (
        <>
        {
            posts.length > 0 ? (
                <div className="grid grid-cols-3 gap-2 w-full px-3">
                    {posts.map((post) => (
                        <div key={post.id} className="flex flex-col">
                            <Image src={post.media} alt={post.caption} className="w-full h-full"
                            width={100} height={50} style={{objectFit: "cover"}} />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="w-full h-full flex justify-center items-center 
                    ">
                        <div className="flex flex-col gap-3 items-center">
                            <SlCamera size={40} color="#fff"/>
                            <span className="text-lg font-semibold text-neutral-200">
                                No posts yet
                            </span>
                        </div>
                </div>
            )
        }
        </>
    )
}

export default Posts;