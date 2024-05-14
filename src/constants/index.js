import {
    ml,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    Project_1,
    Project_2,
    Project_3,
    data,
    company,
    python,
    keras,
    tf,
    scikitlearn,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "projects",
        title: "Projects"
    },
    {
        id: "contact",
        title: "Contact",
    },
    {
        id: "socials",
        title: "Socials",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Machine Learning",
        icon: ml,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Data Analyst",
        icon: data,
    },

];

const technologies = [
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: 'Python',
        icon: python,
    },
    {
        name: 'Keras',
        icon: keras,
    },
    {
        name: 'ScikitLearn',
        icon: scikitlearn
    },
    {
        name: 'TensorFlow',
        icon: tf,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "QA Analyst Intern",
        company_name: "RS Technology",
        icon: company,
        iconBg: "#383E56",
        date: "March 2023 - july 2023",
        points: [
            "Spearheaded quality assurance initiatives by analyzing test results, pinpointing improvement areas, and identifying potential risks.",
            "Collaborated cross-functionally with designers, product managers, and developers to ensure high-quality product delivery.",
            "Championed responsive design and cross-browser compatibility for optimal user experience across platforms.",
            "Contributed to code quality by participating in code reviews and providing constructive feedback to developers.",
        ],
    },
    // {
    //     title: "React Native Developer",
    //     company_name: "Tesla",
    //     icon: tesla,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2021 - Feb 2022",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#383E56",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Weather App",
        description:
            "This is a weather app. It includes various features such as displaying current weather information, a search bar to search for different cities, and a pop-up window to show past 7 days data. The app also provides a forecast for the next few days.",
        tags: [
            {
                name: "HTML/CSS",
                color: "blue-text-gradient",
            },
            {
                name: "MYSQL",
                color: "green-text-gradient",
            },
            {
                name: "PHP",
                color: "pink-text-gradient",
            },
            {
                name: "JavaScript",
                color: "text-[blue]",
            }
        ],
        image: Project_1,
        source_code_link: "https://github.com/Uknowme-h/Weather-app?tab=readme-ov-file",
    },
    {
        name: "Open-World 3D Game",
        description:
            "Gear up and race across the open world!.This Unity 3D project lets you drive a single, customizable car through missions in a vast, explorable world. Blast the radio, conquer challenges, and climb the scoreboards!",
        tags: [
            {
                name: "Unity3d",
                color: "blue-text-gradient",
            },
            {
                name: "C-Sharp",
                color: "green-text-gradient",
            },
            {
                name: "Git",
                color: "pink-text-gradient",
            },
            {
                name: "3D-Modeling",
                color: "text-[blue]",
            }
        ],
        image: Project_2,
        source_code_link: "https://github.com/Uknowme-h/Operation-GearHead",
    },
    {
        name: "Corn-Leaf Disease Detection",
        description:
            "A CNN Model trained on a Corn-leaf datasets using a pretrained Model (Resnet50) with a accuracy of over 90%, Deployed this model on Heroku using FastAPI and Docker",
        tags: [
            {
                name: "Python",
                color: "blue-text-gradient",
            },
            {
                name: "Fastai",
                color: "green-text-gradient",
            },
            {
                name: "Pytorch",
                color: "pink-text-gradient",
            },
            {
                name: "Docker",
                color: "text-[blue]",

            }
        ],
        image: Project_3,
        source_code_link: "https://github.com/Uknowme-h/Corn_disease_detection",
    },
];

export { services, technologies, experiences, testimonials, projects };