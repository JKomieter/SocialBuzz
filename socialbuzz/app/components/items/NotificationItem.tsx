import getUser from "@/app/actions/getUser";
import { useCallback, useMemo } from "react";
import Image from "next/image";
import { formatDistanceToNowStrict } from "date-fns";
import { useRouter } from "next/navigation";
import axios from "axios";

interface NotificationItemProps {
    id: string;
    senderId: string;
    receiverId: string;
    postId: string;
    type: string;
    read: boolean;
    createdAt: Date  
    commentBody: string;
    mutateNotifications: any;
}

const NotificationItem: React.FC<NotificationItemProps> = ({
    id,
    senderId,
    receiverId,
    postId,
    type,
    read,
    createdAt,
    commentBody,
    mutateNotifications
}) => {
    const { data: sender, mutate: mutateSender } = getUser(senderId)
    const router = useRouter()
    console.log(sender)

    const handleNotification = useMemo(() => {
        // control the notification message
        if (type === "liked") {
            return ` liked your post`
        }

        if (type === "commented") {
            return ` commented on your post`
        }

        if (type === "followed") {
            return ` followed you`
        }
        
    }, [type])

    const createdAtFormat = useMemo(() => {
        if (!createdAt) {
            return null;
        }

        return formatDistanceToNowStrict(new Date(createdAt))
    }, [createdAt]);

    const handleClick = useCallback(async () => {
        // handle when user clicks on notification
        if (type === "followed") {
            router.push(`/user/${senderId}`)
        }

        if (type === "commented" || type === "liked") {
            router.push(`/post/${postId}`)
        }

        await axios.post("/api/notification", {id})

        mutateNotifications();
    }, [id, mutateNotifications, postId, router, senderId, type])

    return (
        <div className="w-full flex flex-row justify-between items-center 
        p-3 hover:bg-slate-800 cursor-pointer" onClick={handleClick}>
            <div className="w-full flex flex-row gap-2 items-center">
                <span className="rounded-full h-10 w-10 overflow-hidden">
                    <Image src={
                    sender?.profileImage || "/images/personplaceholder.png"} 
                    alt="" height={100} width={100} style={{objectFit: "cover"}}/>
                </span>
                <div className="text-sm">
                    <span className="font-semibold text-white mr-1">
                        {sender?.username}
                    </span> 
                    <span className="text-white ">
                        {handleNotification} . 
                    </span> 
                    <span className="text-neutral-500 text-xs">
                        {" " + createdAtFormat}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default NotificationItem;