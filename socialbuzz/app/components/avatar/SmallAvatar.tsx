import getUser from "@/app/actions/getUser";
import Image from "next/image";


interface SmallAvatarProps {
    friend: string;
}


const SmallAvatar: React.FC<SmallAvatarProps> = ({
    friend
}) => {
    const { data: friendData } = getUser(friend);

    return (
        <div className="h-7 w-7 rounded-full">
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