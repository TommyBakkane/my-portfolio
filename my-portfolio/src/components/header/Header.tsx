import "../../styles/Header.css"

export const Header = () => {

    return (
        <section className="header-container">
            <nav className="nav-container">
                <ul className="nav-list">
                    <li className="nav-item"><a href="#home">Home</a></li>
                    <li className="nav-item"><a href="#about">About</a></li>
                    <h1 className="header-title"><a href="#">My Portfolio</a></h1>
                    <li className="nav-item"><a href="#projects">Projects</a></li>
                    <li className="nav-item"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </section>
    )

}