import React from 'react';
import { AiOutlineHeart, AiOutlineMessage } from 'react-icons/ai';
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
            <Icon size={20} color='white'/>
            <span className="text-sm font-semibold
            text-neutral-200">
                {text}
            </span>
        </div>
    )

    return (
        <div className="absolute">
            <div className="flex flex-row
            justify-center items-center gap-2">
                <Icons Icon={AiOutlineHeart}
                text={likeIds?.length || 0} />
                <Icons Icon={AiOutlineMessage} 
                text={comments?.length || 0} />
            </div>
        </div>
    )
};


export default CenterIcons;