import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Leadership = () => {
    const leadership = [
        {
            organization: "interACT (theinteract.org)",
            role: "Technical Director (Volunteer) — UN-aligned youth initiative",
            duration: "July 2023 – Present",
            description: [
                "Built a live global event management platform used by 40+ facilitators worldwide, supporting 150+ events and 4,000+ participant registrations, centralizing event scheduling, registration, feedback, and impact data for reporting to the United Nations.",
                "Implemented role-based access for facilitators and admins using Supabase Authentication and PostgreSQL Row Level Security (RLS), enforcing event ownership and administrative access at the database level.",
                "Automated participant workflows including post-event feedback, participant data exports, event media management, and dynamic certificate generation using reusable templates and event/session data."
            ],
            tech: ["Next.js", "PostgreSQL", "Supabase", "Tailwind CSS"]
        },
        {
            organization: "Extracurricular & Campus Leadership",
            role: "Coordinator & Session Facilitator",
            duration: "2020 – Present",
            description: [
                "Coordinated campus placement operations and corporate outreach for a volunteer team of 200+ members.",
                "Conducted 80+ digital wellness workshops across academic institutions, reaching over 3,000 participants."
            ],
            tech: ["Leadership", "Operations", "Digital Wellness", "Community Outreach"]
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
