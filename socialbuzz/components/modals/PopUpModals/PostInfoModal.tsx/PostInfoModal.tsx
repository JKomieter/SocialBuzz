"use client";
import useGetPost from "@/actions/useGetPost";
import Modal from "../Modal";
import usePostInfo from "@/hooks/usePostInfo";
import PostInfoContent from "./PostInfoContent";
import LodingPostInfoModal from "@/components/loading/LoadingPostInfoModal";

// Modal that pops up when a user clicks on a post
const PostInfoModal = () => {
    const { postId, setIsOpen, isOpen } = usePostInfo();
    const { 
        data: post, 
        isLoading, 
        error, 
        mutate: mutatePost } = useGetPost(postId);

    if (!isOpen) {
        return null;
    }

    const bodyContent = isLoading ? 
                    <LodingPostInfoModal /> 
                    : 
                    <PostInfoContent
                        id={post?.id}
                        image={post?.image}
                        video={post?.video}
                        caption={post?.caption}
                        likeIds={post?.likeIds}
                        createdAt={post?.createdAt}
                        comments={post?.comments}
                        isLoading={isLoading}
                        user={post?.user}
                        mutatePost={mutatePost} /> ;

    return (
        <Modal 
            bodyContent={bodyContent} 
            onClose={() => setIsOpen(false)} />
    )
}

export default PostInfoModal;