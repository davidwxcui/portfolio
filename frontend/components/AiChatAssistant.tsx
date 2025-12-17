import React, { useState, useRef, useEffect } from 'react';
import { X, Sparkles, Send } from 'lucide-react';
import { createChatSession, sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Chat } from '@google/genai';

const AiChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "System online. I can provide details on David's architecture and engineering capabilities." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const chatSessionRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const messageText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: messageText }]);
    setIsLoading(true);

    try {
      if (!chatSessionRef.current) chatSessionRef.current = createChatSession();
      const responseText = await sendMessageToGemini(chatSessionRef.current, messageText);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Connection interrupted. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Siri Orb Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full ai-gradient shadow-[0_0_20px_rgba(50,173,230,0.5)] flex items-center justify-center hover:scale-110 transition-transform duration-300"
        >
          <Sparkles className="text-white" size={28} />
        </button>
      )}

      {/* Chat Interface - Apple Intelligence Style */}
      {isOpen && (
        <div className="w-[350px] h-[500px] rounded-[30px] overflow-hidden flex flex-col shadow-2xl animate-fade-in relative">
          {/* Glass Background */}
          <div className="absolute inset-0 bg-[#1d1d1f]/90 backdrop-blur-xl z-0"></div>
          
          {/* Glowing Border effect */}
          <div className="absolute inset-0 rounded-[30px] border border-white/10 z-10 pointer-events-none"></div>
          
          {/* Header */}
          <div className="relative z-20 p-4 border-b border-white/10 flex justify-between items-center">
             <span className="text-white font-semibold text-sm flex items-center gap-2">
               <Sparkles size={14} className="text-[#AF52DE]" /> David Intelligence
             </span>
             <button onClick={() => setIsOpen(false)} className="text-[#86868b] hover:text-white">
                <X size={20} />
             </button>
          </div>

          {/* Messages */}
          <div className="relative z-20 flex-1 overflow-y-auto p-4 space-y-4">
             {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                   <div className={`max-w-[85%] px-4 py-2 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user' 
                      ? 'bg-[#0071e3] text-white' 
                      : 'bg-[#2c2c2e] text-[#f5f5f7]'
                   }`}>
                      {msg.text}
                   </div>
                </div>
             ))}
             {isLoading && (
                 <div className="flex justify-start">
                    <div className="bg-[#2c2c2e] px-4 py-2 rounded-2xl">
                       <div className="flex gap-1">
                          <div className="w-1.5 h-1.5 bg-[#86868b] rounded-full animate-bounce"></div>
                          <div className="w-1.5 h-1.5 bg-[#86868b] rounded-full animate-bounce delay-100"></div>
                          <div className="w-1.5 h-1.5 bg-[#86868b] rounded-full animate-bounce delay-200"></div>
                       </div>
                    </div>
                 </div>
             )}
             <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="relative z-20 p-4">
             <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything..."
                  className="w-full bg-[#2c2c2e] text-white rounded-full pl-4 pr-10 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#0071e3]"
                />
                <button 
                  onClick={handleSend}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#0071e3] rounded-full flex items-center justify-center text-white hover:bg-[#0077ed]"
                >
                   <Send size={14} />
                </button>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AiChatAssistant;