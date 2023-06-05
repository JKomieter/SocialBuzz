"use client";
import { useCallback, useState } from "react";
import { IconType } from "react-icons";

import { useRouter } from "next/navigation";


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

    const handleClick = useCallback(() => {
        //navigate to href
        router.push(href as string)
    }, [href, router])

    const handleHover = useCallback(() => {
        if (show == true) {
            setShow(false);
            return;
        }
        setShow(true);
    }, [show])

    return (
        <>
        <div onMouseEnter={handleHover} onMouseLeave={handleHover} 
            className="cursor-pointer rounded-full p-2 hover:bg-neutral-700">
            <Icon size={28} color="white" 
            onClick={handleClick}/>
            {!showFooter && show && <div className="absolute text-white 
            w-auto z-50 bg-neutral-500
            transition-all text-sm
            p-2 rounded-[10px] after:-left-[20px] after:rounded-l-none
            after:top-1/2 ml-3">
                {name}
            </div>}
        </div>
        </>
    )
}

export default SideBarItems;