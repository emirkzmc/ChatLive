import React from "react";

export default function ChatBG({ children }) {
    return (
            <div className="relative min-h-screen w-full bg-[#313030] overflow-hidden flex items-center justify-center p-4">
                <div className="absolute inset-0 flex">
                    <div className="w-[50%] z-10 gap-56 items-center flex flex-col justify-center   ">
                        <div className="w-96 h-96  bg-[#D9D9D9] rounded-full blur-3xl "></div>
                        <div className=" w-96 h-96 bg-[#D9D9D9] rounded-full  blur-3xl"></div>
                    </div>
                    <div className="w-[50%] z-10 gap-56 items-center flex flex-col justify-center   ">
                        <div className="w-96 h-96  bg-[#D9D9D9] rounded-full blur-3xl "></div>
                        <div className=" w-96 h-96 bg-[#D9D9D9] rounded-full  blur-3xl"></div>
                    </div>
                </div>
                <div className="relative z-20 w-full flex justify-center items-center"> 
                {children}
                </div>

            </div>
    );
}