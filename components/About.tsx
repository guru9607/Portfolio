import Image from 'next/image'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import coder from "../images/coder.gif"


const About = () => {
  return (
    <div className="container px-8 py-5 mx-auto max-w-5xl mb-24">
      <Fade direction="down" triggerOnce delay={400}>
      <h1 className="text-center font-Dosis text-3xl font-semibold text-gray-900 lg:text-5xl md:text-5xl dark:text-white"><a className="text-orange">About</a> <a className="text-blue-600">\('O')/</a></h1>
      </Fade>
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="flex-shrink-0 pt-10 flex justify-center lg:pt-16 lg:px-4 md:mt-2 mb-4 md:pt-5 sm:pt-5">
          <Fade direction="down" triggerOnce delay={200}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <Image
                  src={coder}
                  alt="coding gif"
                  priority={true}
                  className="rounded-lg relative border border-gray-200 dark:border-gray-800 shadow-2xl"
                  width={350}
                  height={350}
              />
            </div>
          </Fade>
        </div>
        <Fade direction="up" triggerOnce delay={200}>
          <div className="lg:px-4 lg:mt-12 ">
            <div className="font-RobotoC font-light mt-5 dark:text-white lg:text-2xl md:text-2xl sm:text-1xl text-justify">
              <p className="mb-5">Hello Everyone &#128075;,</p>
              <p className="mt-5">I'm a Software Engineer with a passion for building scalable, high-impact applications. Currently, I'm at <strong>Yardi Software</strong> (joined July 2024), where I specialize in <strong>React, .NET, and MySQL</strong>.</p>
              <p className="mt-5">My work primarily focuses on architecting and implementing mission-critical features for customer portals. This includes high-complexity modules like <strong>Space Selection, Auto Payment systems, and secure Document Uploads</strong>. I enjoy the challenge of bridging seamless frontend experiences with robust backend microservices.</p>
              <p className="mt-5">Before Yardi, I spent my college years honing my skills as a freelance developer at Digionus, leading teams to build e-commerce platforms and modern web solutions. This foundation in full-stack development and client-side problem-solving drives my approach today.</p>
              <p className="mt-5 mb-5"> I'm always eager to discuss emerging tech or collaborate on innovative projects. Let's connect!</p>
            </div>
          </div>
        </Fade>
      </div>
      <hr className="mt-10 bg-gray-400 -mb-20 dark:bg-gray-800"/>
    </div>
  )
}

export default About
