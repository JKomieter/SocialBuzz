"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import SuggestedUserItem from "./items/SuggestedUserItem";

interface User {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
}

// SuggestedFollowers component to display suggested users to follow
const SuggestedFollowers = () => {
    const session = useSession();
    const [suggestedUsers, setSuggestedUsers] = useState<User[] | []>([]);

    useEffect(() => {
        //if user is not logged in, return
        if (!session?.data?.user) return;

        const fetchSuggestedUsers = async () => {
            try {
                const response = await axios.get("/api/users");
                const users = response.data;
                setSuggestedUsers(users);
            } catch (error) {
                console.log(error);
            }
        };

        fetchSuggestedUsers();
    }, [session?.data?.user]);

    return (
        <div className="flex-col w-full flex gap-4">
        {
            suggestedUsers?.map((user) => (
                <SuggestedUserItem
                    key={user.id}
                    firstName={user.firstName}
                    lastName={user.lastName}
                    action="Follow" username={user?.username}     />
            ))
        }
        </div>
    )
}

export default SuggestedFollowers;