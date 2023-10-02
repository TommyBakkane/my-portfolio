import { CIcon } from "../assets/icons/Icons";
import { CssIcon } from "../assets/icons/Icons";
import { HtmlIcon } from "../assets/icons/Icons";
import { JavaIcon } from "../assets/icons/Icons";
import { JavascriptIcon } from "../assets/icons/Icons";
import { KotlinIcon } from "../assets/icons/Icons";
import { PythonIcon } from "../assets/icons/Icons";
import { ReactIcon } from "../assets/icons/Icons";
import { SwiftIcon } from "../assets/icons/Icons";


export const Skills = () => {

    const skills = [
        {
            id: 1,
            title: "C++",
            src: <CIcon/>,
        },
        {
            id: 2,
            title: "CSS",
            src: <CssIcon/>,
        },
        {
            id: 3,
            title: "HTML",
            src: <HtmlIcon/>,
        },
        {
            id: 4,
            title: "Java",
            src: <JavaIcon/>,
        },
        {
            id: 5,
            title: "JavaScript",
            src: <JavascriptIcon/>,
        },
        {
            id: 6,
            title: "Kotlin",
            src: <KotlinIcon/>,
        },
        {
            id: 7,
            title: "Python",
            src: <PythonIcon/>,
        },
        {
            id: 8,
            title: "React",
            src: <ReactIcon/>,
        },
        {
            id: 9,
            title: "Swift",
            src: <SwiftIcon/>,
        },
    ]
    
    return(
        <section id="skills" className="bg-stone-50 w-full h-screen">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
                    <p className="py-6">I have experience with the following languages and frameworks:</p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {    
                    skills.map(({id, src, title}) => (
                        <div key={id} className="hover:scale-105 duration-500 py-2 rounded-lg">
                            <div className="w-20 mx-auto">
                                {src}
                            </div>
                            <p className="mt-4">
                                {title}
                            </p>
                        </div>
                    ))
                    }
                </div>
            </div>
        </section>
    )
    }