import { fullstack, web, reactjs, game, creative } from "../assets/images";
import {
    arrow,
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Web Developer",
        company_name: "University of Johannesburg, JBS",
        icon: web,
        iconBg: "#3297a8",
        date: "Apr 2022 - Nov 2023",
        points: [
            "Proficient in front-end technologies such as HTML, CSS, and JavaScript, with real-world experience creating responsive and user-friendly online interfaces.",
            "Skilled at using popular front-end frameworks and tools including Bootstrap and React.js",
            "Strong problem-solving skills and the capacity to adapt to evolving technologies and industry trends",
            "Proficient in managing database systems, including SQL and MS Access."
        ],
    },
    {
        title: "React.js Developer",
        company_name: "Self",
        icon: reactjs,
        iconBg: "#c9f5f5",
        date: "Nov 2023 - Present",
        points: [
            "Proficient in React.js and its ecosystem, with real-world experience creating dynamic and interactive user interfaces for web and mobile applications.",
            "Familiarity with modern JavaScript ES6+ features such as arrow functions, destructuring, and spread syntax, enhancing code readability and maintainability.",
        ],
    },
    {
        title: "Game Developer",
        company_name: "JBS",
        icon: game,
        iconBg: "#f5c2ff",
        date: "Apr 2022 - Feb 2024",
        points: [
            "Proficient in game creation using industry-standard tools and technologies like Unity, as well as hands-on expertise developing educational and entertaining gaming experience.",
            "Knowledgeable in 2D and/or 3D graphics programming, including rendering techniques, shaders, and lighting effects",
            "Participating in code reviews and providing useful feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "University of Johannesburg, JBS",
        icon: fullstack,
        iconBg: "#a9e3a6",
        date: "Feb 2021 - 2023",
        points: [
            "Skilled in both front-end and back-end web development technologies, including Python, HTML, CSS, JavaScript, C#, and relational or batabases such as SQL",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "The implementation of web responsive design .",
            "Participating in code reviews and providing useful feedback to other developers.",
            "Skill in problem solving and the ability to identify and fix debug code."
        ],
    },
    {
        title: "Creative   Developer",
        company_name: "Self",
        icon: creative,
        iconBg: "#b0b0b0",
        date: "Dec 2023 - Present",
        points: [
            "Proficient in developing immersive 3D web experiences with technologies like Three.js.",
            "Skilled in 3D modeling and animation software such as Blender.",
            "Familiarity with AR and VR technologies and frameworks ",
            "Experienced in creating user interfaces for 3D online applications using HTML, CSS, and JavaScript.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Cebonkosi',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/cebolenkosi-gumpo-41b14523b/',
    }
];

export const projects = [
    {
        iconUrl: threads,
        theme: 'btn-back-yellow',
        name: 'Chieta Grant System',
        description: 'Developed a secure, user-friendly web application for managing grant applications using ASP.NET.and designed user interfaces for various roles and contributed to the development of a grant application system for Chieta as part of a collaborative project.',
        link: 'https://drive.google.com/file/d/1RdUh_Vx7TYsmx5W5YqNPJNmP_WPB9SFm/view?usp=sharing'
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'VR courtroom',
        description: 'Collaborated with a multidisciplinary team to create a VR Courtroom simulation for law students, utilizing Unity, C#, Blender, Mixamo, and XR Toolkit for game development, 3D modeling, and VR integration.',
        link: 'https://drive.google.com/file/d/1Hc8sShy2cpfdZYj2v533xRAQt1dpG18Q/view?usp=sharing'
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-green',
        name: 'AI Summerizer App',
        description: 'Created a web application using modern web development tools like React and Redux to summarize articles based on user-provided URLs, and an external API was integrated.',
        link: 'https://fanciful-nasturtium-5afed7.netlify.app/',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Todo App',
        description: 'Built a React.js Todo application, following best practices and Agile processes to handle CRUD operations and statemanagement with hooks',
        link: 'https://theabsolutetodoapp.netlify.app/', 
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'JBS VR',
        description: 'Utilized VR SDKs, Blender, and Unity to create an engaging and educational game within a gamified virtual tour of the JBS environment, enhancing user engagement and knowledge retention.',
        link: 'https://drive.google.com/file/d/1a4jO74vvNPGIbJHZbZ78-n_t5BCeAQ5U/view?usp=sharing'
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-yellow',
        name: 'Credibility Chercker App',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://drive.google.com/file/d/1e9CdwsPNgU-yACdxRUPGeHGlvviFoSq0/view?usp=drive_link'
    },
    {
        iconUrl: react,
        theme: 'btn-back-blue',
        name: '3D Portfolio',
        description: 'Created a 3D portfolio website using Three.js for web development and 3D modeling, enhancing visual appeal and interactivity.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];