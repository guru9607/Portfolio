import Image from "next/image"
import { Fade } from "react-awesome-reveal"
import logo from "../images/guru-logo-bl.png"
import github from "../images/Github-API.png"
import vpc from "../images/AWS_VPC.png"
import swiggy from "../images/swiggy.jpg"
import aws from "../images/aws.jpg"

import Cards from "./cards"

const Projects = () => {
  const projects = [       
      {
        id:1,
        title: "Tastmap",
        description: "Created a dynamic React food ordering app with real-time order data fetching via Swiggy API, featuring client-side routing, Tailwind CSS, and custom hooks for modular data management.",
        // link: "#",
        image: swiggy,
        height: "240px",
        width: "350px",
        tags: ['SwiggyAPI', 'React', 'Parcel']
    },
    {
        id:2,
        title: "VPC in Production",
        description: "Deployed a multi-AZ AWS VPC with public/private subnets, Auto Scaling, and NAT gateways.",
        link: "#",
        image: vpc,
        height: "240px",
        width: "350px",
        tags: ['aws', 'vpc', 'subnet', 'NAT']
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
    {
      id:4,
      title: "GitHub Repository Access Manager",
      description: "Bash script leveraging the GitHub API to retrieve and list users of a specified repository",
      link: "#",
      image: github,
      height: "240px",
      width: "350px",
      tags: ['Bash', 'GitHub API', 'cURL', 'jq parser']
    },
    {
      id:5,
      title: "AWS Resource Tracker",
      description: "Developed a script to report AWS resources and used cronjob for automation",
      link: "#",
      image: aws,
      height: "240px",
      width: "350px",
      tags: ['Bash', 'CronJob']
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
