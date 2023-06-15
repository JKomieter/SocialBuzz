import { User } from "@prisma/client";
import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

interface CaptionProps {
    caption: string;
    setCaption: React.Dispatch<React.SetStateAction<string>>;
    step: number;
}


const Caption: React.FC<CaptionProps> = ({
    caption,
    setCaption,
    step,
}) => {
    const session = useSession()
    const [ currentUser, setCurrentUser ] = useState<User | null>(null);
    const [ showEmoji, setShowEmoji ] = useState<boolean>(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (session) {
            try {
                const fetchUserData = async () => {
                    const response = await axios.post('/api/user', {
                        email: session?.data?.user?.email
                    });
                    const user = response.data;
                    setCurrentUser(user);
                }
                fetchUserData();
            } catch (error) {
                console.log(error);
            }
        }
    }, [session])

    const handleEmojiSelect = (emoji: any) => {
        // this function makes sure to add emoji to the textarea

        const textarea = textareaRef.current;
        if (!textarea) return;

        const start = textarea?.selectionStart || 0;
        const end = textarea?.selectionEnd || 0;
        const updatedCaption =
            caption.substring(0, start) + emoji.native + caption.substring(end);
        setCaption(updatedCaption);
        textarea?.focus();
        textarea?.setSelectionRange(start + emoji.native.length, start + emoji.native.length);
    }

    const handleShowEmoji = () => {
        // control the emoji picker display
        setShowEmoji(!showEmoji);
    }
    
    if (step !== 2) return null;

    return (
        <div className=" w-full h-full
            p-4 transition-all duration-500 
            bg-neutral-800 text-white
            flex flex-col items-center gap-3
            overflow-y-scroll"
            style={{borderBottomRightRadius: '8px'}}>
            <div className="flex-row flex gap-2 items-center w-full py-2">
                {/* this will hold the avatar of the user */}
                <span className="w-10 h-10 rounded-full  
                bg-neutral-500" ></span>
                <span className="text-sm font-semibold">
                    {currentUser?.username}
                </span>
            </div>
            <textarea placeholder="Write a caption..." 
            className="border-none h-[100px] w-full bg-neutral-800
            outline-none focus:outline-none "
            ref={textareaRef}
            value={caption}
            onChange={(e) => setCaption(e.target.value)}/>
            <div className="flex flex-col gap-2 w-full">
                <div className="flex flex-row gap-2 justify-between w-full items-center">
                    <span className="text-neutral-400" onClick={handleShowEmoji}>&#x1F60A;</span>
                    <span className="text-sm text-neutral-400">{caption.length}/1000</span>
                </div>  
                {showEmoji && <Picker data={data} onEmojiSelect={console.log} 
                onChange={handleEmojiSelect}/>}
            </div>
        </div>
    )
}



export default Caption;