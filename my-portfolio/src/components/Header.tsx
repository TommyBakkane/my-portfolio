import { useState } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import { Link } from "react-scroll";
import * as AiIcon from "react-icons/ai"

export const Header = () => {

    const [nav, setNav] = useState(false)
    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'skills'
        },
        {
            id: 3,
            link: 'projects'
        },
        {
            id: 4,
            link: 'contact'
        }
    ]

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 bg-stone-50 text-gray-500 fixed">
            <div className="flex py-2 ">
                <div className="text-4xl mx-6"><a href="https://github.com/TommyBakkane"><AiIcon.AiFillGithub className="text-gray-600"/></a></div>
                <div className="text-4xl mx-6"><a href="https://www.linkedin.com/in/tommy-bakkane-876733213/"><AiIcon.AiFillLinkedin className="text-gray-600"/></a></div>
            </div>

            <ul className="hidden md:flex">
                {links.map(({id, link}) => (
                    <li
                        key={id}
                        className="text-2xl px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
                            <Link 
                            to={link} 
                            smooth 
                            duration={500}
                            className="text-gray-500"
                            >{link}</Link>
                        </li>
                ))}
            </ul>

            <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-stone-50 text-gray-500">
                {links.map(({id, link}) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-6 text-4xl">
                                <Link 
                                onClick={() => setNav(!nav)} 
                                to={link} 
                                smooth 
                                duration={500}
                                className="text-gray-500">
                                    {link}
                                    </Link>
                            </li>
                    ))}
            </ul>
            )}
        </div>
    )

}