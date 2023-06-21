/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { AiOutlineHeart, AiOutlineMenu } from "react-icons/ai";
import { CgHome } from "react-icons/cg"
import { FiSearch } from "react-icons/fi";
import { MdOutlineExplore } from "react-icons/md";
import { HiOutlineFilm } from "react-icons/hi";
import { TbMessageCircle } from "react-icons/tb";
import { CgAddR, CgLinear } from "react-icons/cg";

import SideBarItems from "../items/SideBarItems";
import useMore from "@/app/hooks/useMore";
import { useCallback } from "react";
import More from "@/app/components/modals/MoreModal/More";
import useCurrentUser from "@/app/actions/useCurrentUser";

import Image from "next/image";

//the sidebar on the side
const SideBar = () => {
    const more = useMore();
    const { data: currentUser } = useCurrentUser()

    const handleMore = useCallback(() => {
        if (more.open) {
            more.onClose();
        } else {
            more.onOpen();
        }
    }, [more]);

    if (!currentUser) return null;

    return (
        <div className="flex-col min-h-screen items-center
        py-4 px-5 hidden md:flex gap-3 
          border-r-stone-500 border-r-[0.5px] 
        ">
            <CgLinear size={30} color="white" style={{marginBottom: "20px"}} />
            <div className="flex w-full items-center flex-col gap-2 h-full">
                {items.map((item) => (
                    <SideBarItems href={item.href}
                    key={item.name} name={item.name}
                    icon={item.icon} showFooter={true} />
                ))}
                <span className="rounded-full overflow-hidden h-8 w-8 mt-1 mb-1">
                    <Image src={currentUser?.profileImage ||
                    '/images/personplaceholder.png'} alt=""
                    style={{objectFit: "cover"}} width={100} 
                    height={100} />
                </span>
                <div className="cursor-pointer rounded-lg 
                p-3 hover:bg-neutral-700 mt-2 flex flex-row
                items-center  ">
                    <AiOutlineMenu size={28} onClick={handleMore} />
                    {/* <p className="capitalize text-md lg:flex hidden text-neutral-400">More</p> */}
                </div>
                <More />
            </div>
        </div>
    )
}

export const items = [
        {
            name: "Home",
            icon: CgHome,
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
        }
]


export default SideBar;