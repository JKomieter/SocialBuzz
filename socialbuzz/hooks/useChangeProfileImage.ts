import { create } from "zustand";


interface changeProfileImageState {
    open: boolean;
    onOpen: () => void;
    onClose: () => void;
    profileImage?: string;
    onChange: (image: string) => void;
}


const useChangeProfileImage = create<changeProfileImageState>((set) => ({
    profileImage: "",
    open: false,
    onOpen: () => set({ open: true }),
    onClose: () => set({ open: false }),
    onChange: (image) => set({ profileImage: image }),
}));


export default useChangeProfileImage;