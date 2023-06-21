"use client";
import getFeed from "../actions/getFeed";
import FeedItem from "./items/FeedItem";


export interface FeedProps {
    id: string;
    media: string;
    caption: string;
    isCommentable: boolean;
    createdAt: Date;
    userId: string;
    likeIds: string[];
    comments: string[];
    location: string;
}

// Component to display Feed
const Feed = () => {
    const { data: fetchedFeed, isLoading, 
        mutate: mutateFeed } = getFeed();

    return (
        <div className="w-full h-full px-12 py-5 flex justify-center">
            <div className="md:max-w-[500px] w-full flex
            flex-col gap-11 items-center">
                {
                    fetchedFeed?.map((feed: FeedProps) => (
                        <FeedItem key={feed.id} id={feed.id} caption={feed.caption}
                        media={feed.media} isCommentable={feed.isCommentable}
                        createdAt={feed.createdAt} userId={feed.userId} 
                        likeIds={feed.likeIds} comments={feed.comments}
                        location={feed.location} mutateFeed={mutateFeed}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Feed;