import { useEffect, useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";
import SuggestedFollowers from "./SuggestedFollowers";
import SuggestedUserItem from "./items/SuggestedUserItem";

interface User {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
}

const Suggestions = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const session = useSession();

  useEffect(() => {
    const userData = session?.data?.user;

    const fetchUserData = async () => {
      try {
        const response = await axios.post("/api/user", {
            email: userData?.email
        });
        const user = response.data;
        console.log(user);
        setCurrentUser(user);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, [session?.data?.user]);

  return (
    <div className="flex flex-col w-full items-center px-8 py-8 gap-4">
      {
        currentUser && (
            <SuggestedUserItem
            key={currentUser?.id}
            firstName={currentUser?.firstName}
            lastName={currentUser?.lastName}
            action="Switch" username={currentUser?.username} />
        )
      }
      <SuggestedFollowers/>
    </div>
  );
};

export default Suggestions;
