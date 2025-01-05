import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

function Page5(){
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(function(){
        gsap.from(".rotate1",{
            transform:'rotateX(-90deg)',
            duration:1,
            opacity:0,
            stagger:1,
            scrollTrigger:{
                trigger:'.rotate1',
                start:"top 100%",
                end:'top -400%',
                scrub:3,
                once:true
            }     
        });
    });

    return (
        <div id="section1">
            <div className="rotate1">
                <h1 className="text-black font-[anzo] text-center text-[40vw] leading-[34vw] mt-20">HELPING</h1>
            </div>
            <div className="rotate1">
                <h1 className="text-gray-300 font-[anzo] text-center text-[40vw] leading-[34vw]">MY</h1>
            </div>
            <div className="rotate1">
                <h1 className="text-black font-[anzo] text-center text-[40vw] leading-[34vw]">CLIENTS</h1>
            </div>
            <div className="rotate1">
                <h1 className="text-black font-[anzo] text-center text-[40vw] leading-[34vw]">TO ACHIEVE</h1>
            </div>
            <div className="rotate1">
                <h1 className="text-gray-300 font-[anzo] text-center text-[40vw] leading-[34vw]">THEIR</h1>
            </div>
            <div className="rotate1">
                <h1 className="text-black font-[anzo] text-center text-[40vw] leading-[34vw] mb-20">DREAMS!</h1>
            </div>
        </div>
    );
}
export default Page5