import { create } from "zustand";

//control the displaying of the create post modal
interface useCreateState {
    open: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useCreate = create<useCreateState>((set) => ({
    open: true,
    onOpen: () => set({ open: true }),
    onClose: () => set({ open: false }),
}));


export default useCreate;