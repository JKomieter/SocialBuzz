import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useSwiper } from 'swiper/react';

import StoryCard from './StoryCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { User } from './StoryPage';
import { useMediaQuery } from '@material-ui/core';
import { useMemo, useState } from 'react';

interface StoryViewProps {
    users: User[];
    mutateFetchedUsers: () => void;
    userId: string;
}


const StoryView: React.FC<StoryViewProps> = ({
    users, mutateFetchedUsers, userId
}) => {
    const swiper = useSwiper();
    const matches = useMediaQuery('(max-width: 600px)');
    const [activeIndex, setActiveIndex] = useState(users?.findIndex((user) => user.id === userId));

    const numCardsToShow = useMemo(() => {
        // return number of cards to show based on screen size
        const slidesToShow = matches ? 2 : 3;
        return slidesToShow;
    }, [matches])

    return (
        <div className='w-full h-full flex 
        flex-row justify-between items-center'>
            <span className='rounded-full p-1.5 
            bg-neutral-200 cursor-pointer
            flex justify-center items-center w-5 h-5' 
            onClick={() => swiper.slideNext()}>
                <FaChevronLeft size={23} color='black' />
            </span>
            <Swiper className='w-full h-full'
            centeredSlides={true}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            slidesPerView={numCardsToShow as number}
            navigation 
            onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
            }} > 
                {
                    users?.length > 0 && users?.map((user: User) => (
                        <SwiperSlide key={user.id} 
                        className={`rounded-2xl bg-neutral-500 max-h-[250px]
                        min-h-[180px] max-w-[250px] min-w-[160px] ${
                        user.id === userId ? 'w-[300px] h-[400px]' : ''
                        }`}>
                            <StoryCard 
                            key={user.id} 
                            id={user.id} 
                            username={user.username} 
                            profileImage={user.profileImage}
                            mutateFetchedUsers={mutateFetchedUsers} 
                            stories={user.stories} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <span className='rounded-full p-1.5 
            bg-neutral-200 cursor-pointer
            flex justify-center items-center w-5 h-5' 
            onClick={() => swiper.slidePrev()}>
                    <FaChevronRight size={23} color='black' />
            </span>
        </div>
    )
}

export default StoryView;