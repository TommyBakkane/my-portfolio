import "./About.css"

export const About = () => {
    return(
        <section className="about-container">
            <h1 className="title__about">About me</h1>
            <div className="info-container">
                <div className="personal-info">
                    <h2 className="sub-title__about">Personal Info</h2>
                    
                </div>
                <div className="skill-info">
                    <h2 className="sub-title__about">Skills</h2>
                    <ul className="skill-list">
                        <li className="skill-item">HTML</li>
                        <li className="skill-item">CSS</li>
                        <li className="skill-item">JavaScript</li>
                        <li className="skill-item">React</li>
                        <li className="skill-item">Java</li>
                        <li className="skill-item">Kotlin</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}