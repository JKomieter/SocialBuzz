"use client";
import getNotifications from "@/app/actions/getNotifications";
import { useNotification } from "@/app/hooks/useNotification";
import { motion } from "framer-motion";

interface MotionModalProps {
  bodyContent: React.ReactNode;
  isOpen: boolean;
}

// the modal to show notifications and search panel
const MotionModal: React.FC<MotionModalProps> = ({ bodyContent, isOpen }) => {
  return (
    <motion.div
      initial={{ x: -1000 }} // Set the initial position of the div outside the screen on the left
      animate={{ x: isOpen ? 0 : -1000 }} // Animate the div to its final position at 0 (the left end)
      transition={{ duration: 0.5 }} // Set the animation duration
      style={{
        width: "500px",
        height: "100vh",
        background: "black",
        position: "fixed",
        zIndex: "1000",
        marginLeft: "140px",
        overflowY: "scroll",
        borderLeft: "0.3px solid #333",
      }}
      className="md:flex hidden"
    >
      {bodyContent}
    </motion.div>
  );
};

export default MotionModal;
