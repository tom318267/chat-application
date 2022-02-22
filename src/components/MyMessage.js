import React from "react";

const MyMessage = ({ message }) => {
  if (message?.attachments?.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image float-right"
      />
    );
  }
  return (
    <div className="message float-right mr-[18px] text-white bg-purple">
      {message.text}
    </div>
  );
};

export default MyMessage;
