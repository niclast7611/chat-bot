import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import MessageParser from "@/chat-bot/MessageParser";
import ActionProvider from "@/chat-bot/ActionProvider";
import config from "@/chat-bot/config";

export default function Home() {
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}
