import React, { useState } from 'react';
import './ChatBotStyles.css'; // Ensure this path is correct
import styles from '../style';
import chatbotIcon from '../assets/chatbot.png'; // Ensure this path is correct

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
            const res = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`, // Use your API key
                
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
        <div>
            {!isExpanded ? (
                <div className={`fixed bottom-4 right-4 p-2 rounded-lg shadow-lg bg-gray-800 cursor-pointer flex items-center`} onClick={toggleChatbot}>
                    <img src={chatbotIcon} alt="Chatbot" className="w-16 h-16 mr-2" /> {/* Display the image when closed */}
                    <span className="text-white">ChatGeo</span> {/* Display the text when closed */}
                </div>
            ) : (
                <div className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg bg-gray-800`}>
                    <h2 className="text-white">Chat with us!</h2>
                    <p className="text-white">How can we help you today?</p>
                    <div className={`chatbot-container ${isFullScreen ? 'fullscreen' : isExpanded ? 'expanded' : 'collapsed'} bg-gray-800`}>
                        <div className="chatbot-header bg-blue-gradient">
                            <span>Chatbot</span>
                            <div>
                                <button className="chatbot-button bg-blue-gradient" onClick={toggleFullScreen}>
                                    {isFullScreen ? 'Exit Full Screen' : 'Full Screen'}
                                </button>
                                <button className="chatbot-button bg-blue-gradient" onClick={toggleChatbot}>
                                    Collapse
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
                </div>
            )}
        </div>
    );
};

export default ChatBot; 