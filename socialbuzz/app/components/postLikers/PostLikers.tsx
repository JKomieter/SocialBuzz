// component to display currentUser's friends who liked a post

interface PostLikersProps {
    likeIds: string[];
}


const PostLikers: React.FC<PostLikersProps> = ({
    likeIds
}) => {
    console.log(likeIds)
    return (
        <>
        
        </>
    )
};

export default PostLikers;