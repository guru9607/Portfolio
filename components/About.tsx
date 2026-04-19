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
              <p className="mb-5">Hey there! 👋</p>
              <p className="mt-5">I'm a Software Engineer passionate about crafting elegant solutions to complex problems. I love building applications that not only work beautifully but also make a real impact for users and organizations.</p>
              <p className="mt-5">As a <strong>Software Engineer at Yardi Systems</strong> (since July 2024), I work with <strong>React, .NET, and MySQL</strong> to engineer mission-critical features for enterprise property management platforms. I focus on building robust, scalable modules including <strong>Automated Payment Systems, Portal Migrations, and secure Document Workflows</strong>—the kind of work that powers real business needs.</p>
              <p className="mt-5">Beyond my day job, I serve as <strong>Technical Director</strong> at <strong>interACT</strong>, a global UN-aligned youth initiative. This role has been incredibly rewarding—I architected and built their entire digital platform from scratch, helping create meaningful connections across borders.</p>
              <p className="mt-5 mb-5">I'm genuinely excited about emerging technologies and love collaborating on projects that push boundaries. If you'd like to discuss tech, explore new ideas, or work on something together, I'd love to hear from you!</p>
            </div>
          </div>
        </Fade>
      </div>
      <hr className="mt-10 bg-gray-400 -mb-20 dark:bg-gray-800"/>
    </div>
  )
}

export default About
