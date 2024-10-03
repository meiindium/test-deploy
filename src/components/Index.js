import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import BotMessage from "./BotMessage";
import UserMessage from "./UserMessage";
import Messages from "./Messages";
// import Header from "./Header";
import Input from "./Input";

import API from "./MiniBotPrompt";

import "./styles.css";
import Header from "./Header";

// function MiniBotPrompt() {
  function MiniBotPrompt({ onCall }) {  // Added onCall prop

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function loadWelcomeMessage() {
      setMessages([
        <BotMessage
          key="0"
          fetchMessage={async () => await API.GetChatbotResponse("hi")}
        />,
      ]);
    }
    loadWelcomeMessage();
  }, []);

  const send = async (text) => {
    const newMessages = messages.concat(
      <UserMessage key={messages.length + 1} text={text} />,
      <BotMessage
        key={messages.length + 2}
        fetchMessage={async () => await API.GetChatbotResponse(text)}
      />
    );

   // Check if the text is "call", then trigger the onCall event
   if (text.toLowerCase() === "call") {
    onCall(true); // Show the call card
  }

    setMessages(newMessages);
  };

  return (
    <div className="chatbot">
      <Header />
      <Messages messages={messages} />
      <Input onSend={send} />
    </div>
  );
}

const rootElement = document.getElementById("root");
// ReactDOM.render(<MiniBotPrompt />, rootElement);
export default MiniBotPrompt;
