
import { useState } from 'react';
import { db } from '../config/firebaseConfig.js'; 
import { ref, push, serverTimestamp } from 'firebase/database'; 

export const useSendMessage = (nickname) => {
  const [message, setMessage] = useState('');
  const handleSendMessage = async (e) => {
    e.preventDefault();
    const trimmedMessage = message.trim(); //boşlukları kaldırır

    if (trimmedMessage) {
      try {
        const messagesRef = ref(db, 'messages'); 
        
        await push(messagesRef, {
          text: trimmedMessage,
          author: nickname,
          createdAt: serverTimestamp(), 
        });

        setMessage('');

      } catch (error) {
        console.error("Mesaj gönderilirken hata oluştu:", error);
      }
    }
  };

  return { message, setMessage, handleSendMessage };
};