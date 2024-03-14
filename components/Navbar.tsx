
import Link from 'next/link'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { XIcon, MenuIcon } from "@heroicons/react/outline"
import ToggleButton from "./ToggleButton";
import Image from 'next/image';
import logo from '../images/logo.png'

// const navigation = [
//   {name: 'Home', link: '/'},
//   {name: 'Blog', link: 'https://google.com'}
// ]

export default function Navbar() {
  return (
    <>
      <Disclosure as = "nav" className="sticky top-0 py-2 z-10 bg-white-700 dark:bg-black-700 backdrop-filter backdrop-blur-lg bg-opacity-30 firefox:bg-opacity-90 border-b border-gray-200 dark:border-gray-600">
        {({open}) => (
          <>
            <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8 ">
              <div className="relative flex items-center justify-between h-16 ">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-black-700 focus:outline-none focus:ring-2 focus:ring-inset dark:focus:ring-white focus:ring-black">
                  <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                  <Link href="/" passHref>
                  <Image
                    className="lg:block h-10 w-auto"
                    src={logo}
                    alt="Logo"
                  />
                </Link>
                  </div> 
                  <div className="hidden sm:block lg:pl-20 lg:ml-52 md:ml-52 sm:ml-32">
                    <div className="flex space-x-3">
                      {/* {navigation.map((item) => (
                        <Link href={item.link} key={item.toString()} legacyBehavior passHref>
                          <a 
                            className= "cursor-pointer text-black-700 dark:text-white hover:bg-blue-600 hover:text-white dark:hover:text-black px-3 py-3 rounded-md text-lg font-Do font-regular"
                          > {item.name}
                          </a>
                        </Link>
                      ))} */}
                        <Link href= "/" legacyBehavior passHref>
                          <a
                            target="_blank"
                            className="cursor-pointer text-black-700 dark:text-white hover:bg-blue-600 px-3 py-3 rounded-md text-lg font-Do font-regular"
                          >
                            Home
                          </a>
                        </Link>        
                        <Link href= "https://guru9607.hashnode.dev/" legacyBehavior passHref>
                          <a
                            target="_blank"
                            className="cursor-pointer text-black-700 dark:text-white hover:bg-blue-600 hover:text-white px-3 py-3 rounded-md text-lg font-Do font-regular"
                          >
                            Blog
                          </a>
                        </Link>                      
                        <Link href= "https://drive.google.com/file/d/1HqD3_qYBnQSerVCraRdYqRaxpf2kJDXP/view?usp=sharing" legacyBehavior passHref>
                          <a
                            target="_blank"
                            className="bg-orange text-white dark:text-black px-3 py-2 rounded-md font-RobotoC text-1xl "
                          >
                            Resume
                          </a>
                        </Link>
                    </div>  
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Toggle Button */}
                  <div>
                    <ToggleButton />
                  </div>
              </div>
              </div>
            </div>  

            <Disclosure.Panel className= "sm-hidden">
              <div className='px-2 pt-2 pb-3 space-y-1'>          
                {/* {navigation.slice(0,4).map((item) => (
                  <Link href={item.link} key={item.toString()} passHref>
                      <Disclosure.Button
                        as="a"
                        key={item.name}
                        className="text-black-700 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-lg font-Dosis font-base"
                      >
                          {item.name}
                      </Disclosure.Button>
                  </Link>
                ))} */}
                 <Link href='/' passHref>
                <Disclosure.Button
                  as="a"
                  className='text-black-700 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-lg font-Dosis font-base'
                >
                  Home
                </Disclosure.Button>
                </Link>
                <Link href='https://guru9607.hashnode.dev/' passHref>
                <Disclosure.Button
                  as="a"
                  className='text-black-700 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-lg font-Dosis font-base'
                >
                  Blog
                </Disclosure.Button>
                </Link>               
                <Link href='https://drive.google.com/file/d/1oyS3t0BvdK8wnRsy1-stoQAWZ1ChOx2r/view?usp=share_link' passHref>
                <Disclosure.Button
                  as="a"
                  className='bg-orange text-white dark:text-black block px-3 py-2 rounded-md text-lg font-RobotoC font-regular'
                >
                  Resume
                </Disclosure.Button>
                </Link>
              </div>
            </Disclosure.Panel>          
          </>
        )}
      </Disclosure>
    </>
  )
}
