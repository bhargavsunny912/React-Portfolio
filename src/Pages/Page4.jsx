function Page4(){
    return (
        <div className="relative p-3 h-screen">
            <div className="bg-black rounded-3xl h-full w-full overflow-hidden">
                <video loop autoPlay muted className="h-[160vh] w-full pl-96 pt-40 object-contain" src="/src/assets/video4.mp4"></video>
            </div>
            <h1 className="absolute -top-10 left-20 text-zinc-400 text-[20vw] font-[anzo]">WHAT </h1>
            <h1 className="absolute top-40 left-20 text-white text-[20vw] font-[anzo]">I DO</h1>
            <h1 className="absolute bottom-20 left-20 text-white font-[anzo1] text-[1.5vw]">I DESIGN AND DEVELOP</h1>
            <h1 className="absolute bottom-14 left-20 text-slate-500 font-[other] text-[1.5vw]">MODERN  | IMPACTFUL | LUXURIOUS </h1>
            <h1 className="absolute bottom-10 left-20 text-white font-[anzo1] text-[1.3vw]">Websites that seamlessly bridge your goals with the needs of the clients</h1>
        </div>
    );
}
export default Page4