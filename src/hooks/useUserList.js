
import { useState, useEffect } from "react";
import { ref, onValue, set } from "firebase/database"; 
import { db } from '../config/firebaseConfig.js'; 

export function useUserList(currentNickname) { 
  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);

  useEffect(() => {
    const usersRef = ref(db, 'users'); 
    
    const unsubscribe = onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      
      if (data) {
        const allUsers = Object.keys(data).map(key => ({
          id: key,
          ...data[key],
        }));
        const filteredUsers = allUsers.filter(user => user.nickname !== currentNickname);

        setUsers(filteredUsers);
      } else {
        setUsers([]);
      }
      setLoadingUsers(false);
    });

    return () => unsubscribe(); 

  }, [currentNickname]); 

  return { users , loadingUsers }; 
}