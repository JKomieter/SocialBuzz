import { useEffect, useState } from "react";
import axios from "axios";
// import { useSession } from "next-auth/react";
import SuggestedFollowers from "./SuggestedFollowers";
import SuggestedUserItem from "./items/SuggestedUserItem";
import useCurrentUser from "../actions/useCurrentUser";

interface User {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
}

const Suggestions = () => {

  const { data: currentUser } = useCurrentUser();

  return (
    <div className="flex flex-col w-full items-center px-8 py-8 gap-4">
      {
        currentUser && (
            <SuggestedUserItem
            key={currentUser?.id}
            firstName={currentUser?.firstName}
            lastName={currentUser?.lastName}
            action="Switch" username={currentUser?.username} 
            userId={currentUser?.id} />
        )
      }
      <SuggestedFollowers/>
    </div>
  );
};

export default Suggestions;
