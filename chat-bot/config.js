import { createChatBotMessage } from "react-chatbot-kit";
import DogPicture from "../components/DogPicture";

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm Nic's Personal Assistant`)],
  botName: "Nic's Personal Assistant",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
  widgets: [
    {
      widgetName: "dogPicture",
      widgetFunc: (props) => <DogPicture />,
    },
  ],
};
export default config;
