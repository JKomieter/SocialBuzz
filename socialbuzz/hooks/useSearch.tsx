import { create } from "zustand";


// control the display of the search modal
interface searchState {
    isOpen: boolean;
    onClose: () => void;
    onOpen: () => void;
}


export const useSearch = create<searchState>((set) => ({
    isOpen: false,
    onClose: () => set({ isOpen: false }),
    onOpen: () => set({ isOpen: true }),
}));