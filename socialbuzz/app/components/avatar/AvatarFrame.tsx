import Image from "next/image";

interface AvatarFrameProps {
    profileImage: string;
    size: string;
    handleOnClick: () => void;
}


const AvatarFrame: React.FC<AvatarFrameProps> = ({
    profileImage,
    size,
    handleOnClick
}) => {
    const BackGround = 'linear-gradient(to top right, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5, #4f5bd5, #4f5bd5)'


    return (
        <div className={`rounded-full overflow-hidden flex 
        justify-center items-center ${size}`} 
        style={{
            padding: "2px",
            background: BackGround,
        }} onClick={handleOnClick}>
            <Image src={profileImage || "/images/personplaceholder.png"} 
                alt="/images/personplaceholder.png" 
                width={90}
                className="rounded-full object-cover w-full h-full cursor-pointer"
                height={90} style={{objectFit: "cover", borderRadius: "50%"}} />
        </div>
    )
}

export default AvatarFrame;

