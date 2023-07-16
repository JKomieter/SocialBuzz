import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import AvatarFrame from "../avatar/AvatarFrame";

interface CarouselProps {
    id: string;
    mutateStories: () => void;
    username: string;
    profileImage: string;
}


const Carousel: React.FC<CarouselProps> = ({
    id,
    mutateStories,
    username,
    profileImage,
}) => {
    const router = useRouter()
    

    const showStoryView = useCallback(() => {
        router.push(`/stories/${username}/${id}`)
    }, [id, router, username])


    return (
        <div className="flex flex-col items-center justify-center gap-2">
            <AvatarFrame 
            profileImage={profileImage} 
            handleOnClick={showStoryView}
            size="w-14 h-14 md:w-16 md:mr-0 mr-4
            md:h-16" />
            <p className=" text-sm text-neutral-300">{username}</p>
        </div>
    )
}

export const BackGround = 'linear-gradient(to top right, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5, #4f5bd5, #4f5bd5)'

export default Carousel;