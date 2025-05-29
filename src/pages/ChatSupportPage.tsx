import React, { useState, useEffect, useRef, useContext } from 'react';
import { Send, Loader2 } from 'lucide-react';
import AuthContext from '../context/AuthContext';
import io from 'socket.io-client';

// Define types for messages
interface Message {
  id: string;
  sender: string;
  text: string;
  timestamp: Date;
  isUser: boolean;
}

const ChatSupportPage: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const socketRef = useRef<any>(null);
  const { user } = useContext(AuthContext);
  const chatId = "support-chat"; // For simplicity, we use a fixed chat ID for support

  // Connect to socket server when component mounts
  useEffect(() => {
    // Welcome message
    const welcomeMessage: Message = {
      id: 'welcome',
      sender: 'EventEase Support',
      text: 'Welcome to EventEase support! How can we help you today?',
      timestamp: new Date(),
      isUser: false
    };
    setMessages([welcomeMessage]);
    
    // Connect to socket.io server
    socketRef.current = io('http://localhost:5000'); // Change to your server URL
    
    socketRef.current.on('connect', () => {
      setIsConnected(true);
      socketRef.current.emit('join_chat', { chatId });
    });
    
    socketRef.current.on('receive_message', (data: any) => {
      const newMessage: Message = {
        id: data.id,
        sender: data.sender,
        text: data.message,
        timestamp: new Date(data.timestamp),
        isUser: false
      };
      setMessages(prev => [...prev, newMessage]);
      setIsTyping(false);
    });
    
    socketRef.current.on('user_typing', () => {
      setIsTyping(true);
      // Reset typing indicator after 3 seconds
      setTimeout(() => setIsTyping(false), 3000);
    });
    
    socketRef.current.on('disconnect', () => {
      setIsConnected(false);
    });
    
    // Cleanup function
    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Handle send message
  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (message.trim() === '') return;
    
    const newMessage: Message = {
      id: Date.now().toString(),
      sender: user?.name || 'You',
      text: message,
      timestamp: new Date(),
      isUser: true
    };
    
    setMessages(prev => [...prev, newMessage]);
    
    // Send message to socket server
    socketRef.current.emit('send_message', {
      chatId,
      id: newMessage.id,
      sender: newMessage.sender,
      message: newMessage.text,
      timestamp: newMessage.timestamp
    });
    
    // Clear input
    setMessage('');
    
    // Simulate response for demo purposes
    simulateResponse();
  };

  // Simulate typing and response
  const simulateResponse = () => {
    // Show typing indicator
    setTimeout(() => {
      socketRef.current.emit('typing', { chatId });
    }, 1000);
    
    // Send a response after some delay
    setTimeout(() => {
      const responses = [
        "Thank you for your message. Our team will get back to you shortly.",
        "We appreciate your inquiry. Let me check that information for you.",
        "Thanks for contacting EventEase support. How else can I assist you today?",
        "I understand your request. Our event specialists would be happy to help with that.",
        "That's a great question about our services. We offer customized packages for all types of events."
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const responseMessage: Message = {
        id: `resp-${Date.now()}`,
        sender: 'EventEase Support',
        text: randomResponse,
        timestamp: new Date(),
        isUser: false
      };
      
      setMessages(prev => [...prev, responseMessage]);
      setIsTyping(false);
    }, 3000);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Chat header */}
        <div className="bg-purple-700 text-white px-6 py-4">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center mr-3">
              <span className="text-xl font-bold">S</span>
            </div>
            <div>
              <h2 className="text-lg font-semibold">EventEase Support</h2>
              <p className="text-sm text-purple-200">
                {isConnected ? (
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    Online
                  </span>
                ) : (
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                    Offline
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
        
        {/* Chat messages */}
        <div className="h-[500px] overflow-y-auto p-6 bg-gray-50">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`mb-4 flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs sm:max-w-sm md:max-w-md rounded-lg px-4 py-2 ${
                  msg.isUser
                    ? 'bg-purple-700 text-white rounded-br-none'
                    : 'bg-gray-200 text-gray-800 rounded-bl-none'
                }`}
              >
                <div className="font-medium text-sm">
                  {msg.sender}
                </div>
                <div className="mt-1">{msg.text}</div>
                <div className="text-xs text-right mt-1 opacity-70">
                  {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          ))}
          
          {/* Typing indicator */}
          {isTyping && (
            <div className="flex items-center text-gray-500 text-sm">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
              <span className="ml-2">EventEase Support is typing...</span>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        {/* Chat input */}
        <div className="px-4 py-4 border-t">
          <form onSubmit={sendMessage} className="flex items-center">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              className="form-input flex-grow mr-2"
            />
            <button
              type="submit"
              className="btn btn-primary flex items-center justify-center"
              disabled={!isConnected}
            >
              <Send size={18} className="mr-1" />
              Send
            </button>
          </form>
          {!isConnected && (
            <p className="text-red-500 text-sm mt-2 flex items-center">
              <Loader2 size={14} className="animate-spin mr-1" />
              Connecting to support...
            </p>
          )}
        </div>
      </div>
      
      <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-amber-800 mb-2">Support Hours</h3>
        <p className="text-amber-700">
          Our customer support team is available from 9:00 AM to 8:00 PM, Monday through Saturday.
          For urgent inquiries outside these hours, please email us at support@eventease.com.
        </p>
      </div>
    </div>
  );
};

export default ChatSupportPage;