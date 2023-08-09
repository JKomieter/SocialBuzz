import create from "zustand";


interface useStoryState {
    open: boolean
    shouldOpen: (t: boolean) => void
    story: string
    setStory: (i: string) => void
}

const useStoryModal = create<useStoryState>((set) => ({
    open: false,
    shouldOpen: (t) => set({open: t}),
    story: "",
    setStory: (i) => set({story: i})
}))

export default useStoryModal;