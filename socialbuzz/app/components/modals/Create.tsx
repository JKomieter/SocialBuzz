"use client"
import useCreate from "@/app/hooks/useCreate";
import { IoMdImages } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Button from "../buttons/Button";


const Create = () => {
    const create = useCreate();

    if (!create.open) return null;

    return (
        <div className="fixed z-50 flex outline-none 
            items-center bg-black bg-opacity-40 gap-7
            flex-col h-screen w-screen text-white p-8
            " onClick={() => create.onClose()}>
                <div className="flex items-end w-full px-2 ">
                    <span className="w-full text-right flex justify-end">
                        <IoClose color="#fff" className="cursor-pointer" 
                        onClick={() => create.onClose()} size={34} />
                    </span>
                </div>
                <div className="flex flex-col w-full h-[80%] md:w-[30%] md:h-[70%]
                    bg-neutral-800 rounded-xl 
                    transition duration-500 ease-in-out
                ">
                    <span className="w-full text-center text-lg font-meduim border-b-[0.1px]
                    border-[#fff] py-2">
                        Create new post
                    </span>
                    <div className="flex flex-col w-full h-full justify-center items-center gap-5">
                        <IoMdImages size={50} color="#fff"/>
                        <p className="text-center text-white text-lg font-normal">
                            Drag photos or videos here
                        </p>
                        <Button bgColor="#0095F6" textColor="#fff" text="Select from computer" 
                        onClick={() => {}} width="60%"/>
                    </div>
                </div>
            </div>
    )
}

export default Create;