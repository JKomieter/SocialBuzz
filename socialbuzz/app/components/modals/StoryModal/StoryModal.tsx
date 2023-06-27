"use client";
import useStoryModal from "@/app/hooks/useStory";
import Image from "next/image";
import Modal from "../Modal";
import useCurrentUser from "@/app/actions/useCurrentUser";
import axios from "axios";
import { useCallback } from "react";
import { GiAlliedStar } from "react-icons/gi";
import { IoMdArrowForward } from "react-icons/io";


const StoryModal = () => {
    const { open, shouldOpen, story, setStory } = useStoryModal();
    const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();


    const handleStory = useCallback(async () => {
    // post story to db
    try {
        await axios.post('/api/story', {
            story,
            user: currentUser?.id
        })

        mutateCurrentUser()
        } catch(error) {
        console.log(error);
        }
    }, [currentUser?.id, mutateCurrentUser, story]);


    const bodyContent = (
        <div className="flex items-center flex-col justifycenter w-full h-full">
            <div className="w-full h-full flex flex-col justify-center items-center">
                <Image src={story} alt="Story" width={400} height={400} 
                    style={{objectFit: "cover", borderRadius: "16px"}}/>
            
                <div className="flex mt-2 gap-4 flex-row justify-between items-center w-full md:w-[60%]">
                    <div className="rounded-3xl p-2 flex flex-row justify-center
                        bg-neutral-600 items-center gap-2">
                        <span className="rounded-full p-[2px] w-6 h-6 border-1 border-white">
                            <Image src={currentUser?.profileImage || "/images/personplaceholder.png"}
                                alt="Story" width={50} height={50} 
                                style={{objectFit: "cover", borderRadius: "50%", }}/>
                        </span>
                        <p className="text-sm font-normal">
                            Your Story
                        </p>
                    </div>
                    <div className="rounded-3xl p-2 flex flex-row  bg-neutral-600
                        justify-center items-center gap-2">
                        <GiAlliedStar size={25} color="green" />
                        <p className="text-sm font-normal">
                            Close Friends
                        </p>
                    </div>
                    <span className="rounded-full p-3 bg-white
                        flex justify-center items-center" onClick={handleStory}>
                        <IoMdArrowForward size={23} color="black" />
                    </span>
                </div>
            </div>
        </div>
    )

    if (!open) return null

    return (
        <Modal bodyContent={bodyContent} onClose={() => shouldOpen(false)} 
            isJustifyCenter/>
    )
}

export default StoryModal;