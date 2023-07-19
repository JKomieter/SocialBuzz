"use client";
import getFeed from "../actions/getFeed";
import FeedItem from "./items/FeedItem";
import LoadFeed from "./loading/LoadFeed";


export interface FeedProps {
    id: string;
    image: string;
    video: string;
    caption: string;
    isCommentable: boolean;
    createdAt: Date;
    userId: string;
    likeIds: string[];
    comments: string[];
    location: string;
    user: {
        stories: string[];
        id: string;
    }
}

// Component to display Feed
const Feed = () => {
    const { data: fetchedFeed, isLoading, 
        mutate: mutateFeed } = getFeed();

    if (isLoading) return <LoadFeed />;

    return (
        <div className="w-full h-full px-12 py-5 flex justify-center">
            <div className="md:max-w-[500px] w-full flex
            flex-col gap-11 items-center">
                {
                    fetchedFeed?.map((feed: FeedProps) => (
                        <FeedItem 
                            key={feed.id}
                            id={feed.id}
                            caption={feed.caption}
                            image={feed.image}
                            isCommentable={feed.isCommentable}
                            createdAt={feed.createdAt}
                            userId={feed.userId}
                            video={feed.video}
                            likeIds={feed.likeIds}
                            comments={feed.comments}
                            location={feed.location}
                            mutateFeed={mutateFeed} 
                            stories={feed.user.stories}  
                            />
                    ))
                }
            </div>
        </div>
    )
}

export default Feed;