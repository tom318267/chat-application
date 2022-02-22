import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";

const App = () => {
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="a315e1d7-5327-4bb2-b50c-51f1d32b5460"
        userName="JSM"
        userSecret="123123"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </div>
  );
};

export default App;
