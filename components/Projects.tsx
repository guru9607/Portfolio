import Image from "next/image"
import { Fade } from "react-awesome-reveal"
import logo from "../images/guru-logo-bl.png"
import express from "../images/express.png"
import fr from "../images/facebook-react.png"

import Cards from "./cards"

const Projects = () => {
  const projects = [       
    {
        id:1,
        title: "A facebook - clone - Backend",
        description: "A backend server made for facebook clone website, made with NodeJs Express framework and MongoDB for database management",
        link: "https://github.com/guru9607/facebook-clone-backend",
        image: express,
        height: "240px",
        width: "350px",
        tags: ['RestAPI', 'NodeJS', 'Express', 'MongoDB']
    },
    {
        id:2,
        title: "Facebook - clone - Frontend",
        description: "A frontend webapp which has functionalities like facebook made with React.",
        link: "https://github.com/guru9607/facebook-clone-frontend",
        image: fr,
        height: "240px",
        width: "350px",
        tags: ['reactJs', 's']
    },
    {
        id:3,
        title: "Personal Portfolio",
        description: "Personal Portfolio website created with NextJs, Tailwind CSS and TypeScript.",
        link: "https://github.com/guru9607/Portfolio",
        image: logo,
        height: "240px",
        width: "350px",
        tags: ['nextJs', 'tailwind', 'typescript']
    },
  ]
  return (
    <div className="container px-8 py-3 mx-auto max-w-5xl">
      <Fade direction="down" triggerOnce>
        <h1 className="text-center mt-6 font-Dosis text-3xl font-semibold text-gray-900 lg:text-5xl md:text-5xl dark:text-white md:mb-12 lg:mb-28 "><a className="text-orange">Projects</a> <a className="text-blue-600">\(◦'⌣'◦)/</a></h1>
      </Fade>   
      <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:-mt-20 ">
        <Fade direction="up" triggerOnce>
          {projects.map((item: any) => (
            <Cards title={item.title} key={item.id} link={item.link} description={item.description} image={item.image} tags={item.tags} height={item.height} width={item.width} />
          ))}
        </Fade>
      </div> 
      
    </div>
  )
}

export default Projects
