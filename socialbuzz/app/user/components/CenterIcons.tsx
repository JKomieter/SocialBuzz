import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { FaComment } from 'react-icons/fa';
import { IconType } from 'react-icons';



interface CenterIconsProps {
    likeIds: string[];
    comments: string[];
}

// component that displays when the user hovers over the post
const CenterIcons: React.FC<CenterIconsProps> = ({
    likeIds,
    comments
}) => {

    const Icons = ({ 
        Icon,
        text
    }: { 
        Icon: IconType;
        text: number;
    }) => (
        <div className="flex flex-row justify-center 
        items-center gap-1">
            <Icon size={27} color='white'/>
            <span className="text-xl font-bold
            text-neutral-200">
                {text}
            </span>
        </div>
    )

    return (
        <div className="absolute">
            <div className="flex flex-row
            justify-center items-center gap-4">
                <Icons Icon={AiFillHeart}
                text={likeIds?.length || 0} />
                <Icons Icon={FaComment} 
                text={comments?.length || 0} />
            </div>
        </div>
    )
};


export default CenterIcons;