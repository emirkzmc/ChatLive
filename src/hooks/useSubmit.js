import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function useSubmit(onLogin) {
  const navigate = useNavigate();
  const [inputNickname, setInputNickname] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputNickname.trim()) {
      onLogin(inputNickname.trim());
      navigate("/chat");
    } else {
      alert("Lütfen bir kullanıcı adı giriniz.");
    }
  };

  return { inputNickname, setInputNickname, handleSubmit };
}
