import StoryItem from "@/components/items/StoryItem";
import { Story } from "@/app/stories/components/StoryPage";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

interface StoryCardProps {
    id: string;
    stories: Story[];
    username: string;
    mutateFetchedUsers: () => void;
    profileImage: string;
}


const StoryCard: React.FC<StoryCardProps> = ({ 
    stories, id, username, 
    mutateFetchedUsers, profileImage }) => {

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
        <Slider {...settings} 
        className={`rounded-2xl w-full h-20 object-cover`}>
            {
                stories?.length > 0 && stories?.map((story: Story) => (
                    <StoryItem  key={story.id} createdAt={story.createdAt} 
                    caption={story.caption} music={story.music}
                    seenIds={story.seenIds} image={story.image}
                    video={story.video} id={story.id} />
                ))
            }
        </Slider>
    )
}

export default StoryCard;