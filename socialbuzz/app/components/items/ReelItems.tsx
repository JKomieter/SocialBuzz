import ReactPlayer from "react-player";
import ReelActions from "../../reels/ReelActions";
import { useInView } from "react-intersection-observer";
import { User } from "@/app/reels/Reels";
import { Comment } from "@/app/reels/Reels";
import ReelInfo from "@/app/reels/ReelInfo";

interface ReelItemProps {
  id: string;
  user: User;
  likeIds: string[];
  comments: Comment[];
  video: string;
  caption: string;
  isCommentable: boolean;
  mutateReels: () => void;
}

const ReelItem: React.FC<ReelItemProps> = ({
  id,
  user,
  likeIds,
  comments,
  video,
  caption,
  isCommentable,
  mutateReels,
}) => {
  // play when reel is visible
  const { ref: reelRef, inView: reelIsVisible } = useInView();

  return (
    <div className="flex flex-row gap-4 items-end justify-center px-3 overflow-y-hidden">
      <div
        ref={reelRef}
        className="h-[80vh] w-[300px] sm:w-[320px] md:w-[350px] flex flex-row justify-center rounded-3xl bg-neutral-900"
      >
        <ReactPlayer
          url={video}
          width="100%"
          height="100%"
          playing={reelIsVisible}
          loop={true}
          muted={true}
          className=""
        />
        <ReelInfo
          username={user.username}
          userId={user.id}
          caption={caption}
          music={""}
          profileImage={user.profileImage}
        />
      </div>
      <ReelActions
        id={id}
        likeIds={likeIds}
        comments={comments}
        isCommentable={isCommentable}
        caption={caption}
        user={user}
        mutateReels={mutateReels}
      />
    </div>
  );
};

export default ReelItem;
