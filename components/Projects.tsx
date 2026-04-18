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
      title: "Enterprise Property Portals @ Yardi",
      description: "Spearheading the development of mission-critical customer portals for real estate giants. Engineered high-complexity modules for Space Selection, Automated Payments, and secure Document Workflows using React and .NET.",
      link: "#",
      image: logo,
      height: "240px",
      width: "350px",
      tags: ['React', '.NET', 'MySQL', 'Enterprise']
    },
    {
      id:2,
      title: "Tastmap - Live Food Ordering",
      description: "A dynamic React application integrating Swiggy's live API. Features real-time order data fetching, custom hooks for modular state management, and a responsive Tailwind CSS interface.",
      link: "https://github.com/guru9607/Food-ordering-app",
      image: swiggy,
      height: "240px",
      width: "350px",
      tags: ['React', 'Swiggy API', 'Tailwind']
    },
    {
      id:3,
      title: "AWS Secure VPC Architecture",
      description: "Architected a multi-AZ AWS VPC with public/private subnets, Auto-Scaling groups, and NAT gateways. Ensured high availability and security for cloud-native applications.",
      link: "#",
      image: aws,
      height: "240px",
      width: "350px",
      tags: ['AWS', 'VPC', 'Infrastructure']
    },
    {
      id:4,
      title: "GitHub Repo Manager",
      description: "Automated tool leveraging the GitHub API to manage repository access and user listings. Built with Bash for efficient CLI-based resource management.",
      link: "https://github.com/guru9607/Shell-Scripting-Projects",
      image: github,
      height: "240px",
      width: "350px",
      tags: ['Bash', 'GitHub API', 'Automation']
    },
    {
      id:5,
      title: "Personal Portfolio v2",
      description: "Modern portfolio designed to showcase the transition from student to enterprise software engineer. Built with Next.js, TypeScript, and a focus on premium UI/UX.",
      link: "https://github.com/guru9607/Portfolio",
      image: logo,
      height: "240px",
      width: "350px",
      tags: ['Next.js', 'TypeScript', 'Tailwind']
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
