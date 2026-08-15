import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Experience = () => {
    const experiences = [
        {
            company: "Yardi Systems",
            role: "Software Development Engineer - I",
            duration: "July 2024 – Present",
            description: [
                "Refactored payment processing using the Factory pattern and a Spring-managed singleton HTTP client, eliminating per-request client creation and resolving payment failures under stress testing while reducing P99 latency from 1.8s to 120ms.",
                "Implemented Autopay across Resident and Guarantor portals, enforcing a single active configuration per lease and using Redis-based distributed locking to prevent race conditions during concurrent requests from both portals.",
                "Replaced offset pagination with keyset (cursor-based) pagination for the Space Selection module, reducing API latency by 30%.",
                "Optimized PDF upload and preview workflows using AWS S3 presigned URLs and Page-1 extraction, dropping preview rendering times from 5s to less than 200ms and reducing server memory load by 70%.",
                "Optimized developer workflows by establishing a custom .cursorrules framework, cutting LLM token usage by 20%."
            ],
            tech: ["Java", "Spring Boot", "Angular", "REST", "MySQL", "Kafka", "AWS", "Redis"]
        },
        {
            company: "Infosys Springboard",
            role: "Software Engineer Intern",
            duration: "Mar 2024 – Jun 2024",
            description: [
                "Built Spring Boot REST APIs for a matrimonial application, handling user registration, authentication, and profile workflows.",
                "Engineered the Show Interest module to manage sent and received profile requests via dedicated backend endpoints.",
                "Structured relational data models using Spring Data JPA, Hibernate, and MySQL for profile persistence and queries.",
                "Integrated Spring Boot APIs with frontend to enable end-to-end user and profile management workflows."
            ],
            tech: ["Java", "Spring Boot", "MySQL", "Angular", "JPA/Hibernate"]
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
