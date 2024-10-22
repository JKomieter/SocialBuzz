/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { AiOutlineHeart, AiOutlineMenu } from "react-icons/ai";
import { CgHome } from "react-icons/cg"
import { FiSearch } from "react-icons/fi";
import { MdOutlineExplore } from "react-icons/md";
import { TbMessageCircle } from "react-icons/tb";
import { CgAddR, CgLinear } from "react-icons/cg";
import { BiMoviePlay } from "react-icons/bi";

import SideBarItems from "../items/SideBarItems";
import useMore from "@/hooks/useMore";
import { useCallback, useEffect, useMemo } from "react";
import More from "@/components/modals/PopUpModals/MoreModal/More";
import useCurrentUser from "@/actions/useCurrentUser";
import { useRouter } from "next/navigation";
import Image from "next/image";
import countNotifications from "@/actions/countNotifications";

//the sidebar on the side
const SideBar = () => {
    const more = useMore();
    const { data: currentUser } = useCurrentUser();
    const { data: count, mutate: mutateCount } = countNotifications()
    const router = useRouter()

    const handleMore = useCallback(() => {
        //handle the closing and opening of the more modal
        if (more.open) {
            more.onClose();
        } else {
            more.onOpen();
        }
    }, [more]);

    const unRead = useMemo(() => {
        // true is there is still unread notifications
        return count > 0
    }, [count])

    useEffect(() => {
        if (currentUser?.error) {
            return router.push("/auth/login")
        }
    }, [currentUser?.error, router])


      if (currentUser?.error) return null;

    return (
      <div
        className="flex-col min-h-screen items-center
        py-6 px-5 hidden md:flex gap-3 bg-black
          border-r-stone-500 border-r-[0.2px] 
        "
      >
        <span className="lg:hidden flex">
          <CgLinear size={30} color="white" style={{ marginBottom: "20px" }} />
        </span>
        <h3 className="hidden font-sans lg:flex w-full text-2xl font-semibold text-neutral-200"
          style={{fontFamily: "Helvetica Neue,Helvetica,Arial,sans-serif"}}
        >
          SocialBuzz
        </h3>
        <div className="mt-10 flex w-full items-center flex-col gap-2 h-full">
          {items.map((item) => (
            <SideBarItems
              href={item.href}
              key={item.name}
              name={item.name}
              icon={item.icon}
              showFooter={true}
              unRead={unRead}
              size={28}
              mutateCount={mutateCount}
              showName={true}
            />
          ))}
          <div
            className="w-full  flex-row gap-2 rounded-lg p-3 hover:bg-neutral-700
            flex items-center transition duration-500  cursor-pointer"
          >
            <span
              onClick={() => router.push(`/user/${currentUser?.id}`)}
              className="rounded-full overflow-hidden h-8 w-8 mt-1 mb-1 "
            >
              <Image
                src={
                  currentUser?.profileImage || "/images/personplaceholder.png"
                }
                alt=""
                style={{ objectFit: "cover" }}
                width={100}
                height={100}
              />
            </span>
            <p className="lg:flex hidden text-sm text-neutral-100">Profile</p>
          </div>
          <More />
        </div>
        <div
          className="cursor-pointer rounded-lg transition duration-500 hover:scale-105
            p-3 hover:bg-neutral-700 mt-5 flex flex-row
            items-center bottom-0 gap-2 w-full"
          onClick={handleMore}
        >
          <AiOutlineMenu size={28} />
          <p className="lg:flex text-sm hidden text-neutral-100">More</p>
        </div>
      </div>
    );
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
            icon: BiMoviePlay,
            href: "/reels"
        },
        {
            name: "Inbox",
            icon: TbMessageCircle,
            href: "/inbox"
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