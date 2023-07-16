import { MutableRefObject, useRef } from "react";
import "../../styles/Header.css";
import {FaBars, FaTimes} from "react-icons/fa";

export const Header = () => {
    const navRef = useRef() as MutableRefObject<HTMLInputElement>;

    const showNavbar = () => {
        navRef.current.classList.toggle("responsiv_nav");
    }

    return (
        <section className="header-container">
            <h1 className="header-title"><a href="#">My Portfolio</a></h1>
            <nav className="nav-container" ref={navRef}>
                <a onClick={showNavbar} className="nav-item" href="#home">Home</a>
                <a onClick={showNavbar} className="nav-item" href="#skills">Skills</a>
                <a onClick={showNavbar} className="nav-item" href="#projects">Projects</a>
                <a onClick={showNavbar} className="nav-item" href="#contact">Contact</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </section>
    )

}