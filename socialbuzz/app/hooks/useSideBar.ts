import { create } from 'zustand';

type SideBarState = {
    left: boolean;
    isLeft: () => void;
    isBottom: () => void;
};

export const useSideBarStore = create<SideBarState>((set) => ({
    left: true,
    isLeft: () => set({ left: true }),
    isBottom: () => set({ left: false }),
}));