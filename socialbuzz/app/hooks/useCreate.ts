import { create } from "zustand";


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