import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Page10(){

    useGSAP(function(){
        gsap.to('#soft',{

        });
    });

    return (
        <div className="relative flex justify-start items-center mx-16 gap-20" data-scroll-container>
            <h1 id="soft" className="text-black font-[anzo] text-[12vw]" data-scroll data-scroll-direction="vertical" data-scroll-speed="10" data-scroll-position="top">SOFT</h1>
            <h1 className="text-black font-[anzo] text-[40vw]">SKILLS</h1>
            <img className="absolute h-[60vh] top-60 right-36" src="/src/assets/video8.gif" alt="GIF" />
        </div>
    );
}
export default Page10