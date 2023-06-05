import Image from 'next/image';
import { IoIosSettings } from 'react-icons/io';
import Following from './Following';

interface UserHeroProps {
  userProfilePic: string;
  username: string;
  lastName: string;
  followers: any[];
  following: any[];
  bio: string;
}

const UserHero: React.FC<UserHeroProps> = ({
  userProfilePic,
  username,
  lastName,
  followers,
  following,
  bio
}) => {
  return (
    <div className="w-full md:w-[80%] flex flex-row gap-7 md:gap-[150px]">
        <div className='lg:h-[150px] lg:w-[150px] 
                md:h-[110px] md:w-[110px]
                h-[90px] w-[90px]'>
            <div className='lg:h-[140px] lg:w-[140px] 
                md:h-[100px] md:w-[100px]
                h-[80px] w-[80px]
            bg-neutral-400 rounded-full relative'/>
         </div>
         <div className='flex w-[150px] md:w-full flex-col gap-5'>
            <div className='flex md:flex-row items-center flex-col gap-3'>
                <span className='font-medium text-lg text-white'>
                    {username}
                </span>
                <div className='flex w-full flex-col md:flex-row gap-2'>
                    <button className='text-black rounded-md bg-neutral-300 px-3 py-1'>
                        Edit Profile
                    </button>
                    <button className='text-black rounded-md bg-neutral-300 px-3 py-1'>
                        Ad Tools
                    </button>
                </div>
                <span className='hidden md:flex'><IoIosSettings size={40}/></span>
            </div>
            <div className='hidden md:flex'>
                <Following followers={followers} following={following} borderTop="0" borderBottom='0' />
            </div>
            <p className='text-white text-sm font-normal'>
                {bio}An enthusiastic Full Stack developer who loves building cool stuff
            </p>
         </div>
    </div>
  );
};

export default UserHero;
