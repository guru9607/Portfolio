import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Experience = () => {
    const experiences = [
        {
            company: "Yardi Systems",
            role: "Software Engineer",
            duration: "July 2024 – Present",
            description: [
                "Formally recognized for high-quality contributions within the first year on an enterprise platform.",
                "Contributed to the complete portal migration from VB.NET to C# .NET and React -- a high-trust modernization effort on a live multi-tenant platform.",
                "Implemented the Autopay feature end-to-end, enabling automated recurring rent collection for students.",
                "Built full-stack features including roommate matching, multi-file document upload, and maintenance request handling.",
                "Resolved a critical stress-testing failure that was breaking the OLE flow and causing payment failures.",
                "Eliminated redundant API calls, improving platform-wide data-fetching efficiency for lakhs of concurrent users."
            ],
            tech: ["React", ".NET", "C#", "MySQL", "VB.NET"]
        },
        {
            company: "Infosys Springboard",
            role: "Software Engineer Intern",
            duration: "April 2024 – June 2024",
            description: [
                "Selected as one of the interns from a pool of 35,000+ applicants.",
                "Contributed to the development of a full-stack matrimonial website as part of a team of four.",
                "Collaborated across frontend (Angular) and backend (Spring Boot) layers to troubleshoot and implement solutions."
            ],
            tech: ["Angular", "Spring Boot", "MySQL", "Java"]
        },
        {
            company: "Digionus Marketing Agency",
            role: "Freelancer & Software Engineer Intern",
            duration: "March 2022 – August 2022",
            description: [
                "Independently developed and deployed a professional website, leading to subsequent recruitment as an intern.",
                "Trained three interns for collaboratively developing an e-commerce site for AU Enterprises showcasing hardware products.",
                "Leveraged design skills to create logos and banners for client branding and marketing materials."
            ],
            tech: ["Tailwind CSS", "WordPress", "Photoshop", "Web Design"]
        }
    ];

    return (
        <div id="experience" className="container px-8 py-5 mx-auto max-w-5xl mb-24">
            <Fade direction="down" triggerOnce>
                <h1 className="text-center font-Dosis text-3xl font-semibold text-gray-900 lg:text-5xl md:text-5xl dark:text-white mb-12">
                    <span className="text-orange">Experience</span> <span className="text-blue-600">(&gt;_&lt;)</span>
                </h1>
            </Fade>

            <div className="space-y-12">
                {experiences.map((exp, index) => (
                    <Fade key={index} direction={index % 2 === 0 ? "left" : "right"} triggerOnce delay={index * 100}>
                        <div className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
                            
                            <div className="flex flex-wrap justify-between items-baseline gap-2 mb-2">
                                <h2 className="text-2xl font-bold dark:text-white">{exp.role}</h2>
                                <span className="text-sm font-semibold text-orange bg-orange/10 px-3 py-1 rounded-full whitespace-nowrap">
                                    {exp.duration}
                                </span>
                            </div>
                            
                            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">{exp.company}</h3>
                            
                            <ul className="list-disc list-outside ml-4 space-y-2 text-gray-700 dark:text-gray-300 lg:text-lg">
                                {exp.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {exp.tech.map((skill, i) => (
                                    <span key={i} className="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Fade>
                ))}
            </div>
            <hr className="mt-20 bg-gray-400 -mb-10 dark:bg-gray-800"/>
        </div>
    );
};

export default Experience;
