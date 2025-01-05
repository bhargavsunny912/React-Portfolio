function Page3(){
    return (
        <div className="h-screen relative flex justify-center items-center">
            <img src="/src/assets/laptop.avif" alt="image" className="h-[80vh] z-20"/>
            <video loop muted autoPlay="true" src="/src/assets/video1.mp4" className="absolute z-10 h-[70vh] w-[45vw] object-cover"></video>
            <div className="bg-black h-0.5 w-2/3 top-[40vh] absolute"></div>
            <div className="bg-black h-0.5 w-3/4 top-[60vh] absolute"></div>
            <div className="bg-black h-0.5 w-5/6 top-[80vh] absolute"></div>
        </div>
    );
}
export default Page3