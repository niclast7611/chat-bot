import Chatbot from "react-chatbot-kit";
import MessageParser from "@/chat-bot/MessageParser";
import ActionProvider from "@/chat-bot/ActionProvider";
import config from "@/chat-bot/config";
import { useState } from "react";
import { TbMessageCircle2 } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";

export default function Home() {
  const [showBot, setShowBot] = useState(false);

  return (
    <>
      <div className="flex justify-center pt-10 text-2xl font-bold">
        CHAT WITH A ROBOT TODAY!
      </div>
      {showBot && (
        <div className="fixed shadow-xl right-6 bottom-28">
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}

      {showBot && (
        <div className="fixed flex items-center justify-center w-16 h-16 text-4xl text-white bg-blue-500 rounded-full cursor-pointer right-28 bottom-6">
          <AiOutlineClose onClick={() => setShowBot(false)} />
        </div>
      )}
      <div className="fixed flex items-center justify-center w-16 h-16 text-4xl text-white bg-blue-500 rounded-full cursor-pointer right-6 bottom-6">
        <TbMessageCircle2 fill="white" onClick={() => setShowBot(true)} />
      </div>
    </>
  );
}
