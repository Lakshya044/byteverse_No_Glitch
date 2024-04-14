// ChatApp.js

import React, { useState } from 'react';
import axios from 'axios';

const ChatApp = () => {
    const [message, setMessage] = useState('');
    const [output, setOutput] = useState('');
    // const [chatHistory, setChatHistory] = useState([]);

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     // Send user message to backend for processing
    //     try {
    //         const response = await axios.post('/process-message', { message });
    //         const { message: chatResponse } = response.data;

    //         // Update chat history with user message and bot response
    //         setChatHistory([...chatHistory, { user: message, bot: chatResponse }]);
    //         setMessage(''); // Clear input field
    //     } catch (error) {
    //         console.error('Error processing message:', error);
    //     }
    // };
   

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Send user message to backend for processing using fetch
        try {
            const response = await fetch('http://localhost:5000/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message }),
            });
            
            if (!response.ok) {
                throw new Error('Failed to process message');
            }
    
            // const { message: chatResponse } = await response.json();
    
            // Update chat history with user message and bot response
            // setChatHistory([...chatHistory, { user: message, bot: chatResponse }]);
            //setOutput()
            const responseData = await response.json();
            const { reply: chatResponse } = responseData;
    
            // Update the output state with the bot's response
            console.log(chatResponse);
            setOutput(chatResponse);
            setMessage(''); // Clear input field
        } catch (error) {
            console.error('Error processing message:', error);
        }
    };
    
    return (
        <div className="chat-container">
            <h1 className="chat-header">Chatbot</h1>
            {/* <div className="chat-history">
                {chatHistory.map((chat, index) => (
                    <div key={index} className="message-container">
                        <div className="user-message">You: {chat.user}</div>
                        <div className="bot-message">Bot: {chat.bot}</div>
                    </div>
                ))}
            </div> */}
            <form onSubmit={handleSubmit} className="message-form">
                <input type="text" value={message} onChange={handleMessageChange} className="message-input" />
                <button type="submit" className="send-button">Send</button>
            </form>
            <p>{output}</p>
        </div>
    );
};

export default ChatApp;
