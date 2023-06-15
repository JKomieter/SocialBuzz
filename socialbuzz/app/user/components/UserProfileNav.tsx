import { BsGrid3X3 } from "react-icons/bs";
import { RiVideoLine } from "react-icons/ri";
import { BsBookmark } from "react-icons/bs";
import { IoPersonCircleOutline } from "react-icons/io5";

const items = [
    {
        name: 'POSTS',
        href: '/user/[username]/posts',
        current: true,
        Icon: BsGrid3X3,
    },
    {
        name: 'REELS',
        href: '/user/[username]/reels',
        current: false,
        Icon: RiVideoLine,
    },
    {
        name: 'SAVED',
        href: '/user/[username]/saved',
        current: false,
        Icon: BsBookmark
    },
    {
        name: 'TAGGED',
        href: '/user/[username]/tagged',
        current: false,
        Icon: IoPersonCircleOutline
    },
]

interface UserProfileNavProps {
    followers: number;
    following: number;
    posts: number;
}

//this component controls the navigation bar on the user profile page
const UserProfileNav: React.FC<UserProfileNavProps> = ({
    followers,
    following,
    posts,
}) => {

    return (
        <div style={{width: "100%"}} className="w-full flex flex-col">
            <div  
                className='md:w-[80%] w-full md:hidden flex py-2 px-3 border-neutral-500 
                border-t-[0.1px] flex-row justify-between '>
                    <p className='text-neutral-300 '>{followers || 0} Followers</p>
                    <p className='text-neutral-300 '>{following || 0} Following</p>
                    <p className='text-neutral-300 '>{posts || 0} Posts</p>
            </div>
            <div className="flex flex-row items-center w-full 
            justify-center py-2 gap-12 border-t-[0.1px] border-neutral-400">
                {
                    items.map((item) => (
                        <div key={item.name} className= {`flex flex-row 
                        items-center gap-2 py-2 cursor-pointer hover:text-neutral-200
                         ${item.current && 'text-white border-t-[1px]'}`}>
                            <item.Icon size={18} className="text-neutral-500" />
                            <span className="text-neutral-500 text-sm hidden md:block">
                                {item.name}
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default UserProfileNav;