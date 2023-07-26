"use client";
import getNotifications from "@/app/actions/getNotifications";
import NotificationItem from "@/app/components/items/NotificationItem";
import { useNotification } from "@/app/hooks/useNotification";
import MotionModal from "../MotionModal";


interface NotificationsProps {
    id: string;        
    senderId: string;
    receiverId: string;  
    postId: string;      
    type: string;        
    read: boolean;      
    createdAt: Date  
    commentBody: string;
}

const NotificationModal = () => {

    const { data: fetchedNotifications, mutate: mutateNotifications } = getNotifications()
    const notification = useNotification()

    const bodyContent = (
        <div className="flex flex-col gap-5 w-full items-center">
            <p className="text-neutral-300 text-2xl p-3 font-bold w-full mb-3">
                Notifications
            </p>
            {
                fetchedNotifications?.map((notification: NotificationsProps) => (
                    <NotificationItem 
                        key={notification.id}
                        senderId={notification.senderId} 
                        receiverId={notification.receiverId}
                        postId={notification.postId} 
                        type={notification.type}
                        read={notification.read} 
                        createdAt={notification.createdAt}
                        commentBody={notification.commentBody} 
                        id={notification.id}  
                        mutateNotifications={mutateNotifications}
                    />
                ))
            }
        </div>
    )

    return (
        <MotionModal bodyContent={bodyContent} isOpen={notification.isOpen} />
    )
}

export default NotificationModal;