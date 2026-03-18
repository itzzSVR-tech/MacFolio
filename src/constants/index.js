const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Articles", // was "Safari"
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", // was "Trash"
        icon: "trash.png",
        canOpen: false,
    },
];

const blogPosts = [
    {
        id: 1,
        date: "Dec 21, 2025",
        title: "Coding, Caffeine, and Commits: A New Chapter",
        image: "/images/blog1.png",
        link: "https://itzzsvr.substack.com/p/coding-caffeine-and-commits-a-new",
    },
    {
        id: 2,
        date: "Dec 22, 2025",
        title: "Understanding CSS Grid vs. Flexbox: When to Use Which?",
        image: "/images/blog2.png",
        link: "https://itzzsvr.substack.com/p/understanding-css-grid-vs-flexbox",
    },
    {
        id: 3,
        date: "Dec 23, 2025",
        title: "MVC Architecture Explained with Real-World Examples",
        image: "/images/blog3.png",
        link: "https://itzzsvr.substack.com/p/mvc-architecture-explained-with-real",
    },
];

const techStack = [
    {
        category: "Frontend",
        items: ["React.js", "Next.js", "TypeScript"],
    },
    {
        category: "Mobile",
        items: ["React Native", "Expo"],
    },
    {
        category: "Styling",
        items: ["Tailwind CSS", "CSS"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express", "ElysiaJS"],
    },
    {
        category: "Database",
        items: ["MongoDB", "PostgreSQL"],
    },
    {
        category: "Dev Tools",
        items: ["Git", "GitHub", "Docker"],
    },
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#f4656b",
        link: "https://github.com/itzzSVR-tech",
    },
    {
        id: 2,
        text: "SubStack",
        icon: "/icons/substack.svg",
        bg: "#2C9C02",
        link: "https://substack.com/@itzzsvrtech",
    },
    {
        id: 3,
        text: "Twitter/X",
        icon: "/icons/twitter.svg",
        bg: "#ff866b",
        link: "https://x.com/itzzSVRtech",
    },
    {
        id: 4,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#05b6f6",
        link: "https://www.linkedin.com/in/itzzsvrtech74",
    },
];

const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    {
        id: 2,
        icon: "/icons/gicon2.svg",
        title: "Memories",
    },
    {
        id: 3,
        icon: "/icons/file.svg",
        title: "Places",
    },
    {
        id: 4,
        icon: "/icons/gicon4.svg",
        title: "People",
    },
    {
        id: 5,
        icon: "/icons/gicon5.svg",
        title: "Favorites",
    },
];

const gallery = [
    {
        id: 1,
        img: "/images/gal1.png",
    },
    {
        id: 2,
        img: "/images/gal2.png",
    },
    {
        id: 3,
        img: "/images/gal3.png",
    },
    {
        id: 4,
        img: "/images/gal4.png",
    },
];

export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Project 1
        {
            id: 5,
            name: "AuraView",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-5", // icon position inside Finder
            windowPosition: "top-[5vh] left-7", // optional: Finder window position
            children: [
                {
                    id: 1,
                    name: "AuraView Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "AuraView is AI-powered architectural visualization SaaS built with React, TypeScript, and Puter.",
                        "Use AI models from Claude to Gemini to transform 2D floor plans into photorealistic 3D renders with permanent hosting and persistent metadata",
                        "This project features 2D-to-3D photorealistic rendering, serverless workers, high-performance KV storage, and a global community feed.",
                    ],
                },
                {
                    id: 2,
                    name: "auraview.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://auraview-nine.vercel.app/",
                    position: "top-20 left-20",
                },
                {
                    id: 4,
                    name: "auraview.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: "/images/project-5.png",
                },
            ],
        },
        // ▶ Project 2
        {
            id: 6,
            name: "Vectra",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-25 left-95",
            windowPosition: "top-[20vh] left-5", // optional: Finder window position
            children: [
                {
                    id: 1,
                    name: "Vectra Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "Vectra is a full-stack web application designed to help professionals navigate their career transitions.",
                        "Users complete an onboarding process, receive an AI-generated 12-month plan tailored to their goals, and track progress through monthly themes and actionable tasks.",
                        "The platform features an AI assistant named 'Jake' who provides contextual guidance based on the user's current progress and selected month.",
                        "The application is built with Next.js, TypeScript, and Tailwind CSS, and uses MongoDB for database and Clerk for authentication.",
                    ],
                },
                {
                    id: 2,
                    name: "vectra.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://vectra-peach.vercel.app/",
                    position: "top-20 left-20",
                },
                {
                    id: 4,
                    name: "vectra.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: "/images/project-4.png",
                },
            ],
        },
        // ▶ Project 3
        {
            id: 7,
            name: "Titan CLI",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-65",
            windowPosition: "top-[35vh] left-7",
            children: [
                {
                    id: 1,
                    name: "Titan Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "The `Titan` is an AI Agent CLI with AI Chat, Web Search, Tool Calling & Dedicated Agent Mode",
                        "Whether you're engaging in seamless chat conversations, leveraging powerful integrated tools, or activating autonomous agent mode for complex tasks, TitanCLI is your command-center companion built for the future.",
                        "Built for developers and tech enthusiasts alike, it combines cutting-edge AI capabilities with a sleek, intuitive interface to bring your ideas to life faster and smarter than ever before.",
                        "Step into the future of AI-driven command line power with TitanCLI.",
                    ],
                },
                {
                    id: 2,
                    name: "titan.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/itzzSVR-tech/TitanCLI",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "titan.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-1.png",
                },
            ],
        },
        // ▶ Project 4
        {
            id: 8,
            name: "BagIt",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 left-17",
            windowPosition: "top-[50vh] left-5",
            children: [
                {
                    id: 1,
                    name: "bagit.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "A Full-Stack Product Store (PERN Stack) with End-to-End API (PostgreSQL and Express) ↔ Frontend Integration (React and Daisy UI).",
                        "The application focuses on performance, scalability, and user experience, offering real-time updates, secure authentication, cloud-based media handling, and analytics-driven insights to improve engagement and conversions.",
                        "Whether you are building an e-commerce prototype or a production-ready shopping platform, BagIt provides a strong and extensible foundation.",
                    ],
                },
                {
                    id: 2,
                    name: "bagit.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/itzzSVR-tech/BagIt",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "bagit.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-3.png",
                },
            ],
        },
        // ▶ Project 5
        {
            id: 9,
            name: "Phantom",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 left-75",
            windowPosition: "top-[65vh] left-7",
            children: [
                {
                    id: 1,
                    name: "Phantom Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "Phantom is a privacy-first, self-destructing chat application designed for secure, trace-free communication.",
                        "In a world of permanent digital footprints, Phantom ensures your conversations vanish completely once the room expires—no logs, no history, no trace.",
                        "Built for speed and reliability, the application features a responsive Next.js and Tailwind CSS frontend backed by a high-performance Elysia.js server.",
                        "We utilize Redis to manage the ephemeral lifecycle of data (TTL), ensuring zero-persistence storage, while Zod guarantees strict type safety across the full stack.",
                    ],
                },
                {
                    id: 2,
                    name: "phantom.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/itzzSVR-tech/Phantom",
                    position: "top-20 left-20",
                },
                {
                    id: 4,
                    name: "phantom.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: "/images/project-2.png",
                },
            ],
        },
    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: "/images/SVR.jpeg",
        },
        {
            id: 2,
            name: "casual-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-28 right-72",
            imageUrl: "/images/SVR-3.jpeg",
        },
        {
            id: 3,
            name: "conference-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 left-80",
            imageUrl: "/images/SVR-2.jpeg",
        },
        {
            id: 4,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-60 left-5",
            subtitle: "Meet the Developer Behind the Code",
            image: "/images/SVR.jpeg",
            description: [
                "Hey! I’m SarVeshvarn R 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
                "I specialize in JavaScript, React, and Next.js — and I love making things feel smooth, fast, and just a little bit delightful.",
                "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
                "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or even jumping into `Minecraft` quite often 😅",
            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            // you can add `href` if you want to open a hosted resume
            // href: "/your/resume/path.pdf",
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "trash1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-10",
            imageUrl: "/images/trash-1.png",
        },
        {
            id: 2,
            name: "trash2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-40 left-80",
            imageUrl: "/images/trash-2.png",
        },
    ],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
