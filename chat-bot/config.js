import { createChatBotMessage } from "react-chatbot-kit";
import DogPicture from "../components/DogPicture";

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm Nic's Personal Assistant`)],
  botName: "Nic's Personal Assistant",
  customStyles: {},
  widgets: [
    {
      widgetName: "dogPicture",
      widgetFunc: (props) => <DogPicture />,
    },
  ],
};
export default config;
