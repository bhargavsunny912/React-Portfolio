function Page7(){
    return (
        <div className="h-screen p-3">
            <div className="relative bg-black overflow-hidden rounded-3xl h-full w-full">
                <video loop muted autoPlay className="w-full" src="/src/assets/video6.mp4"></video>
                <div className="text-white text-[12vw] absolute w-full text-center -top-2 font-[anzo]">
                    <h1 className="leading-[12vw] text-center">PERSONAL</h1>
                    <h1 className="text-zinc-400 -mt-5 text-[1.3vw] leading-none font-[anzo3]">Intution,Imagination,Discipline</h1>
                    <h1 className="leading-[14vw]">PROFESSIONAL</h1>
                    <h1 className="text-zinc-400 -mt-5 text-[1.3vw] leading-none font-[anzo3]">TimeManagement,Multi Tasking,Creativity</h1>
                    <h1 className="leading-[14vw]">ADDITIONAL</h1>
                    <h1 className="text-zinc-400 -mt-5 text-[1.3vw] leading-none font-[anzo3]">3D,Animation,AI Tools</h1>
                </div>
            </div>
        </div>
    );
}
export default Page7