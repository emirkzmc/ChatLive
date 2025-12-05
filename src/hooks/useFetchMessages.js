import { useState, useEffect } from 'react';
import { db } from '../config/firebaseConfig.js';
import { ref, onValue, query, orderByChild } from 'firebase/database';


function getChatKey(user1, user2) {
    const nicknames = [user1, user2].sort();
    return nicknames.join('_');
}

export const useFetchMessages = (nickname, selectedUser) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (!nickname) return;

        let path;

        if (selectedUser) {
            const chatKey = getChatKey(nickname, selectedUser);
            path = `private_chats/${chatKey}`;

        } else {
            path = 'messages';
        }



        const messagesRef = query(ref(db, path), orderByChild('createdAt'));

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

    }, [nickname, selectedUser]);

    return { messages };
};