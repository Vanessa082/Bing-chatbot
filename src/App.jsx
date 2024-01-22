import { useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import "./App.css";

function App() {
  // State to store chat messages
  const [chatMessages, setChatMessages] = useState([
    {
      message: "Hello, I am BingChat!",
      sender: "BingChat",
    },
  ]);

  const handleUserMessage = async (userMessage) => {
    // Create a new user message object
    const newUserMessage = {
      message: userMessage,
      sender: "user",
      direction: "outgoing",
    };
   
    // Update chat messages state with the new user message
    const updatedChatMessages = [...chatMessages, newUserMessage];
    setChatMessages(updatedChatMessages);
   };

  return (
    <>
      {/* A container for the chat window */}
      <div style={{ position: "relative", height: "100vh", width: "700px" }}>
        {/* All components are wrapped in the MainContainer */}
        <MainContainer>
          {/* All chat logic will be contained in the ChatContainer */}
          <ChatContainer>
            {/* Shows all our messages */}
            <MessageList>
              {/* Map through chat messages and render each message */}
              {chatMessages.map((message, i) => {
                return (
                  <Message
                    key={i}
                    model={message}
                    style={
                      message.sender === "BingChat" ? { textAlign: "left" } : {}
                    }
                  />
                );
              })}
            </MessageList>
            <MessageInput placeholder='Type Message here' onSend={handleUserMessage}/>
          </ChatContainer>
        </MainContainer>
      </div>
    </>
  );
}

export default App;
