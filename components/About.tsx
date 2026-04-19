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
              <p className="mb-5">Namaste! I am Guruprasad Gaikwad 👋🏻</p>
              <p className="mt-5">I'm a Software Engineer at Yardi Systems, where I've been building features for enterprise property management platforms since July 2024 - things like automated payment systems, portal migrations, and document workflows that run at scale for lakhs of students.</p>
              <p className="mt-5">Got formally recognized for my work, shipped an end-to-end Autopay feature, and was part of a live migration from VB.NET to C# .NET on a platform people actually depend on daily.</p>
              <p className="mt-5">Outside of work, I'm the Technical Director at interACT - a UN-aligned youth initiative where I built their entire platform from scratch. Totally pro-bono, but one of the most rewarding things I've worked on.</p>
              <p className="mt-5 mb-5">I'm always looking to grow - currently going deeper on system design and C#/.NET. If you're working on something interesting or just want to connect, feel free to reach out.</p>
            </div>
          </div>
        </Fade>
      </div>
      <hr className="mt-10 bg-gray-400 -mb-20 dark:bg-gray-800"/>
    </div>
  )
}

export default About
