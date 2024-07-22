import React from "react";
import Button from "./button";
import InputBox from "./input";
import sendIcon from "../images/send.svg";
import ContentFlow from "./contentflow";
import { InputProvider } from "../contexts/inputcontext";

const Chatbot = () => {
  const messages = [{ message: "Hi there!" }];

  const handleSendRequest = (message) => {
    console.log(message);
    // message.push({message: message})
  };

  return (
    <div className="animate-slide-up outline outline-1 outline-slate-200 rounded w-full min-h-7 p-2">
      <div>
        <ContentFlow userMessage={messages} />
      </div>
      <InputProvider>
        <div className="flex gap-2">
          <InputBox className="flex-1" />
          <Button
            label={
              <img
                src={sendIcon}
                className="w-7 h-7 overflow-hidden"
                alt="icon"
              />
            }
            onClick={(e) => handleSendRequest(e)}
            className="flex-none"
          />
        </div>
      </InputProvider>
    </div>
  );
};

export default Chatbot;
