"use client";
import getNotifications from "../actions/getNotifications";
import NotificationItem from "../components/items/NotificationItem";

interface NotificationsProps {
  id: string;
  senderId: string;
  receiverId: string;
  postId: string;
  type: string;
  read: boolean;
  createdAt: Date;
  commentBody: string;
}

export default function NotiicationsPage() {
  const { data: fetchedNotifications, mutate: mutateNotifications } =
    getNotifications();

  return (
    <div className="flex flex-col gap-5 w-full items-center">
      <p className="text-neutral-300 text-2xl p-3 font-bold w-full mb-3">
        Notifications
      </p>
      {fetchedNotifications?.map((notification: NotificationsProps) => (
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
      ))}
    </div>
  );
}
