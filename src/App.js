import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import "./App.css";
import LoginForm from "./components/LoginForm";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="a315e1d7-5327-4bb2-b50c-51f1d32b5460"
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </div>
  );
};

export default App;
