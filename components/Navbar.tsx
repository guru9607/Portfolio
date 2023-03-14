import { useState } from 'react'
import Link from 'next/link'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { XIcon, MenuIcon } from "@heroicons/react/outline"
import Image from 'next/image'
// import logo from "../../images/logo.svg"
import { useRouter } from 'next/router'

const navigation = [
  {name: 'Home', link: '/', current: false},
  {name: 'About', link: '#about', current: false},
  {name: 'Skills', link: '#skills', current: false},
  {name: 'Projects', link: '#projects', current: false},
  {name: 'Resume', link: 'https://google.com', current: true},
]


export default function Navbar() {
  return (
    <>
      <Disclosure as = "nav" className="sticky top-0 py-2 z-10 bg-white-700 dark:bg-black-700 backdrop-filter backdrop-blur-lg bg-opacity-30 firefox:bg-opacity-90 border-b border-gray-250 dark:border-gray-600">
        {({open}) => (
          <>
            <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8 bg-red-500">
              <div className="relative flex items-center justify-between h-16 bg-slate-400">
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
                <div className="flex-1 flex item-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex item-center">
                  <Link href="/" passHref>
                      <p>Logo</p>           
                  </Link>
                  </div> 
                  <div className="hidden sm:block lg:pl-20 ml-20 md:ml-20 sm:ml-6"></div>
                      <div className="flex space-x-4"></div>
                      {navigation.slice(0,4).map((item) => (
                        <Link href={item.link} key={item.toString()} legacyBehavior passHref>
                          <a 
                            className= "cursor-pointer text-black-700 dark:text-white hover:bg-blue-600 hover:text-white dark:hover:text-black px-3 py-2 rounded-md text-lg font-Poppins font-regular text-1xl "
                          > {item.name}
                          </a>
                        </Link>
                      ))}
                      <Link href='/resume' legacyBehavior passHref>
                        <a
                          target="_blank"
                          className="bg-green-700 text-white dark:text-black px-3 py-2 rounded-md font-Poppins text-1xl "
                        >
                          Resume
                        </a>
                      </Link>
                </div>
              </div>
            </div>  

            <Disclosure.Panel className= "sm-hidden">
              <div className='px-2 pt-2 pb-3 space-y-1'>          
                {navigation.slice(0,4).map((item) => {
                  <Link href={item.link} key={item.toString()} passHref>
                      <Disclosure.Button
                        as="a"
                        key={item.name}
                        className="text-black-700 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-lg font-Poppins font-regular"
                      >
                          {item.name}
                      </Disclosure.Button>
                  </Link>
                })}
                <Link href='/resume' passHref>
                <Disclosure.Button
                  as="a"
                  className='bg-green-700 text-white dark:text-black block px-3 py-2 rounded-md text-lg font-RobotoC font-regular'
                >
                  Resume
                </Disclosure.Button>
                </Link>
              </div>
            </Disclosure.Panel>          
          </>
        )}
      </Disclosure>
      <p>Hello</p>
    </>
  )
}
