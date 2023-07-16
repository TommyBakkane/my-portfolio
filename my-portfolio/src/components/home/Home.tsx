import "../../styles/Home.css"
import * as BsIcon from "react-icons/bs";

export const Home = () => {
    
        return (
            <section className="home-container" id="home">
                <div className="image-container__home">
                    <BsIcon.BsPersonFill className="image__home" />
                </div>
                <div className="text-container__home">
                    <h1 className="title__home">Hi, I'm <span className="name">Tommy</span></h1>
                    <h2 className="sub-title__home">Full Stack Developer</h2>
                    <p className="info-text__home">I'm a Full Stack Developer based in Oslo, Norway. I have a passion for web development and love to create for web and mobile devices.</p>
                    </div>
            </section>
        )
}