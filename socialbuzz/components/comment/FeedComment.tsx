interface FeedCommentProps {
    comment: string;
    setComment: (comment: string) => void;
    handleSubmit: () => void;
}


const FeedComment: React.FC<FeedCommentProps> = ({ 
    comment, setComment, handleSubmit
}) => {
    return (
        <div className="flex flex-row w-full items-center">
            <input type="text" placeholder="Add a comment..."
                className="w-full text-white text-sm 
                bg-transparent outline-none"
                value={comment} onChange={(e) => setComment(e.target.value)}
            />
            {
                comment.length > 0 && (
                    <span className="text-blue-500 text-sm font-semibold cursor-pointer"
                    onClick={handleSubmit}>
                        Post
                    </span>
                )
            }
        </div>
    )
}


export default FeedComment