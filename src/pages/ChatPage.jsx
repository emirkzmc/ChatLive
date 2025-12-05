import React, { useState, useEffect } from 'react';
import ChatBG from "../background/ChatBG.jsx";
import ChatWindow from "../components/ChatWindow.jsx";
import MessageInput from "../components/MessageInput.jsx";
import { useFetchMessages } from '../hooks/useFetchMessages.js';
import Button from '../components/Button.jsx';
import { useUserList } from '../hooks/useUserList.js';
import Loading from '@/components/Loading.jsx';
import { set } from 'firebase/database';

const formatTime = (timestamp) => {
  if (!timestamp) return 'Bilinmiyor';
  const date = new Date(timestamp);
  return date.toLocaleTimeString('tr-TR', { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' });
};

export default function ChatPage({ nickname, onLogout }) {


  const [selectedUser, setSelectedUser] = useState(null);
  const { users, loadingUsers } = useUserList(nickname);
  const { messages } = useFetchMessages(nickname, selectedUser);
  const [loading, setLoading] = useState(true);
  const [isNotification, setIsNotification] = useState(false);

  //   useEffect(() => {
  //     if(isNotification){
  //   const isNotification = document.getElementById('ntf');

  //   if(isNotification){
  //     isNotification.style.backgroundColor = 'transparent';
  //   }
  //   }
  // }, [isNotification]);

  const handleUserSelect = (name) => {
    if (name !== nickname) {
      setSelectedUser(name);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setSelectedUser("");
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  let filteredMessages = [];
  if (selectedUser === null) {
    filteredMessages = messages.filter(msg => !msg.receiver);
  } else {
    filteredMessages = messages.filter(msg =>
      (msg.sender === nickname && msg.receiver === selectedUser) ||
      (msg.sender === selectedUser && msg.receiver === nickname)
    );
  }


  const isPrivateChatActive = selectedUser !== null;
  const isChatWindowVisible = selectedUser != "";


  return (
    <ChatBG>
      <div className="w-full h-screen flex ">

        <div className=" md:block w-[300px] h-full shrink-0 
                            bg-gray-800/30 border-r border-white/10
                            p-4 overflow-y-auto
                            ">

          <div className="flex justify-center items-center w-full border-b border-white/10 ">
            <h2 className="text-white text-xl font-semibold  pb-2 ">
              Arkadaşlar
            </h2>
          </div>
          <div className="py-2 flex flex-col gap-2 overflow-y-auto custom-scrollbar">
            {loadingUsers ? (
              <div className="flex flex-col items-center justify-center py-4">
                <Loading w="40" h="40" color="white" />
              </div>
            ) : (
              <>
                <div
                  onClick={() => setSelectedUser(null)} 
                  className="py-1 px-3 rounded-lg hover:transition hover:duration-200 cursor-pointer bg-linear-to-b from-[#ffffff]/20 via-transparent to-[#ffffff]/20 border border-gray-800 text-white transition-colors hover:bg-white/10">
                  <p>Genel Sohbet</p>
                </div>

                {users.map((user) => (
                  <div
                    key={user.id}
                    className={`py-1 px-3 rounded-lg cursor-pointer hover:transition hover:duration-200 bg-linear-to-b from-[#ffffff]/20 via-transparent to-[#ffffff]/20 text-white transition-colors border border-gray-800
                    ${selectedUser === user.nickname ? 'bg-gray-600 font-bold' : 'hover:bg-white/10'}`}
                    onClick={() => handleUserSelect(user.nickname)}
                  >
                    <div
                      className="flex justify-between items-center">

                      <p className="text-white font-medium">{user.nickname}</p>
                      <span className="text-gray-400 text-xs">
                        {formatTime(user.lastSeen)}
                      </span>
                      <div id='ntf' className="w-4 h-4 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>

        <div className="w-full h-full flex flex-col items-center py-4 gap-5 overflow-y-auto ">
          <div className="w-full md:px-12 px-4 flex justify-between items-center shrink-0">

            {selectedUser && selectedUser !== "" && (
              <div className="p-4 md:px-10 bg-gray-300/20 rounded-2xl border border-white/30 ">
                <p className="text-white " >{selectedUser}</p>
              </div>
            )}
            {(selectedUser === null || selectedUser === "") && (
              <div className={`p-4 md:px-10 bg-gray-300/20 rounded-2xl border border-white/30 ${selectedUser === "" ? 'opacity-0' : ''}`}>
                <p className="text-white ">{selectedUser === null ? 'Genel Sohbet' : ''}</p>
              </div>
            )}

            <Button
              className="bg-linear-to-b from-[#ffffff]/10 via-transparent to-[#ffffff]/10 hover:bg-linear-to-b hover:transition hover:duration-200 hover:from-[#ffffff]/15 hover:via-transparent hover:to-[#ffffff]/15 border "
              onClick={onLogout}
              variant="secondary"
              text={"Log Out"}
            />
          </div>


          {isChatWindowVisible && (
            <>
              <ChatWindow
                messages={filteredMessages}
                nickname={nickname}
                selectedUser={selectedUser}
                className="grow min-w-2xl"
              />

              <div className="w-full flex justify-center shrink-0">
                <MessageInput
                  nickname={nickname}
                  selectedUser={selectedUser === null ? undefined : selectedUser}
                />
              </div>
            </>
          )}

        </div>
      </div>
    </ChatBG>
  );
}