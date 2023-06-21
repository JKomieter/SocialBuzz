import getUser from "@/app/actions/getUser";
import { useMemo } from "react";
import Image from "next/image";
import { formatDistanceToNowStrict } from "date-fns";

interface NotificationItemProps {
    id: string;
    senderId: string;
    receiverId: string;
    postId: string;
    type: string;
    read: boolean;
    createdAt: Date  
    commentBody: string;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
    id,
    senderId,
    receiverId,
    postId,
    type,
    read,
    createdAt,
    commentBody
}) => {
    const { data: sender, mutate: mutateSender } = getUser(senderId)

    const handleNotification = useMemo(() => {
        // control the notification message
        if (type === "liked") {
            return `${sender?.username} liked your post`
        }

        if (type === "comment") {
            return `commented on your post`
        }

        if (type === "follow") {
            return `followed you`
        }
    }, [sender?.username, type])

    const createdAtFormat = useMemo(() => {
        if (!createdAt) {
            return null;
        }

        return formatDistanceToNowStrict(new Date(createdAt))
    }, [createdAt]);

    return (
        <div className="w-full flex flex-row justify-between items-center">
            <div className="w-full flex flex-row gap-2 items-center">
                <span className="rounded-full h-11 w-11">
                    <Image src={
                    sender?.profileImage || "/images/personplaceholder.png"} 
                    alt="" height={100} width={100} style={{objectFit: "cover"}}/>\
                </span>
                <div>
                    <span className="font-semibold text-white">
                        {sender.username}
                    </span> 
                    <span className="text-white ">
                        {handleNotification}
                    </span> 
                    <span className="text-neutral-500">
                        {createdAtFormat}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default NotificationItem;