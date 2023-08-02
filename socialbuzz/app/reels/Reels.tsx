import InfiniteScroll from "react-infinite-scroll-component";
import ReelItem from "../components/items/ReelItems";
import { FadeLoader } from "react-spinners";


export interface User {
  id: string;
  username: string;
  profileImage: string;
  followerIds: string[];
}

export interface Comment {
  id: string;
  body: string;
  createdAt: Date;
  postId: string;
  user: User;
}
export interface Reel {
  id: string;
  user: User;
  likeIds: string[];
  comments: Comment[];
  video: string;
  caption: string;
  isCommentable: boolean;
}
interface ReelsProps {
  fetchedReels: Reel[];
  isLoading: boolean;
  mutateReels: () => void;
}

const Reels: React.FC<ReelsProps> = ({
  fetchedReels,
  isLoading,
  mutateReels,
}) => {

  console.log(fetchedReels);

  return (
    <div className="w-full flex justify-center items-center">
      <InfiniteScroll
        dataLength={fetchedReels?.length}
        next={mutateReels}
        hasMore={true}
        loader={<FadeLoader color="white"  />}
        className="w-full flex flex-col justify-center gap-5 items-center overflow-x-scroll"
      >
        {fetchedReels?.map((reel) => (
          <ReelItem
            key={reel.id}
            id={reel.id}
            user={reel.user}
            likeIds={reel.likeIds}
            comments={reel.comments}
            video={reel.video}
            caption={reel.caption}
            isCommentable={reel.isCommentable}
            mutateReels={mutateReels}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Reels;
