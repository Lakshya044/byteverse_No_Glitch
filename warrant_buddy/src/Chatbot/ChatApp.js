// ChatApp.js

import React, { useState } from 'react';
import axios from 'axios';
import Lower_Navbar from '../Components/Lower_Navbar';
import Upper_Navbar from '../Components/Upper_Navbar';
import Footer from '../Components/Footer';
import "../App.css" ;
 
const ChatApp = () => {
    const [message, setMessage] = useState('');
    const [output, setOutput] = useState('');
    // const [chatHistory, setChatHistory] = useState([]);

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    

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
    
    return <>
        <Upper_Navbar/>
        <Lower_Navbar/>

        <div className="bot">
          <div className="chat-container">
          <h1 className="chat-header" style={{ color: '#007bff', fontWeight: 'bold', textShadow: '2px 2px 4px #000000' }}>Chatbot</h1>

            <form onSubmit={handleSubmit} className="message-form">
            <input 
  type="text" 
  value={message} 
  onChange={handleMessageChange} 
  className="message-input" 
  style={{ 
    margin: '10px 20px',
    padding: '10px', 
    fontSize: '16px', 
    border: '2px solid #007bff', 
    borderRadius: '4px', 
    outline: 'none', 
    boxShadow: '0px 0px 5px rgba(0, 123, 255, 0.5)'
  }} 
/>

<button 
  type="submit" 
  className="send-button" 
  style={{ 
    margin: '10px 20px',
    padding: '10px 20px', 
    fontSize: '16px', 
    backgroundColor: '#007bff', 
    color: '#fff', 
    border: 'none', 
    borderRadius: '4px', 
    cursor: 'pointer', 
    boxShadow: '0px 0px 5px rgba(0, 123, 255, 0.5)'
  }} 
>
  Send
</button>

            </form>
            <p 
  className="chatbot-output"
  style={{
    backgroundColor: '#e6f2ff', // Light blue background
    padding: '10px',
    borderRadius: '4px',
    height: '200px',
    width: '1200px',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)', // Light shadow
    marginTop: '10px',
    color: '#333', // Dark text color
    overflowY: 'auto' // Enable vertical scrolling
  }}
>
  {output}
</p>


          </div>
        </div>

        <Footer/>
    </>
};

export default ChatApp;
