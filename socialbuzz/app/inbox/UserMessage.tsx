import { useCallback } from "react";
import AvatarFrame from "../../components/avatar/AvatarFrame";

interface UserMessageProps {
    id: string;
    profileImage: string;
    username: string;
    email: string;
    setOtherEmail: React.Dispatch<React.SetStateAction<string | null>>;
    setOtherId: React.Dispatch<React.SetStateAction<string | null>>;
    setOtherName: React.Dispatch<React.SetStateAction<string | null>>;
    setOtherPhotoUrl: React.Dispatch<React.SetStateAction<string | null>>;
}

// component that displays user to message
const UserMessage: React.FC<UserMessageProps> = ({ 
    id, 
    profileImage, 
    username, 
    email,
    setOtherEmail,
    setOtherId,
    setOtherName,
    setOtherPhotoUrl 
}) => {

    const handleClick = useCallback(() => {
        // open up the chat box
        setOtherId(id);
        setOtherName(username);
        setOtherEmail(email);
        setOtherPhotoUrl(profileImage);
    }, [email, id, profileImage, setOtherEmail, setOtherId, setOtherName, setOtherPhotoUrl, username])

    return (
        <div className="flex flex-row items-center gap-3 
        cursor-pointer hover:bg-neutral-700 p-2 rounded-lg
        duration-500 hover:scale-105"
        onClick={handleClick} data-testid="div">
            <AvatarFrame
                showBackground={false}
                size="w-14 h-14"
                profileImage={profileImage} handleOnClick={function (): void {
                    throw new Error("Function not implemented.");
                } }
                 />
            <p className="font-semibold text-sm">
                {username}
            </p>
        </div>
    )
}

export default UserMessage;