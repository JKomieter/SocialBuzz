import { RiMoreFill } from 'react-icons/ri';
import AvatarFrame from '@/app/components/avatar/AvatarFrame';
import { useCallback, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import usePostInfo from '@/app/hooks/usePostInfo';
import { BsDot } from 'react-icons/bs';
import isFriend from '@/app/hooks/isFriend';


interface PostFrameProps {
    profileImage: string;
    username: string;
    display: string;
    userId: string;
}

const PostFrame: React.FC<PostFrameProps> = ({
    profileImage,
    username,
    display,
    userId
}) => {
    const router = useRouter()
    const { setIsOpen } = usePostInfo();

    const handleOnClick = useCallback(() => {
        // take the user to the user profile
        setIsOpen(false);
        router.push("")
    }, [router, setIsOpen]);


    return (
        <div className={`flex-row justify-between ${display}
        items-center w-full px-3 py-2 border-b-[0.3px] border-neutral-400`}>
            <div className="flex-row flex items-center gap-1">
                <AvatarFrame 
                showBackground={true}
                profileImage={profileImage || "/images/personplaceholder.png"} 
                size="w-10 h-10"
                handleOnClick={handleOnClick} />
                <p className="text-neutral-300 text-sm">{username}</p>
                <BsDot size={25} color="#fff" />
                {
                    isFriend(userId) && (
                        <p className='font-semibold ml-0.5 text-blue-700 text-sm cursor-pointer'>
                            Follow
                        </p>
                    )
                }
            </div>
            <RiMoreFill size={25} color="#fff" />
        </div>
    )
};

export default PostFrame;