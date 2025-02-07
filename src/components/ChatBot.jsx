import React, { useState } from 'react';
import './ChatBotStyles.css'; // Ensure this path is correct

const ChatBot = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const toggleChatbot = () => {
        setIsExpanded(!isExpanded);
    };

    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    };

    const sendMessage = async () => {
        if (input.trim() === '') return;

        const newMessages = [...messages, { sender: 'You', text: input }];
        setMessages(newMessages);
        setInput('');

        try {
            const response = await fetch('http://localhost:5000/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: input })
            });

            const data = await response.json();
            if (data.choices && data.choices.length > 0) {
                const botMessage = data.choices[0].message.content.trim();
                setMessages([...newMessages, { sender: 'Bot', text: botMessage }]);
            } else {
                setMessages([...newMessages, { sender: 'Bot', text: 'No response from API.' }]);
            }
        } catch (error) {
            console.error('Error:', error);
            setMessages([...newMessages, { sender: 'Bot', text: 'Sorry, something went wrong.' }]);
        }
    };

    return (
        <div className={`chatbot-container ${isFullScreen ? 'fullscreen' : isExpanded ? 'expanded' : 'collapsed'}`}>
            <div className="chatbot-header bg-blue-gradient">
                <span>Chatbot</span>
                <div>
                    <button className="chatbot-button bg-blue-gradient" onClick={toggleFullScreen}>
                        {isFullScreen ? 'Exit Full Screen' : 'Full Screen'}
                    </button>
                    <button className="chatbot-button bg-blue-gradient" onClick={toggleChatbot}>
                        {isExpanded ? 'Collapse' : 'Expand'}
                    </button>
                </div>
            </div>
            {isExpanded && (
                <div className="chatbot-content">
                    <div className="chatbot-messages">
                        {messages.map((msg, index) => (
                            <div key={index}><strong>{msg.sender}:</strong> {msg.text}</div>
                        ))}
                    </div>
                    <div className="chatbot-input-container">
                        <input
                            type="text"
                            className="chatbot-input"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Type a message..."
                        />
                        <button className="chatbot-button bg-blue-gradient" onClick={sendMessage}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatBot; 