import {SkillCard} from "./Skillcard"
import web from "../images/web.png"
import { SiTorbrowser, SiExpress, SiNextdotjs, SiOctopusdeploy } from "react-icons/si"
import { AiFillCode } from "react-icons/ai"
import { MdOutlineDesignServices } from "react-icons/md"
import { Fade } from "react-awesome-reveal"


const Skills = () => {

    const skills = [
        {
            id:1,
            title: "Web Development",
            tags: ['HTML5', 'CSS3', 'Tailwind'],
            image: web,
            icon: <SiTorbrowser />
        },
        {
            id:2,
            title: "Languages",
            tags: ['C', 'C++', 'Java', 'JavaScript', 'Python'],
            image: web,
            icon: <AiFillCode />
        },
        {
            id:3,
            title: "Backend Frameworks",
            tags: ['Spring', 'Spring-Boot'],
            image: web,
            icon: <SiExpress />
        },
        {
            id:4,
            title: "Frontend Frameworks",
            tags: ['ReactJs'],
            image: web,
            icon: <SiNextdotjs/>
        },
        {
            id:5,
            title: "Deployment",
            tags: ['Netlify', 'Vercel'],
            image: web,
            icon: <SiOctopusdeploy />
        },
        {   
            id:6,
            title: "Devops",
            tags: ['AWS', 'Docker', 'Kubernetes', 'Jenkins'],
            image: web,
            icon: <MdOutlineDesignServices />
        },
    ]
    return (
        <div className="container px-8 py-5 mx-auto max-w-5xl lg:mb-10">
        <Fade direction="down" triggerOnce = {true}>
         <h1 className="text-center font-Dosis text-3xl font-semibold text-gray-900 lg:text-5xl md:text-5xl dark:text-white md:mb-14 lg:mb-24 "><a className="text-orange">Skills</a> <a className="text-blue-600">(⌐■_■)</a></h1>
        </Fade>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:-mt-20 ">

            {skills.map((item) => (
                <Fade direction="down" triggerOnce = {true} delay={100*item.id} key={item.id}>
                <SkillCard title={item.title} key={item.id} tags={item.tags} image={item.image} icon={item.icon}/>
                </Fade>
              ))}
            </div>
            <hr className="bg-gray-400 mt-16 dark:bg-gray-800"/>
        </div>
    )
}

export default Skills;