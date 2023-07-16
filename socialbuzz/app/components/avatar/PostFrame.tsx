import { RiMoreFill } from 'react-icons/ri';
import AvatarFrame from '@/app/components/avatar/AvatarFrame';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import usePostInfo from '@/app/hooks/usePostInfo';




interface PostFrameProps {
    profileImage: string;
    username: string;
    display: string;
}

const PostFrame: React.FC<PostFrameProps> = ({
    profileImage,
    username,
    display
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
            <div className="flex-row flex items-center gap-3">
                <AvatarFrame 
                profileImage={profileImage || "/images/personplaceholder.png"} 
                size="w-10 h-10"
                handleOnClick={handleOnClick} />
                <p className="text-neutral-300 text-sm">{username}</p>
            </div>
            <RiMoreFill size={25} color="#fff" />
        </div>
    )
};

export default PostFrame;