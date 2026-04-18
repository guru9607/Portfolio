
import { Fade } from "react-awesome-reveal"
import Link from "next/link"
import Image from "next/image"
import profile from "../images/pp.jpg"
import { SiHashnode } from "react-icons/si"
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiFillMail } from "react-icons/ai"

const Intro = () => {
  return (
    <div className='container px-8 py-5 mx-auto max-w-5xl'>
      <div className="lg:space-x-5 mb-8 lg:flex lg:flex-row items-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="lg:px-4 lg:mt-12 flex-1">
          <Fade direction="down" triggerOnce delay={200}>
            <h1 className='font-Dosis text-3xl font-semibold text-gray-900 lg:text-5xl dark:text-white'>
              <a className="text-blue-600">Guruprasad </a><a className="text-blue-600">Gaikwad</a>
            </h1>
          </Fade>
          
          <div className="font-mono mt-5 dark:text-gray-300 lg:text-lg md:text-lg sm:text-base bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm relative group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-8 bg-gray-200/50 dark:bg-gray-800/50 flex items-center px-4 space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span className="text-[10px] text-gray-400 font-sans ml-2">portfolio.py</span>
            </div>
            
            <div className="mt-6">
              <Fade direction="up" triggerOnce delay={300}>
                <p>
                  <span className="text-blue-600 dark:text-blue-400">from</span> guru9607 <span className="text-blue-600 dark:text-blue-400">import</span> *
                </p>
              </Fade>
              <Fade direction="down" triggerOnce delay={500}>
                <p className="mt-2">
                  guru9607 = [<span className="text-orange-600 dark:text-orange-400">'React'</span>, <span className="text-orange-600 dark:text-orange-400">'.NET'</span>, <span className="text-orange-600 dark:text-orange-400">'MySQL'</span>, <span className="text-orange-600 dark:text-orange-400">'AWS'</span>]
                </p>
              </Fade>
              <Fade direction="up" triggerOnce delay={700}>
                <p className="mt-2 text-wrap">
                  guru9607.append(<span className="text-orange-600 dark:text-orange-400">'Software Engineer @ Yardi'</span>)
                </p>
                <p className="mt-3 text-gray-400 text-sm italic"># Driven by code, inspired by impact</p>
              </Fade>
            </div>
          </div>

          <div className="lg:mr-10 py-8 flex justify-center lg:justify-start gap-6">
            <Fade direction="up" triggerOnce delay={900}>
              <Link href="mailto:guruprasadgaikwad8@gmail.com" legacyBehavior passHref><a target="_blank" className="text-orange hover:scale-110 transition-transform"><AiFillMail size={35}/></a></Link>
            </Fade>
            <Fade direction="up" triggerOnce delay={900}>
              <Link href="https://www.linkedin.com/in/guru9607/" legacyBehavior passHref><a target="_blank" className="text-blue-600 hover:scale-110 transition-transform"><AiFillLinkedin size={35}/></a></Link>
            </Fade> 
            <Fade direction="up" triggerOnce delay={900}>
              <Link href="https://github.com/guru9607" legacyBehavior passHref><a target="_blank" className="text-gray-900 dark:text-white hover:scale-110 transition-transform"><AiFillGithub size={35}/></a></Link>
            </Fade>
            <Fade direction="up" triggerOnce delay={900}>
              <Link href="https://twitter.com/Guru9272" legacyBehavior passHref><a target="_blank" className="text-blue-400 hover:scale-110 transition-transform"><AiFillTwitterCircle size={35}/></a></Link>
            </Fade>
            <Fade direction="up" triggerOnce delay={900}>
              <Link href="https://blog.guruprasad.codes/" legacyBehavior passHref><a target="_blank" className="text-pink-600 hover:scale-110 transition-transform"><SiHashnode size={35} /></a></Link>
            </Fade>
          </div>
        </div>

        <Fade direction="down" triggerOnce delay={200}>
          <div className="lg:mt-12 lg:pl-20 mb-8 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-orange rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <Image
                  src={profile}
                  alt="Profile Pic"
                  priority={true}
                  className="rounded-full relative border-4 border-white dark:border-gray-800 shadow-xl"
                  width={280}
                  height={280}
                />
            </div>
          </div>
        </Fade>
      </div>
      <hr className="mb-5 bg-gray-300 dark:bg-gray-800"/>
    </div>
  )
}

export default Intro