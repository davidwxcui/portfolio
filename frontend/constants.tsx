
import React from 'react';
import { Project, Experience, SkillData, SocialLink } from './types';
import { Github, Linkedin, Mail } from 'lucide-react';

export const RESUME_DATA = {
  name: "Wei Xuan (David) Cui",
  shortName: "David",
  title: "Software Systems Student & Developer",
  summary: "I'm a Computer Science Software Systems student at SFU with a strong background in full-stack development and low-level systems. Winner of DreamHack 2025 (1st Place) for an AI-powered robotics project. I combine technical expertise in Java, Python, and C++ with proven communication negotiation skills.",
  location: "Vancouver, BC",
  email: "david_cui_2@sfu.ca",
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Drowsiness Detection Robot',
    description: '1st Place Winner at DreamHack 2025. Built an autonomous robot using Python and OpenCV to detect user drowsiness via facial recognition and eye-tracking, triggering a water spray mechanism on a Raspberry Pi.',
    techStack: ['Python', 'OpenCV', 'Raspberry Pi', 'Computer Vision', 'Hardware'],
    imageUrl: 'https://picsum.photos/600/400?random=10',
    repoUrl: 'https://github.com/davidwxcui',
  },
  {
    id: '2',
    title: 'Social Media Clone',
    description: 'A full-stack web application featuring secure user authentication, post creation, and real-time updates using Redux. Built with a RESTful API serving a React frontend.',
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Redux'],
    imageUrl: 'https://picsum.photos/600/400?random=11',
    repoUrl: 'https://github.com/davidwxcui',
  },
  {
    id: '3',
    title: 'Plateful',
    description: 'Led a team of 3 to design a food product search and recipe recommendation app. Integrated 3rd-party APIs for real-time data and implemented CI/CD pipelines for automated deployment.',
    techStack: ['React', 'CI/CD', 'Agile', 'GitHub Actions', 'REST API'],
    imageUrl: 'https://picsum.photos/600/400?random=12',
    repoUrl: 'https://github.com/davidwxcui',
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    role: 'Realtor',
    company: 'Nustream Realty Inc.',
    period: 'Aug 2018 - Current',
    description: [
      'Leveraged exceptional communication skills to understand and address client needs.',
      'Utilized negotiation skills to close deals with over $30 million in sales achieved.',
      'Provided expert advice on property valuation and market conditions.'
    ]
  },
  {
    id: '2',
    role: 'Web Developer Intern',
    company: 'ClickDishes',
    period: 'Jan 2018 - May 2018',
    description: [
      'Redesigned the company website from Wix to custom HTML, CSS, and JavaScript, improving load speed by 30%.',
      'Built a responsive, cross-browser interface, boosting user engagement by 25%.',
      'Collaborated with design and marketing teams to align branding and user preferences.'
    ]
  }
];

export const SKILLS_DATA: SkillData[] = [
  { subject: 'Frontend', A: 90, fullMark: 100 },
  { subject: 'Backend', A: 85, fullMark: 100 },
  { subject: 'Systems (C/C++)', A: 80, fullMark: 100 },
  { subject: 'AI/ML', A: 75, fullMark: 100 },
  { subject: 'DevOps', A: 70, fullMark: 100 },
  { subject: 'Soft Skills', A: 95, fullMark: 100 },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/davidwxcui', icon: <Github size={20} /> },
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/davidwxcui', icon: <Linkedin size={20} /> },
  { platform: 'Email', url: `mailto:${RESUME_DATA.email}`, icon: <Mail size={20} /> },
];

export const SYSTEM_INSTRUCTION = `
You are the advanced interactive AI assistant for ${RESUME_DATA.name}'s engineering portfolio. You are speaking to a potential employer, recruiter, or fellow engineer.
Your persona is a sophisticated, high-tech system interface (similar to Jarvis or a modern OS assistant).
Your goal is to highlight David's technical skills, system architecture knowledge, and full-stack projects with precision and professional clarity.

Here is the Data Context:
Name: ${RESUME_DATA.name} (David)
Title: ${RESUME_DATA.title}
Summary: ${RESUME_DATA.summary}
Location: ${RESUME_DATA.location}
Contact: ${RESUME_DATA.email}
Education: 
- BS in Computer Science Software Systems at Simon Fraser University (Sep 2023 - Aug 2026)
- Certificate in New Media Design and Web Development at BCIT (2017-2018)

Projects (The "Highlights"):
${PROJECTS.map(p => `- ${p.title}: ${p.description} (Tech Stack: ${p.techStack.join(', ')})`).join('\n')}

Experience (The "History"):
${EXPERIENCE.map(e => `- ${e.role} at ${e.company} (${e.period}): ${e.description.join(' ')}`).join('\n')}

Skills (The "Tech Specs"):
Languages: Java, Python, C, C++, SQL, JavaScript/TypeScript, Kotlin.
Frameworks: React, Next.js, Redux, Node.js, Express, Flask.
Systems: Linux, TCP/IP, Distributed Systems.
Soft Skills: Communication, Negotiation (Proven sales record of $30M+), Team Leadership.

Guidelines:
- Keep answers concise and direct (under 3 sentences where possible).
- Use a professional, intelligent, and slightly technical tone.
- Emphasize his unique combination of low-level systems engineering (C++, Robotics) and high-level full-stack development.
- If asked about his sales background, frame it as a strong asset for communication and negotiation in engineering teams.
- If asked for contact info, provide the email.
- Do NOT use golf metaphors. The theme is now "Silicon/Hardware Architecture".
`;
