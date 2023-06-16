"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import SuggestedUserItem from "./items/SuggestedUserItem";
import getAllUsers from "../actions/getAllUsers";

interface User {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
}

// SuggestedFollowers component to display suggested users to follow
const SuggestedFollowers = () => {

    const { data: suggestedUsers, mutate: mutateFetchedUsers } = getAllUsers();

    return (
        <div className="flex-col w-full flex gap-4">
        {
            suggestedUsers?.map((user: User) => (
                <SuggestedUserItem
                    key={user.id}
                    firstName={user.firstName}
                    lastName={user.lastName}
                    action="Follow" username={user?.username}
                    userId={user?.id}    
                    mutateFetchedUsers={mutateFetchedUsers} />
            ))
        }
        </div>
    )
}

export default SuggestedFollowers;