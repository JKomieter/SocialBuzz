"use client";
import SideBarItems from "../items/SideBarItems";
import { FiSearch } from "react-icons/fi";
import { HiOutlineFilm } from "react-icons/hi";
import { CgAddR, CgHome } from "react-icons/cg";
import Image from "next/image";
import useCurrentUser from "@/app/actions/useCurrentUser";


//the sidebar on the footer
const items = [
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
            name: "Reels",
            icon: HiOutlineFilm,
            href: "/reels"
        },
        {
            name: "Create",
            icon: CgAddR,
            href: "/create"
        }
]


const Footer = () => {
    const { data: currentUser } = useCurrentUser();

    return (
        <div className="fixed 
        justify-between flex-row 
        z-[9999]
        bottom-0 gap-7 w-full 
        items-center px-3 py-5 h-12 
        flex md:hidden border-t-neutral-500 
        border-t-[1px] bg-black
        ">
            {
                items.map((item) => (
                    <SideBarItems href={item.href} 
                    key={item.name} name={item.name} 
                    icon={item.icon} showFooter={false}/>
                ))
            }
            <span className="rounded-full  overflow-hidden h-8 w-8 mt-1 mb-1">
                <Image src={currentUser?.profileImage ||
                '/images/personplaceholder.png'} alt=""
                style={{objectFit: "cover"}} width={100} 
                height={100} />
            </span>
        </div>
    )
}

export default Footer;