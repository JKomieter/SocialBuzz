"use client"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import React, { useCallback, useState } from 'react'
import useStoryModal from '@/app/hooks/useStory';
import useCurrentUser from '@/app/actions/useCurrentUser';
import UserStory from './UserStory';
import useStories from '@/app/actions/useStories';
import Carousel from './Carousel';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Story {
  id: string;
  image: string;
  user: {
    id: string;
    username: string;
    profileImage: string;
  },
  seenIds: string[];
  video: string;
}

interface SliderProps {
  slickPrev: () => void;
  slickNext: () => void;
}

const Stories = () => {
  
  const { setStory, shouldOpen } = useStoryModal();
  const { data: currentUser } = useCurrentUser();
  const { data: stories, mutate: mutateStories } = useStories();
  const [sliderRef, setSliderRef] = useState<SliderProps | null>(null)

  const handleChange = useCallback((base64: string) => {
      // set the story to the base64 string
      // open the story modal
      setStory(base64);
      shouldOpen(true);
      
  }, [setStory, shouldOpen]);

  const sliderSettings = {
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
  }


  return (
    <div className='flex flex-row items-center gap-1 px-5 py-4'>
      <span className='rounded-full p-1.5 bg-neutral-200 cursor-pointer
      flex justify-center items-center w-5 h-5' onClick={sliderRef?.slickPrev}>
        <FaChevronLeft size={23} color='black' />
      </span>
      <Slider {...sliderSettings} ref={setSliderRef} 
      className='w-full flex flex-row gap-2 items-center justify-start '>
          <UserStory handleChange={handleChange} currentUser={currentUser} />
          {
            stories?.map((story: Story) => (
              <Carousel key={story.id} image={story.image} id={story.id}
              mutateStories={mutateStories} video={story.video} userId={story.user.id}
              username ={story.user.username} profileImage={story.user.profileImage}/>
            ))
          }
      </Slider>
      <span className='rounded-full p-1.5 bg-neutral-200 cursor-pointer
      flex justify-center items-center w-5 h-5' onClick={sliderRef?.slickNext}>
        <FaChevronRight size={23} color='black' />
      </span>
    </div>
  )
}

export default Stories;
