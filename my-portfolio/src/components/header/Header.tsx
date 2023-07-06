import "./Header.css";

export const Header = () => {

    return (
        <div className="header-container">
            <h1 className="header-title">Header</h1>

            <nav className="nav-container">
                <ul className="nav-list">
                    <li className="nav-item">Home</li>
                    <li className="nav-item">About</li>
                    <li className="nav-item">Projects</li>
                    <li className="nav-item">Contact</li>
                </ul>
            </nav>
        </div>
    )

}