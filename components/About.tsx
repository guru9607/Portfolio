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
          <div className="lg:px-3 lg:mt-12 ">
            <div className="font-Poppins font-normal mt-5 text-gray-700 dark:text-gray-300 lg:text-xl md:text-xl sm:text-lg leading-relaxed text-left">
              <p className="mb-5">Hello Everyone 👋,</p>
              <p className="mt-5">I'm a Software Engineer with a passion for building scalable, high-impact applications. Currently, I'm at <strong>Yardi Systems</strong> (joined July 2024), where I specialize in <strong>React, .NET, and MySQL</strong>.</p>
              <p className="mt-5">I also serve as the <strong>Technical Director</strong> of <strong>interACT</strong>, a UN-aligned global youth initiative, where I architected and built their core digital platform from the ground up.</p>
              <p className="mt-5">At Yardi, my work focuses on engineering mission-critical features for enterprise property management portals, including complex modules like <strong>Automated Payments, Portal Migrations, and secure Document Workflows</strong>.</p>
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
