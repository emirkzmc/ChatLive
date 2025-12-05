import { useState } from "react";
import { ref, set, get } from "firebase/database";
import { db } from '../config/firebaseConfig.js'; 

const createUniqueId = () => 'guest-' + Math.random().toString(36).substring(2, 9) + Date.now();
const sanitiseNicknameKey = (nickname) =>
  nickname
    .trim()
    .toLowerCase()
    .replace(/[.#$/\[\]]/g, "_");

export function useSubmit(onLogin) {

  const [inputNickname, setInputNickname] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const nickname = inputNickname.trim();

    if (!nickname) {
      setError("Lütfen bir kullanıcı adı girin.");
      return;
    }

    try { 
      const nicknameKey = sanitiseNicknameKey(nickname);
      const userRef = ref(db, 'users/' + nicknameKey);
      const snapshot = await get(userRef);

      const existingData = snapshot.exists() ? snapshot.val() : null;
      const userUid = existingData?.uid || createUniqueId();

      await set(userRef, {
        nickname,
        uid: userUid,
        createdAt: existingData?.createdAt || Date.now(),
        lastSeen: Date.now(), 
      });

      
      onLogin(nickname); 
      
    } catch (err) {
      console.error("RTDB'ye kaydetme hatası:", err);
      setError("Giriş sırasında bir veritabanı hatası oluştu.");
    }
  };

  return { inputNickname, setInputNickname, handleSubmit, error };
}