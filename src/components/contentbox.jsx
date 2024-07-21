import React from "react";
import botIcon from '../images/bot.svg';

const ContentBoxBot = ({ message }) => {
  return (
    <div className="animate-slide-up m-5 mr-16 flex justify-start gap-5 items-end">
      <div className="relative rounded-full h-12 w-12 bg-gray-500 flex-shrink-0 flex justify-center items-center">
        <img src={botIcon} className="h-8 w-8 absolute" alt="bot icon"/>
      </div>
      <div className="rounded px-4 py-3 bg-gray-600">{message}</div>
    </div>
  );
};

const ContentBoxUser = ({ message }) => {
  return (
    <div className="m-5 flex justify-end">
      <div className="rounded px-4 py-3 bg-teal-600">{message}</div>
    </div>
  );
};

export { ContentBoxBot, ContentBoxUser };
