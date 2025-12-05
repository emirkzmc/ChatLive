import { useState } from 'react';
import { db } from '../config/firebaseConfig.js';
import { ref, push, serverTimestamp } from 'firebase/database';

const getChatKey = (user1, user2) => {
  const nicknames = [user1, user2].sort();
  return nicknames.join('_');
};

export const useSendMessage = (nickname, selectedUser) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const trimmedMessage = message.trim();

    if (trimmedMessage) {
      try {
        let path;
        let messageData = {
          text: trimmedMessage,
          sender: nickname,
          createdAt: serverTimestamp(),
        };

        if (selectedUser) {
          const chatKey = getChatKey(nickname, selectedUser);
          path = `private_chats/${chatKey}`;
          messageData.receiver = selectedUser;
        } else {
          path = 'messages';
          
        }

        const messagesRef = ref(db, path);

        await push(messagesRef, messageData);

        setMessage('');

      } catch (error) {
        console.error("Mesaj gönderilirken hata oluştu:", error);
      }
    }
  };

  return { message, setMessage, handleSendMessage };
};