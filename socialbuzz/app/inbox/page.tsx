"use client";
import { useState } from "react";
import useCurrentUser from "../../actions/useCurrentUser";
import Conversation from "./Conversation";
import InboxUsers from "./InboxUsers";


const Inbox = () => {

    const { data: currentUser } = useCurrentUser();
    const [ otherEmail, setOtherEmail ] = useState<string | null>("one@gmail.com");
    const [ otherId, setOtherId ] = useState<string | null>("1");
    const [ otherName, setOtherName ] = useState<string | null>("one");
    const [ otherPhotoUrl, setOtherPhotoUrl ] = useState<string | null>("https://images.app.goo.gl/JSiE2YMFLBE8yJEL7")

    return (
        <div className="mt-[30px] md:mt-0 w-full h-full flex flex-row">
            <InboxUsers
            setOtherEmail={setOtherEmail}
            setOtherId={setOtherId}
            setOtherName={setOtherName}
            setOtherPhotoUrl={setOtherPhotoUrl}
            username={currentUser?.username}
             />
            {
                <Conversation
                otherUserEmail={otherEmail}
                otherUserId={otherId}
                otherUserName={otherName}
                otherUserPhotoUrl={otherPhotoUrl}
                currentUserId={currentUser?.id}
                currentUserEmail={currentUser?.username}
                currentUserUsername={currentUser?.email}
                currentUserPhotoUrl={currentUser?.profileImage} />
            }
        </div>
    )
}

export default Inbox;