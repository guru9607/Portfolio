import Image from "next/image"
import Link from "next/link"
import profile from "../images/pp.jpg"

const cards = (props: any) => {

  const { title, image, description, tags, height, width, link } = props;

  return (
    <div className = "flex flex-wrap place-items-center h-screen/2 lg:mr-6 md:mb-5 ">
      <div className="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-105 hover:shadow-2xl rounded-lg h-90 w-63 md:w-80 cursor-pointer m-auto hover:border-gradient-br-orange-blue-gray-50 border-gradient-br-blue-orange-gray-50 dark:border-gradient-br-blue-orange-bl dark:hover:border-gradient-br-orange-blue-bl border-transparent border-solid border-4 mb-5 mt-10">
        <Image 
          alt = {title}
          src = {image}
          priority={true}
          height = {height}
          width = {width}
          className = "dark: bg-white"
        />
        <div className="w-full p-4">
          <Link href={link} passHref>
              <p className="text-orange text-2xl font-regular font-Dosis mb-2 hover:underline">
                  {title}
              </p>

          </Link>
          <p className="text-gray-900 dark:text-white font-light font-RobotoC text-lg">
              {description}
          </p>
          <div className="flex flex-wrap justify-start items-center py-3 text-xs text-white font-light font-Dosis">
          {tags.map((tag: string, i: number) => (
            <span className="m-1 px-2 py-1 rounded bg-blue-600" key={tag.toString()}>
            {tags[i]}
            </span>
          ))}
          </div>
        </div>
      </div> 
    </div>
  )

  
}

export default cards
