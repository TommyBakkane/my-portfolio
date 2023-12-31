export const Projects = () => {

    const projects = [
        {
            id: 1,
            src: require('../../src/assets/images/placeholder-1.jpeg')
        },
        {
            id: 2,
            src: require('../../src/assets/images/placeholder-2.jpeg')
        },
        {
            id: 3,
            src: require('../../src/assets/images/placeholder-3.jpeg')
        },
        {
            id: 4,
            src: require('../../src/assets/images/placeholder-4.jpeg')
        },
    ]
    

    return (
        <section id="projects" className=" snap-start flex-shrink-0 bg-stone-50 w-screen h-screen">

            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="py-6">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Projects</p>
                    <p className="py-6">Check out some of my work</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 overflow-y-auto overflow-x-hidden h-4/6 ">
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