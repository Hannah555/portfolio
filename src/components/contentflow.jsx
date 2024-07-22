import React from "react";
import { ContentBoxBot, ContentBoxUser } from "./contentbox";

const ContentFlow = ({ userMessage }) => {
  return (
    <div className="w-full flex flex-col h-96 overflow-y-auto">
      <ContentBoxBot
        message={
          <div>
            Hi there! 👋 I'm Lee's bot assistant. <br />
            <br />I can help you with questions about Lee's job applications,
            skills, and experience. How can I assist you today?
          </div>
        }
      />
      {userMessage.map((message, index) => (
        <ContentBoxUser key={index} message={message.message} />
      ))}
    </div>
  );
};

export default ContentFlow;
