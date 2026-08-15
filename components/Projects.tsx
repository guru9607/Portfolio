import Image from "next/image"
import { Fade } from "react-awesome-reveal"
import logo from "../images/guru-logo-bl.png"
import github from "../images/github-api.png"
import aws from "../images/aws.png"
import swiggy from "../images/react-swiggy.jpg"
import Cards from "./cards"

const Projects = () => {
  const projects = [       
    {
      id:1,
      title: "Distributed Patient Management System",
      description: "Distributed healthcare application with Spring Boot microservices for Auth, Patient Management, Billing & Analytics. Uses Apache Kafka, gRPC, Docker, AWS ECS Fargate, and Amazon RDS PostgreSQL.",
      link: "#",
      image: aws,
      height: "240px",
      width: "350px",
      tags: ['Spring Boot', 'Kafka', 'gRPC', 'AWS ECS', 'Docker', 'PostgreSQL']
    },
    {
      id:2,
      title: "interACT Global Platform",
      description: "Live event management platform serving 40+ facilitators across 150+ events & 4,000+ participant registrations. Built with Next.js, Supabase Auth, PostgreSQL RLS, and automated certificate generation.",
      link: "https://theinteract.org",
      image: logo,
      height: "240px",
      width: "350px",
      tags: ['Next.js', 'PostgreSQL', 'Supabase', 'Tailwind CSS']
    },
    {
      id:3,
      title: "High-Scale Payment Engine @ Yardi",
      description: "Refactored payment processing with Factory pattern & Spring singleton HTTP client (P99 latency 1.8s -> 120ms). Implemented Autopay with Redis distributed locking and keyset pagination.",
      link: "#",
      image: logo,
      height: "240px",
      width: "350px",
      tags: ['Java', 'Spring Boot', 'Redis', 'MySQL', 'AWS S3']
    },
    {
      id:4,
      title: "Tastmap - Live Food Ordering App",
      description: "Dynamic React application integrating Swiggy's live API with custom hooks for state management and modular UI components.",
      link: "https://github.com/guru9607/Food-ordering-app",
      image: swiggy,
      height: "240px",
      width: "350px",
      tags: ['React', 'REST API', 'Tailwind CSS']
    },
    {
      id:5,
      title: "GitHub Repo Automation Manager",
      description: "CLI tool leveraging GitHub API and Shell Scripting for automated repository access controls and team resource management.",
      link: "https://github.com/guru9607/Shell-Scripting-Projects",
      image: github,
      height: "240px",
      width: "350px",
      tags: ['Bash', 'GitHub API', 'DevOps']
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
