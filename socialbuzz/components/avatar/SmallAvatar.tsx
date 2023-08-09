import getUser from "@/actions/getUser";
import Image from "next/image";


interface SmallAvatarProps {
    userId: string;
    index: number;
}


const SmallAvatar: React.FC<SmallAvatarProps> = ({
    userId,
    index
}) => {
    const { data: friendData } = getUser(userId);

    return (
        <div className={`h-7 w-7 rounded-full overflow-hidden`}>
            <Image 
            src={friendData?.profileImage || "/images/personplaceholder.png"} 
            alt={"Image"} width={100} 
            height={100}
            style={{
                objectFit: "cover", 
                borderRadius: "50%", 
                width: "100%", 
                height: "100%"
            }} />
        </div>
    )
};


export default SmallAvatar;