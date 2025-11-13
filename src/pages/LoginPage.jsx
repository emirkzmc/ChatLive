import LoginBG from "../background/LoginBG";
import Button from "../components/Button";
import Input from "../components/Input";
import { useSubmit } from "../hooks/useSubmit";

export default function LoginPage({ onLogin }) {
  const {inputNickname, setInputNickname, handleSubmit} = useSubmit(onLogin);

   
  return (
    <>
     <LoginBG onSubmit={handleSubmit}>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-y-hidden"> 
        <div className="flex flex-col gap-20 md:w-[413px] " >
            <Input className={"w-full h-[50px]"} label={"Username"} value={inputNickname} onChange={(e) => setInputNickname(e.target.value)}/>
            <div className="w-full flex justify-center items-center"><Button text="LOGİN" type="submit" variant={"primary"}/></div>
        </div>
        </div>
    </LoginBG>
    </>
  );

}