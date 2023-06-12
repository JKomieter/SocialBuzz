import Image from "next/image";

interface PostsProps {
    posts: any[];
}

const Posts: React.FC<PostsProps> = ({
    posts
}) => {
    return (
        <div className="grid grid-cols-3 gap-4 w-full px-3">
            {posts.map((post) => (
                <div key={post.id} className="flex flex-col">
                    <Image src={post.media} alt={post.caption} className="w-full h-full"
                    width={100} height={80} style={{objectFit: "cover"}}/>
                </div>
            ))}
        </div>
    )
}

export default Posts;