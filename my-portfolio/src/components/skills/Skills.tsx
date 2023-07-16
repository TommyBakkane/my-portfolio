import "../../styles/Skills.css"
import * as BiIcons from "react-icons/bi"
import {TbBrandKotlin} from "react-icons/tb"

export const Skills = () => {
    return(
        <section className="skills-container" id="about">
            <div className="skill-info">
                <h2 className="sub-title__skills">Skills</h2>
                <p className="skill-description">I have experience with the following languages and frameworks:</p>
                <ul className="skill-list">
                    <li className="skill-item">HTML <BiIcons.BiLogoHtml5/></li>
                    <li className="skill-item">CSS <BiIcons.BiLogoCss3 /></li>
                    <li className="skill-item">JavaScript <BiIcons.BiLogoJavascript /></li>
                    <li className="skill-item">React <BiIcons.BiLogoReact /></li>
                    <li className="skill-item">Java <BiIcons.BiLogoJava /></li>
                    <li className="skill-item">Kotlin <TbBrandKotlin /></li>
                </ul>
            </div>
        </section>
    )
}