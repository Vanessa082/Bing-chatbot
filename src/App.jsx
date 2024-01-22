import React, { useState, useEffect } from 'react';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Initialize the Bing Chat client
    const client = new Client({
      apiKey: 'YOUR_API_KEY',
      endpoint: 'YOUR_ENDPOINT',
    });

    // Connect to the chat service
    client.connect();

    // Subscribe to receive incoming messages
    const subscription = client.onMessageReceived((message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      // Disconnect and clean up when the component is unmounted
      client.disconnect();
      subscription.unsubscribe();
    };
  }, []);

  const sendMessage = async () => {
    setIsLoading(true);

    try {
      // Send the user's message using the Bing Chat client
      const client = new Client({
        apiKey: 'YOUR_API_KEY',
        endpoint: 'YOUR_ENDPOINT',
      });

      await client.sendMessage(inputText);
    } catch (error) {
      console.error('Error sending message:', error);
    }

    setIsLoading(false);
    setInputText('');
  };

  return (
    <div>
      <div>
        <ul>
          {messages.map((message, index) => (
            <li key={index}>{message.text}</li>
          ))}
        </ul>
      </div>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          disabled={isLoading}
        />
        <button onClick={sendMessage} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Send'}
        </button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Chat Bot</h1>
      <ChatBot />
    </div>
  );
};

export default App;
