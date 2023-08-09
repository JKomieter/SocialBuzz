import { create } from "zustand";


// control the display of the notification modal
interface notificationState {
    isOpen: boolean;
    onClose: () => void;
    onOpen: () => void;
}


export const useNotification = create<notificationState>((set) => ({
    isOpen: false,
    onClose: () => set({ isOpen: false }),
    onOpen: () => set({ isOpen: true }),
}));