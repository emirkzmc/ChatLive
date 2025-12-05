import Particles from "../animate/Particles";

function ChatBG({ children }) {
  return ( 

    <div className="relative min-h-screen w-full bg-[#060010] overflow-y-hidden flex items-center justify-center  " > 
    

      <div className="absolute top-0 left-0 w-full h-full ">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="relative  w-full flex justify-center items-center">
        {children}
      </div>
    </div> 
  );
}
export default ChatBG;