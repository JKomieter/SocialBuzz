"use client";
import { useParams, useRouter } from 'next/navigation';
import Modal from '@/components/modals/PopUpModals/Modal';
import getUser from '@/actions/getUser';
import useStories from '@/actions/useStories';
import { useState } from 'react';
import StoryView from './StoryView';

// page to display stories of users
const StoryPage = () => {
    const { userId  } = useParams();
    const router = useRouter();
    // const { data: fetchedUser, mutate: mutateFetchedUser } = getUser(userId);
    const { data: fetchedUsers, mutate: mutateFetchedUsers } = useStories();
    // const [ currentStoryIndex, setCurrentStoryIndex ] = useState<Number>(0);
    
    const bodyContent = (
        <StoryView users={fetchedUsers} 
        mutateFetchedUsers={mutateFetchedUsers}
        userId={userId} />
    )


    return (
         <Modal bodyContent={bodyContent} 
         onClose={() => router.push("/")}/>
    )
}

export interface User {
    id: string;
    username: string;
    stories: Story[];
    profileImage: string;
}

export interface Story {
    id: string;
    createdAt: string;
    image?: string;
    video?: string;
    caption?: string;
    music?: string;
    seenIds?: string[];
}

export default StoryPage;