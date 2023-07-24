import { IoIosSettings } from "react-icons/io";
import { RiUserAddLine } from "react-icons/ri";
import Button from "./Button";


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
                    <div className='flex w-full flex-row md:flex-row gap-2 flex-wrap'>
                        <Button text='Edit profile' />
                        <Button text='View Archive' />
                        <span><IoIosSettings size={34} color="white" /></span>
                        <button className='text-neutral-100 font-semibold 
                        text-sm flex-1 md:flex-initial rounded-lg bg-neutral-700 px-3 py-1'>
                            Ad tools
                        </button>
                    </div>
                ) : (
                    <div className='flex w-full flex-row md:flex-row gap-2 flex-wrap'>
                        {
                            checkIfFollowing ? ( 
                                <Button text='Following' />
                            ) : (
                                // <Button text='Follow' bgColor="#405DE6" 
                                //     textColor="#fff" padding="1px 7px" 
                                //     onClick={handleFollow} width="100%"
                                // />
                                <button onClick={handleFollow}
                                className='text-neutral-100 font-semibold text-sm rounded-lg bg-blue-700 px-3 py-1'>
                                    Follow
                                </button>
                            )
                        }
                        <Button text='Message' />
                        <button className='text-black rounded-lg bg-neutral-300 px-3 py-1'>
                            <RiUserAddLine size={23} color='#000' />
                        </button>
                        <button className='text-neutral-100 font-semibold 
                        text-sm flex-1 md:flex-initial rounded-lg bg-neutral-700 px-3 py-1'>
                            Ad tools
                        </button>
                    </div>
                )
            }
            
        </>
    )
}


export default FollowStat;

