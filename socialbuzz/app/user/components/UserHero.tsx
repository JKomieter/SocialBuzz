import Image from 'next/image';
import Following from './Following';
import { useCallback, useMemo } from 'react';
import useCurrentUser from '@/app/actions/useCurrentUser';
import FollowStat from './FollowStat';
import axios from 'axios';
import useChangeProfileImage from '@/app/hooks/useChangeProfileImage';

interface UserHeroProps {
  userProfileImage: string;
  username: string;
  lastName: string;
  followers: any[];
  following: any[];
  bio: string;
  posts?: any[];
  mutateFetchedUser: any;
  userId: string;
}

const UserHero: React.FC<UserHeroProps> = ({
    userProfileImage,
    username,
    lastName,
    followers,
    following,
    bio,
    posts,
    mutateFetchedUser,
    userId
}) => {
    const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser();
    const userChangeProfile = useChangeProfileImage();
    
    const isCurrentUser = useMemo(() => { 
        // check if the current user is the same as the user 
        // retrun true if so, false if not
        const isUser = currentUser?.username === username;
        return isUser;
    }, [currentUser?.username, username])

    const checkIfFollowing = useMemo(() => {
        // check if the current user is following the user
        // return true if so, false if not
        const isFollowing = followers?.some(userId =>  userId === currentUser?.id);
        return isFollowing;
    }, [currentUser?.id, followers])

    const handleFollow = useCallback(async () => {
        // handle follow
        try {
            await axios.post('/api/follow', {
                userId
            })
            mutateCurrentUser();
            mutateFetchedUser();
        } catch (error) {
            console.log(error)
        }
    }, [mutateCurrentUser, mutateFetchedUser, userId]);

    const handleProfileChange = useCallback(() => {
        // handle profile change
        if (currentUser?.username === username) {
            userChangeProfile.onOpen();
        } else {
            // open the profile pic to view
            return;
        }
    }, [currentUser?.username, userChangeProfile, 
        username]);

    return (
        <div className="w-full md:w-[80%] flex flex-row gap-3">
            <div className="basis-1/3">
                <Image src={
                    userChangeProfile.profileImage ? userChangeProfile.profileImage : 
                    userProfileImage ? userProfileImage : 
                    '/images/personplaceholder.png'
                } alt='' style={{borderRadius: '50%'}}
                    width={200} height={200} className='lg:h-[150px] lg:w-[150px] 
                    md:h-[120px] md:w-[120px]
                    h-[90px] w-[90px]
                    rounded-full relative'
                onClick={handleProfileChange} />
            </div>
            <div className='flex w-full flex-col gap-5'>
                <div className='flex md:flex-row items-center flex-col gap-3'>
                    <span className='font-medium text-left lowercase text-lg text-white'>
                        {username}
                    </span>
                    <FollowStat isCurrentUser={isCurrentUser}  
                        checkIfFollowing={checkIfFollowing} 
                        handleFollow={handleFollow} />
                </div>
                <div className='hidden md:flex'>
                    <Following followers={followers} following={following} posts={posts}
                    borderTop="0" borderBottom='0' />
                </div>
                <p className='text-white text-sm font-normal'>
                    {bio || "An enthusiastic Full Stack developer who loves building cool stuff"}
                </p>
            </div>
        </div>
  );
};




export default UserHero;
