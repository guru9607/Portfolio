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
              <p className="mt-5">I'm a Software Development Engineer - I at Yardi Systems in Pune, specializing in Java, Spring Boot, REST APIs, and database optimization. Since July 2024, I've engineered high-scale backend solutions, refactoring payment processing to cut P99 latency from 1.8s to 120ms and implementing Redis distributed locking for Autopay systems.</p>
              <p className="mt-5">I hold a B.Tech in Computer Science from PCET's NCER (CGPA: 8.51). Beyond my core engineering responsibilities, I serve as Technical Director at interACT — a UN-aligned youth initiative where I built a global event platform empowering 40+ facilitators worldwide across 150+ events and 4,000+ registrations using Next.js and Supabase PostgreSQL RLS.</p>
              <p className="mt-5 mb-5">I'm passionate about distributed systems, event-driven architectures with Apache Kafka, and cloud infrastructure on AWS. Feel free to connect!</p>
            </div>
          </div>
        </Fade>
      </div>
      <hr className="mt-10 bg-gray-400 -mb-20 dark:bg-gray-800"/>
    </div>
  )
}

export default About
