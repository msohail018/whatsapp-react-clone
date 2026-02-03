import React, { useState, useEffect, useRef } from 'react';
import { Search, MoreVertical, Smile, Plus, Mic, Send, Video, ChevronDown, User } from 'lucide-react';
import MessageBubble, { DateSeparator } from './MessageBubble';

const ChatWindow = ({ activeChat, onSendMessage }) => {
  const [input, setInput] = useState('');
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [activeChat?.messages]);

  if (!activeChat) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center bg-[#f0f2f5] p-6 text-center select-none">
        <div className="bg-white rounded-[40px] p-12 shadow-sm max-w-[560px] flex flex-col items-center">
           <div className="relative mb-12">
              <div className="bg-[#e9edef] w-[200px] h-[100px] rounded-lg border-2 border-[#d1d7db] flex items-center justify-center">
                 <div className="w-16 h-10 border-2 border-wa-green rounded flex flex-col p-1 gap-1">
                    <div className="h-1 bg-wa-green w-full"></div>
                    <div className="h-1 bg-wa-green w-2/3"></div>
                 </div>
              </div>
           </div>
           
           <h1 className="text-[32px] font-light text-[#41525d] mb-4">Download WhatsApp for Windows</h1>
           <p className="text-[14px] text-[#667781] leading-relaxed mb-8">
             Make calls, share your screen and get a faster experience when you download the Windows app.
           </p>
           
           <button className="bg-wa-green text-white font-medium px-8 py-2 rounded-full hover:bg-[#008069] transition-colors">
              Download
           </button>
        </div>
      </div>
    );
  }

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full relative overflow-hidden">
      {/* Chat Background with Doodle Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ 
          backgroundColor: '#efeae2',
          backgroundImage: `url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')`,
          backgroundRepeat: 'repeat',
          opacity: 0.4
        }}
      />
      <div className="absolute inset-0 bg-[#efeae2] -z-10" />

      {/* Header */}
      <header className="h-[59px] bg-[#f0f2f5] px-4 flex items-center justify-between shrink-0 z-10 border-l border-[#d1d7db]">
        <div className="flex items-center cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-[#dfe5e7] flex items-center justify-center mr-3">
            {activeChat.avatar ? (
              <img src={activeChat.avatar} alt={activeChat.name} className="w-10 h-10 rounded-full" />
            ) : (
              <User className="w-6 h-6 text-[#8696a0]" />
            )}
          </div>
          <div>
            <h3 className="font-medium text-[16px] text-[#111b21]">{activeChat.name}</h3>
          </div>
        </div>
        <div className="flex items-center gap-5 text-[#54656f]">
          <div className="flex items-center cursor-pointer">
            <Video className="w-5 h-5" />
            <ChevronDown className="w-4 h-4 ml-1" />
          </div>
          <Search className="w-5 h-5 cursor-pointer" />
          <MoreVertical className="w-5 h-5 cursor-pointer" />
        </div>
      </header>

      {/* Messages Area */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto py-4 flex flex-col z-10 relative"
      >
        {activeChat.messages.length === 0 ? (
          <div className="flex-1 flex items-end justify-center pb-8">
            <div className="bg-white/90 px-3 py-1 rounded shadow-sm">
              <span className="text-[13px] text-[#54656f]">
                <span className="text-[#027eb5] cursor-pointer hover:underline">Click here</span> to get older messages from your phone.
              </span>
            </div>
          </div>
        ) : (
          <>
            <div className="flex justify-center mb-4">
              <div className="bg-white/90 px-3 py-1 rounded shadow-sm">
                <span className="text-[13px] text-[#54656f]">
                  <span className="text-[#027eb5] cursor-pointer hover:underline">Click here</span> to get older messages from your phone.
                </span>
              </div>
            </div>
            
            {/* Date Separator */}
            <DateSeparator date="Wednesday" />
            
            {activeChat.messages.map((msg) => (
              <MessageBubble key={msg.id} message={msg} isGroup={activeChat.isGroup} />
            ))}
          </>
        )}
      </div>

      {/* Input Bar */}
      <footer className="bg-[#f0f2f5] px-4 py-2 flex items-center gap-2 shrink-0 z-10 border-l border-[#d1d7db]">
        <button className="p-2 hover:bg-[#e9edef] rounded-full">
          <Plus className="w-6 h-6 text-[#54656f]" />
        </button>
        <button className="p-2 hover:bg-[#e9edef] rounded-full">
          <Smile className="w-6 h-6 text-[#54656f]" />
        </button>
        <div className="flex-1 bg-white rounded-lg px-4 flex items-center h-[42px]">
          <input 
            type="text" 
            placeholder="Type a message"
            className="w-full bg-transparent border-none outline-none text-[15px] text-[#111b21] placeholder-[#667781]"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
        </div>
        <button className="p-2 hover:bg-[#e9edef] rounded-full">
          {input.trim() ? (
            <Send className="w-6 h-6 text-wa-green" onClick={handleSend} />
          ) : (
            <Mic className="w-6 h-6 text-[#54656f]" />
          )}
        </button>
      </footer>
    </div>
  );
};

export default ChatWindow;
