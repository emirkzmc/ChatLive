
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import ChatPage from './pages/ChatPage.jsx';


function App() {
  const [nickname, setNickname] = useState(localStorage.getItem('chatNickname'));

  const handleLogout = () => {
    localStorage.removeItem('chatNickname'); 
    setNickname(null); 
 
  };

  const handleLogin = (name) => {
    localStorage.setItem('chatNickname', name);
    setNickname(name);
  };

  return (
    <div  className="w-full h-full"> 
    <Routes>
      <Route 
        path="/" 
        element={
          !nickname ? (
            <LoginPage onLogin={handleLogin} /> 
          ) : (
            <Navigate to="/chat" replace /> 
          )
        } 
      />
      
      <Route 
        path="/chat" 
        element={
          nickname ? (
            <ChatPage nickname={nickname} onLogout={handleLogout} /> 
          ) : (
            <Navigate to="/" replace /> 
          )
        } 
      />
      

      <Route path="*" element={<h1>404: Sayfa Bulunamadı</h1>} />

    </Routes>
    </div>
  );
}

export default App;