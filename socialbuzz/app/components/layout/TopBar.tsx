"use client";
import { AiOutlineHeart } from "react-icons/ai";
import { CgLinear } from "react-icons/cg";
import { useRouter } from "next/navigation";

const TopBar = () => {
    const router = useRouter();

    return (
        <div className="z-40 top-0 fixed w-screen 
        bg-black border-b-neutral-500 md:hidden"
        style={{borderBottomWidth: "0.2px"}}>
            <div className="flex flex-row justify-between w-full p-5 items-center gap-3">
                <CgLinear size={33} color="white" onClick={() => router.push("/")}/>
                <input 
                    type="text" 
                    placeholder="Search" 
                    className="rounded-md p-1.5 bg-neutral-800 w-full focus:outline-none border-none" />
                <AiOutlineHeart size={33} color="white" />
            </div>
        </div>
    )
};

export default TopBar;