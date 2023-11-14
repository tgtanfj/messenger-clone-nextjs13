import getConversationById from "@/app/actions/get-conversation-by-id";
import EmptyState from "@/app/components/EmptyState";
import Header from "./components/Header";
import Body from "./components/Body";
import Form from "./components/Form";
import getMessages from "@/app/actions/get-messages";

interface IParams {
  conversationId: string;
}

const ConversatinoIdPage = async ({ params }: { params: IParams }) => {
  const conversation = await getConversationById(params.conversationId);
  const messages = await getMessages(params.conversationId)

  if (!conversation) {
    return (
      <div className="lg:pl-80 h-full">
        <div className="h-full flex flex-col">
          <EmptyState />
        </div>
      </div>
    );
  }

  return <div className="lg:pl-80 h-full">
    <div className="h-full flex flex-col">
      <Header conversation={conversation}/>
      <Body initialMessages={messages}/>
      <Form/>
    </div>
  </div>;
};

export default ConversatinoIdPage;
