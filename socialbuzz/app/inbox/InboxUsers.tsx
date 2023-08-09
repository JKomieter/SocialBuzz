import useCurrentUserFriends from "../../actions/useCurrentUserFriends";
import LoadUserMessage from "../../components/loading/LoadUserMessage";
import useInbox from "../../hooks/useInbox";
import Nav from "./Nav";
import Users from "./Users";


interface InboxUsersProps {
    setOtherEmail: React.Dispatch<React.SetStateAction<string | null>>;
    setOtherId: React.Dispatch<React.SetStateAction<string | null>>;
    setOtherName: React.Dispatch<React.SetStateAction<string | null>>;
    setOtherPhotoUrl: React.Dispatch<React.SetStateAction<string | null>>;
    username: string;
}

// component that displays all users that the current user can message
const InboxUsers: React.FC<InboxUsersProps> = ({
    setOtherEmail,
    setOtherId,
    setOtherName,
    setOtherPhotoUrl,
    username
}) => {
    const { data: users , isLoading, mutate: mutateUsers } = useCurrentUserFriends();
    const { isOpen } = useInbox()

    return (
        <div className={`h-screen bg-black md:min-w-[300px] bg-opacity-90
        border-r-neutral-600 border-l-neutral-600 ${isOpen ? "fixed" : "hidden fixed md:flex"}  duration-75`} 
        style={{borderRightWidth: "0.2px", borderLeftWidth: "0.2px"}}>
            <div className="overflow-y-scroll px-2 py-3 flex flex-col gap-4">
                <div className="hidden md:flex w-full border-neutral-600" style={{borderBottomWidth: "0.2px"}}>
                    <Nav username={username} />
                </div>
                {
                    isLoading ? 
                    <LoadUserMessage /> 
                    :
                    <Users 
                    users={users}
                    setOtherEmail={setOtherEmail}
                    setOtherId={setOtherId}
                    setOtherName={setOtherName}
                    setOtherPhotoUrl={setOtherPhotoUrl}
                     />
                }
            </div>
        </div>
    )
}

export default InboxUsers;