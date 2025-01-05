import { useRef, useState } from "react";
import Page1bottom from "../Components/Page1bottom";
import Tilttext from "../Components/Tilttext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Page1(){

    const mouseref=useRef(null);

    const [xval,setxval]=useState(0);
    const [yval,setyval]=useState(0);

    function Mousemove(e){
        setxval((e.clientX - mouseref.current.getBoundingClientRect().x- mouseref.current.getBoundingClientRect().width/2)/40);
        setyval(-(e.clientY - mouseref.current.getBoundingClientRect().y- mouseref.current.getBoundingClientRect().height/2)/5);
    }

    useGSAP(function(){
        gsap.to(mouseref.current,{
            transform:`rotateX(${yval}deg) rotateY(${xval}deg)`,
            duration:3,
            ease:'power4.out',
        })
    },[xval,yval]);

    return (
        <div className="h-screen p-3" onMouseMove={Mousemove}>
            <div id="tilt-div" className=" bg-black h-full px-16 py-10 rounded-3xl bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1857,h_789,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ANZO.jpg)] bg-cover shadow-lg shadow-black">
                <img className="h-16" src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_99,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%2053.png" alt="Logo" />
                <Tilttext refs={mouseref}/>
                <Page1bottom />
            </div>
        </div>
    );
}
export default Page1