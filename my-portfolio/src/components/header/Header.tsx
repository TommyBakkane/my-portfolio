import "./Header.css";

export const Header = () => {

    return (
        <section className="header-container">
            <nav className="nav-container">
                <ul className="nav-list">
                    <li className="nav-item">Home</li>
                    <li className="nav-item">About</li>
                    <h1 className="header-title">My Portfolio</h1>
                    <li className="nav-item">Projects</li>
                    <li className="nav-item">Contact</li>
                </ul>
            </nav>
        </section>
    )

}