/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { AiFillHome, AiOutlineHeart, AiOutlineMenu } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { MdOutlineExplore } from "react-icons/md";
import { HiOutlineFilm } from "react-icons/hi";
import { TbMessageCircle } from "react-icons/tb";
import { CgAddR, CgLinear } from "react-icons/cg";
import SideBarItems from "./SideBarItems";


//the sidebar on the side
const SideBar = () => {

    return (
        <div className="flex-col h-full w-full items-center
        py-4 px-3 gap-10 hidden md:flex
          border-r-stone-500 border-r-[1px] overflow-y-hidden ">
            <CgLinear size={30} color="white"/>
            <div className="flex w-full items-center flex-col gap-6">
                {items.map((item) => (
                    <SideBarItems href={item.href}
                    key={item.name} name={item.name}
                    icon={item.icon} showFooter={true}/>
                ))}
            </div>
        </div>
    )
}

export const items = [
        {
            name: "Home",
            icon: AiFillHome,
            href: "/"
        },
        {
            name: "Search",
            icon: FiSearch,
            href: "/search"
        },
        {
            name: "Explore",
            icon: MdOutlineExplore,
            href: "/explore"
        },
        {
            name: "Reels",
            icon: HiOutlineFilm,
            href: "/reels"
        },
        {
            name: "Messages",
            icon: TbMessageCircle,
            href: "/messages"
        },
        {
            name: "Notifications",
            icon: AiOutlineHeart,
            href: "/notifications"
        },
        {
            name: "Create",
            icon: CgAddR,
            href: "/create"
        },
        {
            name: "More",
            icon: AiOutlineMenu,
            href: "/more"
        }
]


export default SideBar;