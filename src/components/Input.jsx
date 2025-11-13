export default function Input({className,labelvisible=false , value, onChange}) {
    
    
    return (
        <>
        {labelvisible ? <label className="text-white ">Username</label> : ("")}
            <input type="text" placeholder="Username" class="h-[43px] md:h-12 " value={value} onChange={onChange} className={`
        placeholder:text-[20px]
        w-full
        px-6 py-4
        rounded-full
        bg-[rgba(255,255,255,0.05)]
        backdrop-blur-md
        border border-[rgba(255,255,255,0.2)]
        text-gray-300
        placeholder-gray-400
        shadow-[inset_0_0_20px_rgba(255,255,255,0.03),0_0_20px_rgba(0,0,0,0.4)]
        focus:outline-none
        focus:border-[rgba(255,255,255,0.35)]
        focus:placeholder:opacity-0
        transition-all
            ${className}
     `} />
        </>

    );
}