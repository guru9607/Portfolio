import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Leadership = () => {
    const leadership = [
        {
            organization: "interACT",
            role: "Technical Director (Pro-bono)",
            duration: "July 2023 – Present",
            description: [
                "Lead Technical Director of a UN-aligned global youth initiative focused on inner resilience, mental well-being, and sustainable development.",
                "Architected and built the entire digital platform from scratch, including event management portals, certificate generation systems, participant authentication, and interactive module delivery for thousands of users across multiple countries.",
                "Implemented custom portals for event management, enabling seamless organization of workshops, sessions, and community gatherings with real-time registration and attendance tracking.",
                "Developed automated certificate generation systems that dynamically create personalized certificates for participants upon completion of modules and sessions.",
                "Mentored cross-functional teams on development best practices, code quality, and scalable system design while establishing workflows for sustained platform growth and maintenance."
            ],
            tech: ["Next.js", "React", "Leadership", "Mentorship", "Global Impact"]
        },
        {
            organization: "Youth Wellness Initiatives",
            role: "Session Facilitator",
            duration: "2022 – Present",
            description: [
                "Led meditation and digital wellness sessions in schools and colleges across India, promoting mental well-being, stress management, and sustainable development practices among youth.",
                "Developed interactive modules and workshops focused on mindfulness, emotional resilience, and digital detox strategies to support holistic youth development."
            ],
            tech: ["Meditation", "Digital Wellness", "Youth Development", "Mindfulness"]
        }
    ];

    return (
        <div id="leadership" className="container px-8 py-5 mx-auto max-w-5xl mb-24">
            <Fade direction="down" triggerOnce>
                <h1 className="text-center font-Dosis text-3xl font-semibold text-gray-900 lg:text-5xl md:text-5xl dark:text-white mb-12">
                    <span className="text-orange">Leadership</span> <span className="text-blue-600">👥</span>
                </h1>
            </Fade>

            <div className="space-y-12">
                {leadership.map((lead, index) => (
                    <Fade key={index} direction={index % 2 === 0 ? "left" : "right"} triggerOnce delay={index * 100}>
                        <div className="relative pl-8 border-l-2 border-orange dark:border-orange rounded-lg">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-orange dark:bg-orange rounded-full shadow-[0_0_10px_rgba(251,146,60,0.5)]"></div>
                            
                            <div className="flex flex-wrap justify-between items-baseline gap-2 mb-2">
                                <h2 className="text-2xl font-bold dark:text-white">{lead.role}</h2>
                                <span className="text-sm font-semibold text-blue-600 bg-blue-600/10 px-3 py-1 rounded-full whitespace-nowrap">
                                    {lead.duration}
                                </span>
                            </div>
                            
                            <h3 className="text-xl font-semibold text-orange mb-4">{lead.organization}</h3>
                            
                            <ul className="list-disc list-outside ml-4 space-y-2 text-gray-700 dark:text-gray-300 lg:text-lg">
                                {lead.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {lead.tech.map((skill, i) => (
                                    <span key={i} className="text-xs font-medium px-2 py-1 bg-orange/10 dark:bg-orange/20 text-orange dark:text-orange-400 rounded">
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

export default Leadership;
