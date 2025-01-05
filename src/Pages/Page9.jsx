function Page9(){
    return (
        <div className="h-screen p-3">
            <div className="relative bg-black overflow-hidden rounded-3xl h-full w-full">
                <video loop muted autoPlay className="w-full" src="/src/assets/video5.mp4"></video>
                <div className="text-white z-10 text-[12vw] absolute w-full text-center -top-2 font-[anzo]">
                    <h1 className="leading-[12vw] text-center">PERSONAL</h1>
                    <h1 className="text-zinc-400 -mt-5 text-[1.3vw] leading-none font-[anzo3]">Honesty,Communication,Puntuality</h1>
                    <h1 className="leading-[14vw]">PROFESSIONAL</h1>
                    <h1 className="text-zinc-400 -mt-5 text-[1.3vw] leading-none font-[anzo3]">PhotoShop,Wix-Stdio,Figma</h1>
                    <h1 className="leading-[14vw]">ADDITIONAL</h1>
                    <h1 className="text-zinc-400 -mt-5 text-[1.3vw] leading-none font-[anzo3]">Business Development,Branding,SEO</h1>
                </div>
                <img className="absolute top-10 right-40 z-0 h-[80vh]" src="/src/assets/video7.gif"/>
            </div>
        </div>
    );
}
export default Page9