import router from "next/router"
import { FaRegEdit } from "react-icons/fa"
import { HiOutlineArrowLeft } from "react-icons/hi"
import { ImList2 } from "react-icons/im"
import { IoIosArrowDown } from "react-icons/io"
import useInbox from "../hooks/useInbox"

interface NavProps {
    username: string;
}


const Nav: React.FC<NavProps> = ({
    username
}) => {

    const { isOpen, setOpen } = useInbox();

    return (
        <div className="px-6 flex flex-col items-center justify-between gap-4 w-full ">
            <div className="flex flex-row items-center justify-between w-full py-3">
                <HiOutlineArrowLeft 
                size={28} 
                data-testid="back-button"
                className="text-neutral-300"
                onClick={() => router.back()} />
                <div className="flex flex-row items-center gap-2">
                    <p className="font-bold lowercase">
                        {username}
                    </p>
                    <IoIosArrowDown size={24} className="text-neutral-300" />
                </div>
                <FaRegEdit size={28} className="text-neutral-300" />
            </div>
            <div className="w-full py-2">
                <ImList2 
                size={28} 
                className="text-neutral-300 cursor-pointer"
                onClick={() => setOpen(!isOpen)} />
            </div>
        </div>
    )
}

export default Nav;