
import * as BsIcon from "react-icons/bs";
import {MdOutlineKeyboardArrowRight} from "react-icons/md"

export const Home = () => {
    
        return (
            <section id="home" className="h-screen w-full bg-stone-50">
                <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                    
                    <div className="flex flex-col justify-center h-full">
                        <h1 className="text-4xl sm:text-8xl font-bold justify-center">Hi, I'm Tommy</h1>
                        <h2 className="text-4xl sm:text-7xl text-gray-400 ">Full Stack Developer</h2>
                        <p className="text-gray-500 py-4 max-w-md">I'm a Full Stack Developer based in Oslo, Norway. I have a passion for web development and love to create for web and mobile devices.</p>
                        <div>
                        <button className="group text-white w-fit px-6 py-4 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                                </span>
                        </button>
                    </div>
                    </div>
                    
                    <div >
                        <BsIcon.BsPersonFill className="rounded-2xl mx-auto w-2/3 md:w-full text-8xl text-white" />
                    </div>
                    
                </div>
            
            </section>
        )
}