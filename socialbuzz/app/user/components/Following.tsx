

interface FollowingProps {
    followers: any[];
    following: any[];
    borderTop: string;
    borderBottom: string;
    posts?: any[];
}



const Following: React.FC<FollowingProps> = ({
    followers,
    following,
    borderTop,
    borderBottom,
    posts: posts,
}) => {
    return (
         <div style={{borderTop: borderTop, borderBottom: borderBottom, borderColor: "#fff"}} 
         className='md:w-full hidden md:flex flex-row justify-between'>
            <p className='text-white font-semibold'>{followers?.length || 0} 
                <span className="font-normal"> Followers</span>
            </p>
            <p className='text-white font-semibold'>{following?.length || 0} 
                <span className="font-normal"> Following</span>
            </p>
            <p className='text-white font-semibold'>{posts?.length || 0} 
                <span className="font-normal"> Posts</span>
            </p>
        </div>
    )
}

export default Following;   