"use client";
import getNotifications from '@/app/actions/getNotifications';
import { useNotification } from '@/app/hooks/useNotification'
import { motion } from 'framer-motion'
import NotificationItem from '../../items/NotificationItem';


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
    


// the modal to show notifications
const Notifications = () => {
    const notification = useNotification()
    const { data: fetchedNotifications, mutate: mutateNotifications } = getNotifications()
    
    console.log(fetchedNotifications);

    return (
        <motion.div
        initial={{ x: -1000 }} // Set the initial position of the div outside the screen on the left
        animate={{ x: notification.isOpen ? 0 : -1000 }} // Animate the div to its final position at 0 (the left end)
        transition={{ duration: 0.5 }} // Set the animation duration
        style={{
            width: '500px',
            height: '100vh',
            background: 'black',
            position: 'fixed',
            zIndex: '1000',
            marginLeft: "90px",
            overflowY: "scroll",
            borderLeft: "0.3px solid #333",
        }}
        >
            <div className="flex flex-col gap-5 w-full items-center">
                <p className="text-white text-2xl p-3 font-bold w-full mb-3">
                    Notifications
                </p>
                {
                    fetchedNotifications?.map((notification: NotificationsProps) => (
                        <NotificationItem key={notification.id}
                        senderId={notification.senderId} receiverId={notification.receiverId}
                        postId={notification.postId} type={notification.type}
                        read={notification.read} createdAt={notification.createdAt}
                        commentBody={notification.commentBody} id={notification.id}  
                        mutateNotifications={mutateNotifications}/>
                    ))
                }
            </div>
        </motion.div>
    )
}


export default Notifications;