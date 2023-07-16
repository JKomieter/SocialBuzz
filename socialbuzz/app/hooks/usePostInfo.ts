import { create } from "zustand";

interface PostInfoState {
    postId: string;
    setPostId: (postId: string) => void;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const usePostInfo = create<PostInfoState>((set) => ({
    postId: "",
    setPostId: (postId: string) => set({ postId }),
    isOpen: false,
    setIsOpen: (isOpen: boolean) => set({ isOpen }),
}));

export default usePostInfo;