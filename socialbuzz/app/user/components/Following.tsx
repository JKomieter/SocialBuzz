

interface FollowingProps {
    followers: any[];
    following: any[];
    borderTop: string;
    borderBottom: string;
}



const Following: React.FC<FollowingProps> = ({
    followers,
    following,
    borderTop,
    borderBottom
}) => {
    return (
         <div style={{borderTop: borderTop, borderBottom: borderBottom, borderColor: "#fff"}} 
         className='md:w-full hidden md:flex flex-row justify-between'>
            <p className='text-white font-semibold'>{followers?.length || 0} Followers</p>
            <p className='text-white font-semibold'>{following?.length || 0} Following</p>
            <p className='text-white font-semibold'>0 Posts</p>
        </div>
    )
}

export default Following;   