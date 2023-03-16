
import Link from 'next/link'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { XIcon, MenuIcon } from "@heroicons/react/outline"
import ToggleButton from "./ToggleButton";

const navigation = [
  {name: 'Home', link: '/'},
  {name: 'About', link: '#about'},
  {name: 'Skills', link: '#skills'},
  {name: 'Projects', link: '#projects'},
  {name: 'Resume', link: 'https://google.com'},
]

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
                <div className="flex-1 flex item-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex item-center">
                  <Link href="/" passHref>
                      <p>Logo</p>           
                  </Link>
                  </div> 
                  <div className="hidden sm:block lg:pl-20 ml-20 md:ml-20 sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.slice(0,4).map((item) => (
                        <Link href={item.link} key={item.toString()} legacyBehavior passHref>
                          <a 
                            className= "cursor-pointer text-black-700 dark:text-white hover:bg-blue-600 hover:text-white dark:hover:text-black px-3 py-2 rounded-md text-lg font-RobotoC font-regular text-1xl"
                          > {item.name}
                          </a>
                        </Link>
                      ))}
                      <Link href='/resume' legacyBehavior passHref>
                        <a
                          target="_blank"
                          className="bg-green-700 text-white dark:text-black px-3 py-2 rounded-md font-RobotoC text-1xl "
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
                {navigation.slice(0,4).map((item) => (
                  <Link href={item.link} key={item.toString()} passHref>
                      <Disclosure.Button
                        as="a"
                        key={item.name}
                        className="text-black-700 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-lg font-RobotoC font-regular"
                      >
                          {item.name}
                      </Disclosure.Button>
                  </Link>
                ))}
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
