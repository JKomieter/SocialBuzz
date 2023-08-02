"use client";
import useCurrentUser from "@/app/actions/useCurrentUser";
import AvatarFrame from "@/app/components/avatar/AvatarFrame";
import PostComments from "@/app/components/comment/PostComments";
import { useReelComment } from "@/app/hooks/useReelComment";
import { MdOutlineClose } from "react-icons/md";
import { VscSmiley } from "react-icons/vsc";

const ReelModal = () => {
  const { comments, x, y, isOpen } = useReelComment();
  const { data: currentUser } = useCurrentUser();

  if (!isOpen) return null;

  return (
    <div
      style={{ top: y - 350, left: x + 80 }}
      className={`absolute p-4 rounded-xl bg-neutral-800 max-h-[350px] overflow-y-scroll z-50]`}
    >
      <div className="flex flex-col items-center ">
        <span className="flex flex-row items-center gap-6 p-3 w-full">
          <MdOutlineClose size={26} color="white" />
          <p className="text-neutral-300">Comments</p>
        </span>
        <PostComments comments={comments} handleOnClick={() => {}} />
        <div
          className="flex flex-row w-full p-1 items-center rounded-3xl border-neutral-300"
          style={{ borderWidth: "2px" }}
        >
          <AvatarFrame
            profileImage={currentUser?.profileImage}
            size="w-9 h-9"
            handleOnClick={() => {}}
            showBackground={false}
          />
          <input
            className="p-1 outline-none border-none bg-transparent w-full text-neutral-300"
            placeholder="Add a comment..."
          />
          <VscSmiley size={25} color="white" />
        </div>
      </div>
    </div>
  );
};

export default ReelModal;
