import getUser from "../actions/getUser";

interface RelatedUsersProps {
    userId: string;
}


const RelatedUsers: React.FC<RelatedUsersProps> = ({
    userId
}) => {
    const { data: user } = getUser(userId);

    return (
        <p className="font-bold text-neutral-200">
            {user?.username}
        </p>
    )
};


export default RelatedUsers;