"use client";
import { useCallback, useState } from "react";
import { IconType } from "react-icons";

import { useRouter } from "next/navigation";
import useCreate from "@/app/hooks/useCreate";
import { useNotification } from "@/app/hooks/useNotification";


interface SideBarItemsProps {
    name: string;
    icon: IconType;
    href: string;
    showFooter: boolean;
}


const SideBarItems: React.FC<SideBarItemsProps> = ({
    name, 
    icon: Icon, 
    href,
    showFooter
}) => {
    const [ show, setShow ] = useState(false);
    const router = useRouter();
    const create = useCreate();
    const notification = useNotification();

    const handleClick = useCallback(() => {
        // open the create modal
        if (href === "/create") return;

        // open the notification modal
        if (href === "/notifications") {
            notification.isOpen ? 
            notification.onClose() : notification.onOpen();
            return;
        };
        
        //navigate to href 
        router.push(href as string)
    }, [href, notification, router])

    const handleHover = useCallback(() => {
        if (show == true) {
            setShow(false);
            return;
        }
        setShow(true);
    }, [show])

    const openModal = useCallback(() => {
        if (name !== "Create") {
            return ;
        }
        create.onOpen();
    }, [name, create])

    return (
        <div onMouseEnter={handleHover} onMouseLeave={handleHover} 
            className="cursor-pointer rounded-lg p-3 hover:bg-neutral-700
            flex items-center "
            onClick={openModal}
        >
            <Icon size={28} color="#fff" 
            onClick={handleClick}/>
            {/* <p className="capitalize lg:flex hidden text-md text-neutral-400">{name}</p> */}
        </div>
    )
}

export default SideBarItems;