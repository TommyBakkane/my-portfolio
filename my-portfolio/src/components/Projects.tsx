import React from "react";
import { idText } from "typescript";

export const Projects = () => {

    const projects = [
        {
            id: 1,
            src: require('../assets/img/placeholder-1.jpg')
        },
        {
            id: 2,
            src: require('../assets/img/placeholder-2.jpg')
        },
        {
            id: 3,
            src: require('../assets/img/placeholder-3.jpg')
        },
        {
            id: 4,
            src: require('../assets/img/placeholder-4.jpg')
        },
    ]

    return (
        <section id="projects" className="bg-stone-50 w-full md:h-screen">

            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="py-6">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Projects</p>
                    <p className="py-6">Check out some of my work</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                {
                projects.map(({id, src}) => (
                    <div key={id} className="rounded-lg">
                        <img 
                            src={src} 
                            alt="placeholder"
                            className="rounded-md duration-200 hover:scale-105"    
                        >
                        </img>
                        <div className="flex items-center justify-center">
                            <button className="w-1/2 px-6 py-3 m-4 duration-200">Demo</button>
                            <button className="w-1/2 px-6 py-3 m-4 duration-200">Code</button>
                        </div>
                    </div>
                ))
                }
                </div>
            </div>  
    </section>
    )
}
