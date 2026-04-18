import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';


export function SkillCard(props: any) {
  
  const { title, tags, key, image, icon } = props;

  return (
    <div className="p-4 w-full">
        <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-md rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 group h-full flex flex-col">
            <div className="text-3xl text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {title}
            </h3>
            <div className="flex flex-wrap gap-2 mt-auto">
                {tags.map((tag: string, i: number) => (
                    <span 
                        key={i} 
                        className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </div>
  )
}