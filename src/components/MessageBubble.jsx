import React from 'react';
import { CheckCheck, Smile } from 'lucide-react';

const MessageBubble = ({ message, isGroup = true }) => {
  const isMe = message.sender === 'me';
  
  // Generate random color for sender avatar
  const getAvatarColor = (name) => {
    const colors = ['#25d366', '#ffc107', '#00bcd4', '#9c27b0', '#ff5722', '#3f51b5'];
    const index = name?.charCodeAt(0) % colors.length || 0;
    return colors[index];
  };

  return (
    <div className={`flex w-full mb-1 px-4 ${isMe ? 'justify-end' : 'justify-start'}`}>
      {/* Avatar for received messages in group */}
      {!isMe && isGroup && (
        <div 
          className="w-8 h-8 rounded-full flex items-center justify-center mr-2 mt-1 shrink-0 text-white text-xs font-bold"
          style={{ backgroundColor: getAvatarColor(message.senderName) }}
        >
          {message.senderName?.charAt(0).toUpperCase() || 'U'}
        </div>
      )}

      <div 
        className={`relative max-w-[65%] px-2 pt-1 pb-1 shadow-sm text-[14.2px] break-words group
          ${isMe 
            ? 'bg-[#d9fdd3] rounded-lg rounded-tr-none' 
            : 'bg-white rounded-lg rounded-tl-none'
          }
        `}
      >
        {/* Reaction icon on hover */}
        <button className={`absolute top-1 opacity-0 group-hover:opacity-100 transition-opacity ${isMe ? 'left-[-28px]' : 'right-[-28px]'}`}>
          <Smile className="w-5 h-5 text-[#8696a0]" />
        </button>

        {/* Sender info for group messages */}
        {!isMe && isGroup && message.senderName && (
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[13px] font-medium" style={{ color: getAvatarColor(message.senderName) }}>
              ~ {message.senderName}
            </span>
            {message.senderPhone && (
              <span className="text-[12px] text-[#667781]">{message.senderPhone}</span>
            )}
          </div>
        )}

        {/* Reply/Quoted message */}
        {message.replyTo && (
          <div className="bg-[#f0f0f0] border-l-4 border-[#06cf9c] rounded px-2 py-1 mb-1">
            <p className="text-[12px] text-[#06cf9c] font-medium">~ {message.replyTo.sender}</p>
            <p className="text-[12px] text-[#667781] truncate">{message.replyTo.text}</p>
          </div>
        )}

        {/* Message text */}
        <div className="relative">
          <span className="text-[#111b21] leading-relaxed whitespace-pre-wrap">
            {message.text}
            <span className="inline-block w-[65px] h-[15px]"></span>
          </span>
          <div className="absolute bottom-0 right-0 flex items-center gap-1 pb-[2px]">
            {message.edited && (
              <span className="text-[11px] text-[#667781]">Edited</span>
            )}
            <span className="text-[11px] text-[#667781]">
              {message.time}
            </span>
            {isMe && (
              <CheckCheck className="w-4 h-4 text-[#53bdeb]" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Date Separator Component
export const DateSeparator = ({ date }) => (
  <div className="flex justify-center my-3">
    <span className="bg-white px-3 py-1 rounded-lg text-[12px] text-[#54656f] shadow-sm">
      {date}
    </span>
  </div>
);

export default MessageBubble;
