import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { message: 'Hi, How can I assist you today?' },
  ]);
  const [userInput, setUserInput] = useState('');

  
  const handleSendMessage = () => {
    if (userInput.trim()) {
      const userMessage = { message: userInput, sender: 'user' };
      const botMessage = { message: getBotResponse(userInput), sender: 'bot' };

      setMessages([...messages, userMessage, botMessage]);
      setUserInput('');
    }
  };

  
  const getBotResponse = (input) => {
    const lowerInput = input.toLowerCase();
    if (lowerInput.includes('hello')) {
      return 'Hello! How can I help you today?';
    } else if (lowerInput.includes('bye')) {
      return 'Goodbye! Have a great day!';
    } 
    else if (lowerInput.includes('raj')) {
        return 'Goodbye! Have a ni8 day!';
    }
    else {
      return 'I didn\'t quite catch that. Could you please rephrase?';
    }
  };

  return (
    <div className="chatbot-container">
      <div className="d-flex align-items-center justify-content-center mb-3">
        <img
          src="https://www.shutterstock.com/image-vector/chat-bot-logo-design-concept-600nw-1938811039.jpg"
          alt="logo"
          height={50}
          width={50}
        />
        <h2 className="text-primary ml-2">Chatbot</h2>
      </div>

      <div
        className="chat-message-box"
        style={{
          maxHeight: '300px',
          overflowY: 'scroll',
          border: '1px solid #ddd',
          padding: '10px',
        }}
      >
        {messages.map((data, index) => (
          <div key={index} className={data.sender === 'user' ? 'user-message' : 'bot-message'}>
            <p>{data.message}</p>
          </div>
        ))}
      </div>

      <div className="d-flex mt-2">
        <input
          type="text"
          className="form-control"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type a message"
        />
        <button className="btn btn-primary ml-2" onClick={handleSendMessage}>
          Send
        </button>
      </div>

      <div id="copyright" className="text-center mt-3" style={{ fontSize: '12px' }}>
        Copyrights reserved Tamil Skillhub
      </div>
    </div>
  );
}
