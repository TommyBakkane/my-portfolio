import * as AiIcon from "react-icons/ai"
import "../styles/Footer.css"

export const Footer = () => {

    return(
        <div className="footer-container">
            <h1 className="footer-title">Tommy Bakkane</h1>
            <ul className="social-icon">
                <li className="social-item"><a href="https://github.com/TommyBakkane"><AiIcon.AiFillGithub/></a></li>
                <li className="social-item"><a href="https://www.linkedin.com/in/tommy-bakkane-876733213/"><AiIcon.AiFillLinkedin/></a></li>
            </ul>
        </div>
    )
}