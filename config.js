import { FaDiscord, FaGithub, FaMapPin } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiBriefcase } from "react-icons/hi";

export const config = {
    developer: {
        name: "Bhavan Kumar",
    },
    social: {
        github: "Bhavankumarg",
        discord: "#"
    },
    NAV_ITEMS: [
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' }
    ],
    recentTracks: true, // Enable/disable Spotify recent tracks
    projects: [
        {
            id: 1,
            title: "iVistaz",
            description: "Scale your brand with iVistaz, a performance-based digital marketing agency in Bangalore. We deliver measurable growth through tailored data-driven",
            image: "/projects/ivistaz.png",
            technologies: ["Next.js", "React.js", "TailwindCSS", "Framer Motion", "REST API", "WordPress"],
            github: "#",
            demo: "https://ivistaz.com/"
        },
        {
            id: 2,
            title: "Nautilus Shipping",
            description: "Nautilus Shipping has stood as a trusted partner in ship management services, driven by our commitment to reliability, performance, and sustainable ...",
            image: "/projects/nautilus.png",
            technologies: ["Next.js", "React.js", "TailwindCSS", "Framer Motion", "REST API", "Wordpress"],
            github: "#",
            demo: "https://www.nautilusshipping.com/"
        },
        {
            id: 4,
            title: "Aims Institutes",
            description: "Looking for the top colleges in Bangalore? AIMS is a trusted choice, ranked among the best business colleges and best hospitality colleges in Bangalore.",
            image: "/projects/aims.png",
            technologies: ["Next.js", "React.js", "TailwindCSS", "Framer Motion", "REST API", "Wordpress"],
            github: "#",
            demo: "https://www.theaims.ac.in/"
        },
        {
            id: 5,
            title: "Chartered Housing",
            description: "For over thirty-six years, we've been building more than just homes; we've been creating a legacy of quality and trust. Our journey has been one of ...",
            image: "/projects/chartered.svg",
            technologies: ["Next.js", "React.js", "TailwindCSS", "Framer Motion", "Wordpress"],
            github: "#",
            demo: "https://www.charteredhousing.com/"
        },
        {
            id: 6,
            title: "Ivory and Gold",
            description: "Where sophistication meets artistry in a calm, curated space. Ivory & Gold is a unisex luxury salon where beauty is reimagined as a quiet ritual of care, craft",
            image: "/projects/ivory.svg",
            technologies: ["Next.js", "React.js", "TailwindCSS", "Framer Motion", "Wordpress"],
            github: "#",
            demo: "https://www.ivoryandgold.in/"
        },
        {
            id: 7,
            title: "seslong",
            description: "Seslong is a global trading house with operations and manufacturing strategically located across India, Hong Kong, China, enabling us to supply a diverse range",
            image: "/projects/seslong.png",
            technologies: ["Next.js", "React.js", "TailwindCSS", "Formspree"],
            github: "#",
            demo: "https://seslong.com/"
        }
 
    ],
    skills: [
        {
            title: "Frontend",
            icon: <HiCode />,
            description: "Modern web interfaces",
            bgClass: "bg-blue-500/10",
            iconClass: "text-blue-500",
            skills: [
                { name: "Next.js 15", level: "Advanced", hot: true },
                { name: "React", level: "Advanced" },
                { name: "TailwindCSS", level: "Expert" },
                { name: "JavaScript", level: "Advanced" },
                { name: "Framer Motion", level: "Intermediate" }
            ]
        },
        // {
        //     title: "Backend",
        //     icon: <HiDatabase />,
        //     description: "Server & Database",
        //     bgClass: "bg-emerald-500/10",
        //     iconClass: "text-emerald-500",
        //     skills: [
        //         { name: "Node.js", level: "Advanced", hot: true },
        //         { name: "MongoDB", level: "Advanced" },
        //         { name: "Express.js", level: "Advanced", hot: true }
        //     ]
        // },
        {
            title: "Programs & Tools",
            icon: <HiCube />,
            description: "Development & Productivity Tools",
            bgClass: "bg-orange-500/10",
            iconClass: "text-orange-500",
            skills: [
                { name: "VS Code", level: "Expert", hot: true },
                { name: "Postman", level: "Beginner" },
                // { name: "Photoshop", level: "Intermediate" },
                { name: "GitHub", level: "Advanced" }
            ]
        }
    ],
    experiences: [
        {
            position: "Web Developer",
            company: "iVistaz Ecom Serevices Pvt Ltd",
            period: "Mar 2024 - Nov 2025",
            location: "Bengaluru, Karnataka, India",
            description: "Developed modern, responsive web applications with a strong focus on performance, scalability, and user experience. Worked with modern frontend technologies to build dynamic, high-quality interfaces and seamless user interactions.",
            responsibilities: [
                "Built responsive and interactive user interfaces using React.js and Next.js",
                "Implemented modern UI/UX designs using Tailwind CSS",
                "Integrated REST APIs and dynamic backend data for real-time content",
                "Optimized application performance and page load speed",
                "Ensured cross-browser compatibility and mobile responsiveness",
                "Collaborated with design teams to deliver scalable features"
            ],
            technologies: ["React", "Next.js", "TailwindCSS", "JavaScript", "REST API"]
        },
        {
            position: "Web Development Intern",
            company: "Dalztek Online Services India Pvt Ltd",
            period: "Jun 2023 - Feb 2024",
            location: "Bengaluru, Karnataka, India",
            description: "Assisted in developing responsive web applications and websites while gaining hands-on experience in frontend development, API integration, and content management. Focused on building user-friendly interfaces and improving overall website functionality.",
            responsibilities: [
                "Developed responsive web pages using HTML, CSS, JavaScript, and WordPress",
                "Implemented basic UI components and frontend features",
                "Integrated WordPress REST APIs for dynamic content rendering",
                "Ensured mobile responsiveness and cross-browser compatibility",
                "Assisted in bug fixing, testing, and content updates"
            ],
            technologies: ["HTML", "CSS", "JavaScript", "WordPress"]
        }
    ],
    contactInfo: [
     
        {
            icon: <FaGithub className="w-5 h-5" />,
            label: "GitHub",
            value: "@Bhavankumar",
            link: `https://github.com/Bhavankumarg`
        },
        {
            icon: <HiMail className="w-5 h-5" />,
            label: "Email",
            value: "gbhavanbkr@gmail.com",
            link: "mailto:gbhavanbkr@gmail.com"
        },
        {
            icon: <FaMapPin className="w-5 h-5" />,
            label: "Location",
            value: "India",
            link: null
        }
    ]
}