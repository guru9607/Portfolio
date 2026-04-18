import Image from "next/image"
import Link from "next/link"
import profile from "../images/pp.jpg"

const cards = (props: any) => {

  const { title, image, description, tags, height, width, link } = props;

  return (
    <div className="p-4 w-full">
      <div className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800 h-full flex flex-col">
        <div className="relative h-48 w-full overflow-hidden">
          <Image 
            alt={title}
            src={image}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
            <span className="text-white text-xs font-medium px-2 py-1 rounded bg-blue-600/80 backdrop-blur-sm">View Project</span>
          </div>
        </div>
        
        <div className="p-6 flex flex-col flex-1">
          {link && link !== "#" ? (
            <Link href={link} legacyBehavior passHref>
              <a target="_blank" className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-2 block">
                {title}
              </a>
            </Link>
          ) : (
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {title}
            </h3>
          )}
          
          <p className="text-gray-600 dark:text-gray-400 font-light text-sm line-clamp-3 mb-4 flex-1">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-gray-800">
            {tags.map((tag: string, i: number) => (
              <span className="text-[10px] uppercase tracking-wider font-bold text-blue-600 dark:text-blue-400" key={i}>
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div> 
    </div>
  )

  
}

export default cards
