import Button from "@/app/components/buttons/Button";
import { IoIosSettings } from "react-icons/io";
import { RiUserAddLine } from "react-icons/ri";


interface FollowStatProps {
    isCurrentUser: boolean;
    checkIfFollowing: boolean;
    handleFollow: () => void;
}


const FollowStat: React.FC<FollowStatProps> = ({
    isCurrentUser,
    checkIfFollowing,
    handleFollow
}) => {
    return (
        <>
            {
                isCurrentUser ? (
                    <div className='flex w-full flex-row md:flex-row gap-2'>
                        <button className='text-black rounded-md bg-neutral-300 px-3 py-1'>
                            Edit Profile 
                        </button>
                        <button className='text-black rounded-md bg-neutral-300 px-3 py-1'>
                            Ad Tools
                        </button>
                        <span className='hidden md:flex ml-1'><IoIosSettings size={34} /></span>
                    </div>
                ) : (
                    <div className='flex w-full flex-row md:flex-row gap-2'>
                        {
                            checkIfFollowing ? ( 
                                <button className='text-black rounded-md bg-neutral-300 px-3 py-1'>
                                    Following
                                </button>
                            ) : (
                                // <Button text='Follow' bgColor="#405DE6" 
                                //     textColor="#fff" padding="1px 7px" 
                                //     onClick={handleFollow} width="100%"
                                // />
                                <button className='text-white rounded-md bg-[#405DE6] px-3 py-1'
                                onClick={handleFollow} >
                                    Follow
                                </button>
                            )
                        }
                        <button className='text-black rounded-md bg-neutral-300 px-3 py-1'>
                            Message
                        </button>
                        <button className='text-black rounded-md bg-neutral-300 px-3 py-1'>
                            <RiUserAddLine size={23} color='#000' />
                        </button>
                    </div>
                )
            }
            
        </>
    )
}

export default FollowStat;

