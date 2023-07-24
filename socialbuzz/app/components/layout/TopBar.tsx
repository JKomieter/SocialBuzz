"use client";
import { usePathname } from "next/navigation";
import InboxNav from "@/app/inbox/InboxNav";
import TopNav from "./TopNav";



const TopBar = () => {
    const pathname = usePathname();

    // show InboxNav when on /inbox
    // show TopBar when on /home

    if (pathname.includes("/auth")) return null;

    return (
        <div className="z-40 top-0 fixed w-screen 
        bg-black border-b-neutral-500 md:hidden"
        style={{borderBottomWidth: "0.2px"}}>
            {
                pathname === "/" ? <TopNav /> : <InboxNav />
            }
        </div>
    )
};

export default TopBar;