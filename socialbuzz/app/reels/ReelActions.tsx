"use client";
import { User } from "./Reels";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiBookmark } from "react-icons/fi";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FaRegComment } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { Comment } from "./Reels";
import useCurrentUser from "../../actions/useCurrentUser";
import { use, useCallback, useEffect, useMemo, useRef } from "react";
import axios from "axios";
import AvatarFrame from "../../components/avatar/AvatarFrame";
import { useRouter } from "next/navigation";
import { useReelComment } from "../../hooks/useReelComment";
import ReelModal from "../../components/modals/PopUpModals/ReelModal/ReelModal";


interface ReelActionsProps {
  id: string;
  likeIds: string[];
  comments: Comment[];
  isCommentable: boolean;
  caption: string;
  user: User;
  mutateReels: () => void;
}

const ReelActions: React.FC<ReelActionsProps> = ({
  id,
  likeIds,
  comments,
  isCommentable,
  caption,
  user,
  mutateReels,
}) => {
  const { data: currentUser } = useCurrentUser();
  const commentRef = useRef<HTMLSpanElement>(null);
  const { setPos, setComments, setOpen } = useReelComment();

  const handleComment = useCallback(() => {
    setPos(
      commentRef.current?.offsetLeft as number,
      commentRef.current?.offsetTop as number
    );
    setComments(comments);
    setOpen(true);
  }, [comments, setComments, setOpen, setPos]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setPos(
        commentRef.current?.offsetLeft as number,
        commentRef.current?.offsetTop as number
      );
    });
  }, [setPos])

  const router = useRouter();

  const handleLike = useCallback(async () => {
    try {
      await axios.post("/api/like", {
        feedId: id,
        userId: currentUser?.id,
      });
      mutateReels();
    } catch (error) {
      console.log(error);
    }
  }, [currentUser?.id, id, mutateReels]);

  const currentUserHasAlreadyLiked = useMemo(() => {
    // if current user has already liked this reel
    return likeIds?.includes(currentUser?.id);
  }, [currentUser?.id, likeIds]);

  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      <span
        className="flex flex-col gap-2 items-center cursor-pointer justify-center"
        onClick={handleLike}
      >
        {currentUserHasAlreadyLiked ? (
          <AiFillHeart
            size={26}
            color="red"
            className="hover:text-neutral-500 duration-400 transition-all"
          />
        ) : (
          <AiOutlineHeart
            size={26}
            color="white"
            className="hover:text-neutral-500 duration-400 transition-all"
          />
        )}
        <p className="text-neutral-300 ">{likeIds.length}</p>
      </span>
      <span
        ref={commentRef}
        onClick={handleComment}
        className="flex flex-col gap-2 items-center cursor-pointer justify-center"
      >
        <FaRegComment
          size={26}
          color="white"
          className="hover:text-neutral-500 duration-400 transition-all"
        />
        <p className="text-neutral-300 ">{comments.length}</p>
      </span>
      <span className="flex flex-col gap-2 items-center cursor-pointer justify-center">
        <IoPaperPlaneOutline
          color="white"
          size={26}
          className="hover:text-neutral-500 duration-400 transition-all"
        />
      </span>
      <span className="flex flex-col gap-2 items-center cursor-pointer justify-center">
        <FiBookmark
          color="white"
          size={26}
          className="hover:text-neutral-500 duration-400 transition-all"
        />
      </span>
      <span className="cursor-pointer">
        <BsThreeDots
          color="white"
          size={26}
          className="hover:text-neutral-500 duration-400 transition-all"
        />
      </span>
      <AvatarFrame
        profileImage={user.profileImage}
        size="w-9 h-9"
        handleOnClick={() => router.push(`/user/${user.id}`)}
        showBackground={false}
      />
    </div>
  );
};

export default ReelActions;
