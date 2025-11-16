
import { useState } from "react";


export function useSubmit(onLogin) {

  const [inputNickname, setInputNickname] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    const nickname = inputNickname.trim();

    if (nickname) {

      onLogin(nickname);
      
    } else {
      setError("Lütfen bir kullanıcı adı girin.");
    }
  };

  return { inputNickname, setInputNickname, handleSubmit , error };
}
