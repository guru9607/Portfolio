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
            <Image
                src={coder}
                alt="coding gif"
                priority={true}
                className="rounded-sm"
                width={350}
                height={350}
            />
          </Fade>
        </div>
        <Fade direction="up" triggerOnce delay={200}>
          <div className="lg:px-4 lg:mt-12 ">
            <div className="font-RobotoC font-light mt-5 dark:text-white lg:text-2xl md:text-2xl sm:text-1xl text-justify">
              <p className="mb-5">Hello Everyonne &#128075;,</p>
              <p className="mt-5">I'm a software engineer with a passion for crafting innovative solutions that make a difference. With a background in freelancing at Digionus, I've honed my skills in HTML, Tailwind CSS, JavaScript, and WordPress, delivering tailored websites and leading teams to create robust e-commerce platforms.</p>
              <p className="mt-5">Beyond development, I have a keen interest in cloud infrastructure and automation. My experience includes architecting AWS VPC setups, implementing auto-scaling strategies, and developing AWS resource management scripts.</p>
              <p className="mt-5">I &#128150; to stay updated about emerging technologies and continuously seek opportunities to refine my skills and contribute meaningfully to projects. Let's connect and create something amazing together!</p>
              <p className="mt-5 mb-5"> Feel free to reach me out on the handles mentioned above and Thanks for visiting my website :) </p>
            </div>
          </div>
        </Fade>
      </div>
      <hr className="mt-10 bg-gray-400 -mb-20 dark:bg-gray-800"/>
    </div>
  )
}

export default About
