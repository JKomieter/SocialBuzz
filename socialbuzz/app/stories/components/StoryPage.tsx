"use client"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useParams, useRouter } from 'next/navigation';
import Modal from '@/app/components/modals/Modal';
import getUser from '@/app/actions/getUser';
import useStories from '@/app/actions/useStories';
import { useEffect, useState } from 'react';
import StoryCard from './StoryCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface User {
    id: string;
    username: string;
    stories: Record<string, any>[];
    profileImage: string;
}

interface SliderProps {
  slickPrev: () => void;
  slickNext: () => void;
}

// page to display stories of users
const StoryPage = () => {
    const { userId  } = useParams();
    const router = useRouter();
    const { data: fetchedUser, mutate: mutateFetchedUser } = getUser(userId);
    const { data: fetchedUsers, mutate: mutateFetchedUsers } = useStories();
    const [ currentStoryIndex, setCurrentStoryIndex ] = useState<Number>(0);
    const [sliderRef, setSliderRef] = useState<SliderProps | null>(null);

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
    };

    console.log(Array.isArray(fetchedUsers))
    
    const bodyContent = (
        <div className='w-full h-full flex flex-row justify-between items-center'>
            <span className='rounded-full p-1.5 bg-neutral-200 cursor-pointer
            flex justify-center items-center w-5 h-5' onClick={sliderRef?.slickPrev}>
                <FaChevronLeft size={23} color='black' />
            </span>
            <Slider {...settings} className='w-full h-full'> 
                {
                    fetchedUsers?.length > 0 && fetchedUsers?.map((user: User) => (
                        <StoryCard key={user.id} id={user.id} 
                        username={user.username} profileImage={user.profileImage}
                        mutateFetchedUsers={mutateFetchedUsers} stories={user.stories} />
                    ))
                }
            </Slider>
            <span className='rounded-full p-1.5 bg-neutral-200 cursor-pointer
            flex justify-center items-center w-5 h-5' onClick={sliderRef?.slickNext}>
                <FaChevronRight size={23} color='black' />
            </span>
        </div>
    )


    return (
         <Modal bodyContent={bodyContent} 
         onClose={() => router.push("/")}/>
    )
}

export default StoryPage;