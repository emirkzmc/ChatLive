export default function Button({ text , type, variant, className, onClick }) {
    let selectedVariant;
    switch (variant) {
        case "primary":
            selectedVariant = "transition hover:duration-300 hover:ease-in-out md:w-[175px] text-white xl:w-40 w-[100px] 2xl:h-[50px] xl:h-12 h-[43px] bg-[#DFDFDF]/50 border-2 border-[#B1B1B1] rounded-4xl hover:cursor-pointer  active:bg-[#8E8E8E]/50   hover:bg-[#606060]/50 text-xl";
            break;
        case "secondary":
            selectedVariant = "  px-6 py-2 bg-white/10  backdrop-blur-md border border-white border-opacity-20 rounded-lg shadow-lg text-white hover:bg-opacity-80 transition-all duration-200";
            break;
    }
    return (
        <>
            <button
                className={`cursor-pointer  ${selectedVariant} ${className}`}
                onClick={onClick}
                type={type}
            >
            {text} 
            
            </button>
        </>

    );
}