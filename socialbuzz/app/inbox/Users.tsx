import UserMessage from "./UserMessage";



interface UserProps {
    users: User[];
    setOtherEmail: React.Dispatch<React.SetStateAction<string | null>>;
    setOtherId: React.Dispatch<React.SetStateAction<string | null>>;
    setOtherName: React.Dispatch<React.SetStateAction<string | null>>;
    setOtherPhotoUrl: React.Dispatch<React.SetStateAction<string | null>>;
}

interface User {
    id: string;
    profileImage: string;
    username: string;
    email: string;
}


const User: React.FC<UserProps> = ({ 
    users,
    setOtherEmail,
    setOtherId,
    setOtherName,
    setOtherPhotoUrl
}) => {
    return (
        <div className="py-4">
        {
            !!users && users?.map((user) => (
                <UserMessage 
                    setOtherEmail={setOtherEmail}
                    setOtherId={setOtherId}
                    setOtherName={setOtherName}
                    setOtherPhotoUrl={setOtherPhotoUrl}
                    key={user?.id}
                    profileImage={user.profileImage}
                    username={user.username} 
                    id={user.id} 
                    email={user.email} />
            ))
        }
        </div>
    )
}


export default User;