"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import React, { useCallback, useState } from "react";
import useStoryModal from "@/hooks/useStory";
import useCurrentUser from "@/actions/useCurrentUser";
import UserStory from "./UserStory";
import useStories from "@/actions/useStories";
import Carousel from "./Carousel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Friend {
  id: string;
  username: string;
  profileImage: string;
}

interface SliderProps {
  slickPrev: () => void;
  slickNext: () => void;
}

const Stories = () => {
  const { setStory, shouldOpen } = useStoryModal();
  const { data: currentUser } = useCurrentUser();
  const { data: friendsWithStories, mutate: mutateStories } = useStories();
  const [sliderRef, setSliderRef] = useState<SliderProps | null>(null);

  const handleChange = useCallback(
    (base64: string) => {
      // set the story to the base64 string
      // open the story modal
      setStory(base64);
      shouldOpen(true);
    },
    [setStory, shouldOpen]
  );

  const sliderSettings = {
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
  };

  return (
    <div className="flex flex-row items-center gap-1 px-5 py-4">
      <span
        className="rounded-full p-1.5 bg-neutral-200 cursor-pointer
      flex justify-center items-center w-5 h-5"
        onClick={sliderRef?.slickPrev}
      >
        <FaChevronLeft size={23} color="black" />
      </span>
      <Slider
        {...sliderSettings}
        ref={setSliderRef}
        className="w-full flex flex-row items-center justify-center gap-8 "
      >
        <UserStory handleChange={handleChange} currentUser={currentUser} />
        {friendsWithStories?.map((friend: Friend) => (
          <Carousel
            key={friend.id}
            id={friend.id}
            mutateStories={mutateStories}
            username={friend.username}
            profileImage={friend.profileImage}
          />
        ))}
      </Slider>
      <span
        className="rounded-full p-1.5 bg-neutral-200 cursor-pointer
      flex justify-center items-center w-5 h-5"
        onClick={sliderRef?.slickNext}
      >
        <FaChevronRight size={23} color="black" />
      </span>
    </div>
  );
};

export default Stories;
