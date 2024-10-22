import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import Image from "next/image";


interface SuggestedUserItemProps {
    firstName?: string;
    lastName?: string;
    action: string;
    onClick?: () => void;
    username: string;
    userId?: string;
    mutateFetchedUsers?: any;
    profileImage?: string;
}



const SuggestedUserItem: React.FC<SuggestedUserItemProps> = ({
    firstName,
    lastName,
    action,
    username,
    userId,
    mutateFetchedUsers,
    profileImage,
}) => {
    const router = useRouter();

    const goToUserProfile = useCallback((userId: string) => {
        //redirect to user profile
        try {
            router.push(`/user/${userId}`);
        } catch(error) {
            console.log(error);
            router.push(`/`);
        }

    }, [router]);

    const handleFollow = useCallback(async () => {
        // handle follow
        try {
            if (action === "Switch") {
                // will switch user account
                return;
            };

            await axios.post('/api/follow', {
                userId
            })

            mutateFetchedUsers();
        } catch (error) {
            console.log(error)
        }
    }, [action, mutateFetchedUsers, userId]);

    return (
        <div className="flex flex-col w-full items-center">
            <div className="flex flex-row w-full items-center justify-between"> 
                <div className="flex flex-row items-center gap-2">
                    <Image width={100} height={100} src={profileImage as string ||
                    '/images/personplaceholder.png'}
                    alt="" className="h-12 w-12 rounded-full" />
                    <div onClick={() => goToUserProfile(userId as string)} className="flex flex-col">
                        <p className="font-semibold text-sm cursor-pointer">{firstName}</p>
                        <p className="text-sm text-gray-500 cursor-pointer">{lastName}</p>
                    </div>
                </div>
                <span className="text-blue-700 font-normal text-sm cursor-pointer"
                    onClick={handleFollow}>
                    {action}
                </span>
            </div>
        </div>
    )
}

export default SuggestedUserItem;