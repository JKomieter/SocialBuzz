import Image from "next/image";
import { SlCamera } from "react-icons/sl";
import Post from "./Post";

interface PostsProps {
    posts: any[];
}

export interface Post {
    id: string;
    image: string;
    video: string;
    likeIds: string[];
    comments: string[];
}

const Posts: React.FC<PostsProps> = ({
    posts
}) => {

    return (
        <>
        {
            posts?.length > 0 ? (
                <div className="grid grid-cols-3 gap-2 w-full px-3">
                    {posts.map((post: Post) => (
                        <Post image={post.image} 
                        video={post.video} 
                        key={post.id} id={post.id}
                        likeIds={post.likeIds}
                        comments={post.comments} />
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