"use client";
import getNotifications from "@/actions/getNotifications";
import NotificationItem from "@/components/items/NotificationItem";
import { useNotification } from "@/hooks/useNotification";
import MotionModal from "../MotionModal";
import Notification from "@/components/layout/Notification";

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

const NotificationModal = () => {
  const notification = useNotification();

  const bodyContent = <Notification />;

  return <MotionModal bodyContent={bodyContent} isOpen={notification.isOpen} />;
};

export default NotificationModal;
