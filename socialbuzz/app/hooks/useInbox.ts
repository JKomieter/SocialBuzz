import { create } from "zustand";


interface InboxState {
    isOpen: boolean;
    setOpen: (isOpen: boolean) => void;
}

// state management for displaying inboxUsers
const useInbox = create<InboxState>((set) => ({
    isOpen: false,
    setOpen: (isOpen) => set({ isOpen }),
}));

export default useInbox;