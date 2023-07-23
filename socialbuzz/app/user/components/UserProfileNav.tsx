import { LuGrid } from "react-icons/lu";
import { BiMoviePlay, BiUserPin } from "react-icons/bi";
import { HiOutlineBookmark } from "react-icons/hi";

const items = [
    {
        name: 'POSTS',
        href: '/user/[username]/posts',
        current: true,
        Icon: LuGrid,
    },
    {
        name: 'REELS',
        href: '/user/[username]/reels',
        current: false,
        Icon: BiMoviePlay,
    },
    {
        name: 'SAVED',
        href: '/user/[username]/saved',
        current: false,
        Icon: HiOutlineBookmark
    },
    {
        name: 'TAGGED',
        href: '/user/[username]/tagged',
        current: false,
        Icon: BiUserPin
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
        <div style={{width: "100%"}} className="w-full flex flex-col gap-2">
            <div  
                className='md:w-[80%] w-full md:hidden flex py-2 px-10 border-neutral-500 
                flex-row justify-between ' style={{borderBottomWidth: "0.3px", borderTopWidth: "0.2px"}}>
                    <span className='flex flex-col items-center justify-center'>
                        <p className="font-bold text-neutral-200">{followers || 0}</p> 
                        <p className="text-sm text-neutral-500">followers</p>
                    </span>
                    <span className='flex flex-col items-center justify-center'>
                        <p className="text-sm font-bold text-neutral-200">{following || 0}</p> 
                        <p className="text-sm text-neutral-500">following</p>
                    </span>
                    <span className='flex flex-col items-center justify-center'>
                        <p className="text-sm font-bold text-neutral-200">{posts || 0}</p> 
                        <p className="text-sm text-neutral-500">posts</p>
                    </span>
            </div>
            <div className="flex flex-row items-center w-full 
            justify-center py-2 gap-12  border-neutral-400">
                {
                    items.map((item) => (
                        <div key={item.name} className= {`flex flex-row 
                        items-center gap-2 py-2 cursor-pointer hover:text-neutral-200
                         ${item.current && 'text-white md:border-t-[1px]'}`}>
                            <item.Icon size={23} className={`text-neutral-500 
                            font-bold ${item.current && 'text-blue-600'}`} />
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