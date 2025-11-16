
import ChatBG from "../background/ChatBG.jsx";
import ChatWindow from "../components/ChatWindow.jsx";
import MessageInput from "../components/MessageInput.jsx";
import { useFetchMessages } from '../hooks/useFetchMessages.js'; 
import Button from '../components/Button.jsx';


export default function ChatPage({ nickname , onLogout }) {

  const { messages } = useFetchMessages(); 


  return (
    <ChatBG>
      <div className="z-10 w-full h-[90vh] md:w-[50%] max-w-4xl flex flex-col items-center py-4 gap-6">

        <div className="w-full md:px-12 px-4 flex justify-between items-center shrink-0"> 
          <img src="/TheIcon.svg" alt="Logo" className="md:w-38 w-30 pointer-events-none" />
          <div className="p-4 md:px-10 bg-gray-300/20 rounded-2xl border border-white/30 "> <p className="text-white " >{nickname}</p> </div>
          <Button
            onClick={onLogout}
            variant="secondary"
            text={"Log Out"}
          />  
           
          
        </div>

        <ChatWindow 
          messages={messages} 
          nickname={nickname} 
          className="grow w-full " 
        />

        <div className="w-full flex justify-center shrink-0"> 
          <MessageInput nickname={nickname} /> 
        </div>

      </div>
    </ChatBG>
  );
}