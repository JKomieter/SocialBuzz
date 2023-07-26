import { useRouter } from "next/navigation";
import AvatarFrame from "../avatar/AvatarFrame";
import { User } from "../modals/MotionModals/notifications/SearchModal/SearchModal";



interface SearchListItemProps {
    result: User;
}

// component to display search result of a user
const SearchListItem: React.FC<SearchListItemProps> = ({
    result
}) => {
    const router = useRouter();

    return (
        <div className="flex flex-row gap-2 w-full items-center 
        cursor-pointer hover:bg-neutral-700 duration-500 py-2 px-2">
            <AvatarFrame 
                profileImage={result.profileImage}
                size="w-12 h-12"
                handleOnClick={() => router.push(`/user/${result.id}`)} 
                showBackground={false}            
            />
            <div className="flex flex-col ">
                <p className="text-neutral-300">
                    {result.username}
                </p>
                <p className="text-neutral-400 text-sm">
                    {result.firstName} {result.lastName}
                </p>
            </div>
        </div>
    )
};

export default SearchListItem;