"use client";
import SideBarItems from "../items/SideBarItems";
import { CgAddR, CgHome } from "react-icons/cg";
import { BiMessageRounded, BiMoviePlay } from "react-icons/bi";
import Image from "next/image";
import useCurrentUser from "@/actions/useCurrentUser";
import { MdOutlineExplore } from "react-icons/md";

//the sidebar on the footer
const items = [
  {
    name: "Home",
    icon: CgHome,
    href: "/",
  },
  {
    name: "Explore",
    icon: MdOutlineExplore,
    href: "/explore",
  },
  {
    name: "Reels",
    icon: BiMoviePlay,
    href: "/reels",
  },
  {
    name: "Create",
    icon: CgAddR,
    href: "/create",
  },
  {
    name: "Inbox",
    icon: BiMessageRounded,
    href: "/inbox",
  },
];

const Footer = () => {
  const { data: currentUser } = useCurrentUser();

  return (
    <div
      className="fixed 
        justify-between flex-row 
        z-[9999]
        bottom-0 w-full 
        items-center px-2 py-2 h-13 
        flex md:hidden border-t-neutral-500  bg-black
        "
      style={{ borderTopWidth: "0.2px" }}
    >
      {items.map((item) => (
        <SideBarItems
          href={item.href}
          key={item.name}
          name={item.name}
          icon={item.icon}
          size={25}
          showFooter={false}
          showName={false}
        />
      ))}
      <span className="rounded-full  overflow-hidden h-7 w-7 mt-1 mb-1">
        <Image
          src={currentUser?.profileImage || "/images/personplaceholder.png"}
          alt=""
          style={{ objectFit: "cover" }}
          width={100}
          height={100}
        />
      </span>
    </div>
  );
};

export default Footer;
