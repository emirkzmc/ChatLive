import React from 'react';
import { db } from '../config/firebaseConfig.js';
import { ref, push, serverTimestamp } from 'firebase/database';
import { useState } from 'react';

 const formatTime = (timestamp) => {
  if (!timestamp) return '';

  let date;
  if (timestamp.seconds) {
    date = new Date(timestamp.seconds * 1000);
  } else {

    date = new Date(timestamp);
  }

  if (isNaN(date.getTime())) return '';

  return date.toLocaleTimeString('tr-TR', {
    hour: '2-digit',
    minute: '2-digit'
  });
};


export default function Message({ text, author, isMine, timestamp }) {
  
  const timeString = formatTime(timestamp);
  const createdAt = timeString;
  const containerClass = isMine ? 'flex justify-end' : 'flex justify-start';
  
  const bubbleClass = isMine 
    ? 'bg-[#9C9C9C] text-white rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl ' 
    : 'bg-[#D9D9D9] text-[#676767] rounded-tr-2xl rounded-tl-2xl rounded-br-2xl ';

   
  return (
    <div className={containerClass}>
      <div 
        className={`
          max-w-28  md:max-w-56 px-2.5 py-1.5 min-w-20
          
          ${bubbleClass}
        `}
      >

        {!isMine && (
          <div className="md:text-[14px] text-xs font-bold ">{author}</div>
        )}
        <p className='wrap-break-word'>{text}</p>
        <div>
          {isMine &&  (
            <span className='flex justify-end text-[#cfcecc] text-sm'>{createdAt}</span>
          )
          }
          {!isMine && (
            <span className='flex justify-end  text-sm'>{createdAt}</span>
          )
          }
        </div>
      </div>
    </div>
  );
}