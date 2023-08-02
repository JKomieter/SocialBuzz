import { create } from "zustand";
import { Comment } from "../reels/Reels";

interface ReelCommentState {
    x: number;
    y: number;
    isOpen: boolean;
    comments: Comment[];
    setPos: (x: number, y: number) => void;
    setComments: (comments: Comment[]) => void;
    setOpen: (isOpen: boolean) => void;
}

export const useReelComment = create<ReelCommentState>((set) => ({
    x: 0,
    y: 0,
    isOpen: false,
    comments: [],
    setPos: (x: number, y: number) => set({ x, y }),
    setComments: (comments: Comment[]) => set({ comments }),
    setOpen: (isOpen: boolean) => set({ isOpen }),
}));
