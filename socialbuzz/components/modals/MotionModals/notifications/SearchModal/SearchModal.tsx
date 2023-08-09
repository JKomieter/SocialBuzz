"use client";
import { useSearch } from "../../../../../hooks/useSearch"
import MotionModal from "../MotionModal"
import Search from "@/helpers/Search";


export interface User {
    id: string;
    username: string;
    profileImage: string;
    followersId: string[];
    firstName: string;
    lastName: string;
}

// component to search for users
const SearchModal = () => {
    const { isOpen } = useSearch();

    const bodyContent = <Search />;

    return (
        <MotionModal bodyContent={bodyContent} isOpen={isOpen} />
    )
}


export default SearchModal;