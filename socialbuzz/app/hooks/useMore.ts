import { create } from "zustand";

//control the displaying of the create post modal
interface useMoreState {
    open: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useMore= create<useMoreState>((set) => ({
    open: false,
    onOpen: () => set({ open: true }),
    onClose: () => set({ open: false }),
}));


export default useMore;