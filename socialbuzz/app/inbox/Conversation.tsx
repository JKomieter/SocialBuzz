import { useEffect, useState, useRef } from "react";
import Talk from "talkjs";

interface ConversationProps {
  currentUserId: string;
  currentUserUsername: string;
  currentUserEmail: string;
  otherUserEmail: string | null;
  otherUserId: string | null;
  otherUserName: string | null;
  otherUserPhotoUrl: string | null;
  currentUserPhotoUrl: string | null;
}

const Conversation: React.FC<ConversationProps> = ({
  currentUserId,
  currentUserUsername,
  currentUserEmail,
  currentUserPhotoUrl,
  otherUserEmail,
  otherUserId,
  otherUserName,
  otherUserPhotoUrl,
}) => {
  const chatboxEl = useRef<HTMLDivElement | null>(null);
  const [talkLoaded, setTalkLoaded] = useState(false);

  useEffect(() => {
    let session: Talk.Session | null = null;
    let chatbox: Talk.Chatbox | null = null;

    const setupTalkjs = async () => {
      if (!talkLoaded) return;

      if (otherUserEmail && otherUserId && otherUserName) {
        const me = new Talk.User({
          id: currentUserId,
          name: currentUserUsername,
          email: currentUserEmail,
        //   photoUrl: currentUserPhotoUrl
        });

        const other = new Talk.User({
          id: otherUserId,
          name: otherUserName,
          email: otherUserEmail,
        //   photoUrl: otherUserPhotoUrl
        });

        session = new Talk.Session({
          appId: process.env.NEXT_PUBLIC_TALKJS_APP_ID as string,
          me: me,
        });

        const conversationId = Talk.oneOnOneId(me, other);
        const conversation = session.getOrCreateConversation(conversationId);
        conversation.setParticipant(me);
        conversation.setParticipant(other);

        chatbox = session.createChatbox({ showChatHeader: true });
        chatbox.mount(chatboxEl.current);
        chatbox.select(conversation);
      }
    };

    Talk.ready.then(() => setTalkLoaded(true));

    setupTalkjs();

    return () => {
      if (chatbox) {
        chatbox.destroy();
      }

      if (session) {
        session.destroy();
      }
    };
  }, [currentUserId, otherUserEmail, otherUserId, otherUserName, talkLoaded, currentUserUsername, currentUserEmail]);

  return <div data-testid="chatbox"
    ref={chatboxEl} 
    className="w-full h-screen bg-black overflow-y-scroll flex justify-center items-center" />;
};

export default Conversation;
