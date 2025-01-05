import 'remixicon/fonts/remixicon.css'

function Header(){
    return (
            <div className="fixed w-full z-10 px-8 py-20 flex flex-row items-center justify-end">
                <button className="animate-[bounce_2s_infinite] bg-black hover:bg-gray-500 text-md text-white px-10 py-2 border-4 rounded-full">Hire me</button>
                <i className="ri-menu-line text-3xl text-slate-700 ml-2"></i>
            </div>
    );
}
export default Header