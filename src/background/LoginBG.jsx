import LightRays from "../animate/LightRays.jsx";

export default function LoginBG({ children, onSubmit}) {
    return (
        <form className="fixed inset-0 overflow-hiddenl bg-black -z-20" onSubmit={onSubmit}>
            <LightRays
                raysOrigin="top-center"
                raysColor="#ffffff"
                raysSpeed={1.5}
                lightSpread={0.8}
                rayLength={2}
                followMouse={true}
                mouseInfluence={0.1}
                noiseAmount={0.1}
                distortion={0.05}
                className="custom-rays"
            />
            <div className="  w-full flex justify-center items-center overflow-y-hidden ">
                {children}
            </div>

        </form>

    );
}
