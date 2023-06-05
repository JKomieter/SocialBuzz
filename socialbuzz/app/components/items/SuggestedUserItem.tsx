import { useRouter } from "next/navigation";
import { useCallback } from "react";


interface SuggestedUserItemProps {
    firstName?: string;
    lastName?: string;
    action: string;
    onClick?: () => void;
    username: string;
}



const SuggestedUserItem: React.FC<SuggestedUserItemProps> = ({
    firstName,
    lastName,
    action,
    username,
}) => {
    const router = useRouter();

    const goToUserProfile = useCallback((username: string) => {
        //redirect to user profile
        try {
            router.push(`/user/${username}`);
        } catch(error) {
            console.log(error);
            router.push(`/`);
        }

    }, [router]);

    return (
        <div className="flex flex-col px-5 w-full items-center">
            <div className="flex flex-row w-full items-center justify-between"> 
                <div className="flex flex-row items-center gap-2">
                    <div className="h-12 w-12 rounded-full bg-slate-500"></div>
                    <div onClick={() => goToUserProfile(username)} className="flex flex-col">
                        <p className="font-semibold text-sm cursor-pointer">{firstName}</p>
                        <p className="text-sm text-gray-500 cursor-pointer">{lastName}</p>
                    </div>
                </div>
                <span className="text-blue-700 font-normal text-sm cursor-pointer">{action}</span>
            </div>
        </div>
    )
}

export default SuggestedUserItem;