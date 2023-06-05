"use client";
import { AiFillHome, AiOutlineHeart } from "react-icons/ai";
import SideBarItems from "./SideBarItems";
import { FiSearch } from "react-icons/fi";
import { MdOutlineExplore } from "react-icons/md";
import { HiOutlineFilm } from "react-icons/hi";
import { TbMessageCircle } from "react-icons/tb";
import { CgAddR } from "react-icons/cg";


//the sidebar on the footer
const items = [
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
            name: "Reels",
            icon: HiOutlineFilm,
            href: "/reels"
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


const Footer = () => {
    return (
        <div className="flex-row 
        justify-between fixed 
        z-50
        bottom-0 gap-7 w-screen 
        items-center px-6 py-5 h-12 
        flex md:hidden border-t-neutral-500 
        border-t-[1px]
        ">
            {
                items.map((item) => (
                    <SideBarItems href={item.href} 
                    key={item.name} name={item.name} 
                    icon={item.icon} showFooter={false}/>
                ))
            }
        </div>
    )
}

export default Footer;