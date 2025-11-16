import React from 'react'
import { useSendMessage } from '../hooks/useSendMessage'

export default function MessageInput({ nickname  }) {

    const {message, setMessage , handleSendMessage} = useSendMessage(nickname);
    return (
        <>
            <form onSubmit={handleSendMessage} className='relative w-full max-w-2xl mx-auto flex flex-row-reverse     '>
                <input type="text" value={message} className='focus:outline-[#a19f9f] hover:border-[#e6e6e6] transition hover:duration-300 rounded-4xl bg-[#D9D9D9] md:h-10 h-10 w-full border border-[#8C8C8C] pr-6 pl-5'  onChange={(e) => setMessage(e.target.value)}/>
                <button type='submit' className='cursor-pointer absolute py-1 px-2 '><img className='pointer-events-none' src="/buton.svg" alt="" /> </button>
            </form>
        </>

    )
}
        