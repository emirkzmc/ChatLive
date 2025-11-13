
import { useState, useEffect } from 'react';
import { db } from '../config/firebaseConfig.js';
import { ref, onValue, query, orderByChild } from 'firebase/database';

export const useFetchMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const messagesRef = query(ref(db, 'messages'), orderByChild('createdAt'));
    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val(); 
      
      if (data) {
        const messagesList = Object.keys(data).map(key => ({
          id: key,
          ...data[key],
        }));
        setMessages(messagesList); 
      } else {
        setMessages([]); 
      }
    });

    return () => unsubscribe();

  }, []);

  return { messages };
};