import React from 'react';

export default function Message({ text, author, isMine }) {
  

  const containerClass = isMine ? 'flex justify-end' : 'flex justify-start';
  
  const bubbleClass = isMine 
    ? 'bg-[#9C9C9C] text-white rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl ' 
    : 'bg-[#D9D9D9] text-[#676767] rounded-tr-2xl rounded-tl-2xl rounded-br-2xl ';

  return (
    <div className={containerClass}>
      <div 
        className={`
          max-w-28 md:max-w-56 p-3 min-w-36
          
          ${bubbleClass}
        `}
      >

        {!isMine && (
          <div className="md:text-md text-xs font-bold ">{author}</div>
        )}
        <p className='wrap-break-word'>{text}</p>
      </div>
    </div>
  );
}