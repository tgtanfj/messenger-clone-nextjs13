import getConversation from "../actions/get-conversation";
import getUser from "../actions/get-user";
import Sidebar from "../components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";

const Conversationslayout = async ({ children }: { children: React.ReactNode }) => {
  const conversations = await getConversation()
  const users = await getUser()

  return (
    <Sidebar>
      <div className="h-full">
        <ConversationList
          users={users}
          initialItems={conversations}
        />
        {children}
      </div>
    </Sidebar>
  )
};

export default Conversationslayout;
