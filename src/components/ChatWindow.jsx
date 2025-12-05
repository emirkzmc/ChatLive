import React from 'react';
import { useRef, useEffect } from 'react';
import Message from './Message.jsx';

export default function ChatWindow({ messages, nickname, className,selectedUser }) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);


  return (
    <div
      className={`
        flex flex-col
        bg-[#D9D9D9]/46 
        rounded-3xl 
        p-6 border border-[#8C8C8C]
        overflow-y-auto  
        grow
        
        
        ${className || ''} 
      `}
    >
      
      <div className='flex flex-col gap-4 grow overflow-y-auto py-2  md:px-14 custom-scrollbar'>
        {messages && messages.map((message) => (
          <Message
            key={message.id}
            text={message.text}
            author={message.sender}
            isMine={message.sender === nickname}
            timestamp={message.createdAt}
          />
        ))}

        <div ref={messagesEndRef} />
      </div >
    </div>
  );
}