export const projects = [
    {
        screenshots: ['gatsby_home'],
        name: 'Gatsby React Website - opusmonkey.com',
        tagline: 'A blazing-fast site for blog posts and portfolios, optimized for performance and SEO.',
        features: [
            {'Static Site Generation': 'Powered by Gatsby for faster load times and better SEO.'},
            {'Optimized Images': 'Utilized gatsby-image (or similar plugins) to reduce load times.'},
            {'SEO Best Practices': 'Implemented custom components for meta tags and structured data.'},
            {'Continuous Integration': 'Deployed on a VPS, integrated with Jenkins (or GitHub Actions) for automated builds.'},
        ],
        techStack: [
            {
                "Front-End": ['Gatsby (React)'],
                "Deployment & Tools": ['Jenkins (CI/CD)', 'VPS (Nginx, SSL)', 'Git'],
            }
        ],
        projectLink: "https://opusmonkey.com",
        projectRef: 'project1',
    },
    {
        screenshots: ['blog_home'],
        name: 'React Web Blog - quivar.lat',
        tagline: 'A dynamic blog platform built with React and Express for seamless content delivery.',
        features: [
            "Dynamic Front-End & Back-End: Built with React.js (front end) and Express.js (back end).",
            "Modern UI: Styled with Tailwind CSS, ensuring a responsive, visually appealing interface.",
            "VPS & Nginx: Configured a self-managed VPS with Nginx as a reverse proxy for reliability and performance.",
            "SSL Security: Implemented SSL certificates (e.g., Let’s Encrypt) for secure HTTPS connections.",
            "CI/CD Pipeline: Deployed via Jenkins, automating builds and deployments on Git pushes.",
            "Environment Management: Secured app with environment variables and back-end API authentication.",
            "Maintainability: Utilized Nx Workspace for organized, scalable code.",
        ],
        techStack: [
            {
                "Front-End": ['React.js', 'Nx Workspace', 'Tailwind CSS'],
                "Back-End": ['Node.js', 'Express.js'],
                "Deployment & Tools": ['Jenkins (CI/CD)', 'VPS (Nginx, SSL)', 'Git'],
            }
        ],
        projectLink: "https://quivar.lat",
        projectRef: 'project2',
    },
    {
        screenshots: ['cms_home'],
        name: 'Content Management System',
        tagline: 'A lightweight CMS designed for easy CRUD operations and streamlined deployment.',
        features: [
                           
        ],
        techStack: [
            {
                "Front-End": ['React.js', 'Nx Workspace', 'Tailwind CSS'],
                "Back-End": ['Node.js', 'Express.js'],
                "Database": ['MongoDB'],
                "Deployment & Tools": ['Jenkins (CI/CD)', 'VPS (Nginx, SSL)', 'Git'],
            }
        ],
        projectLink: "https://cms.quivar.lat",
        projectRef: 'project3',
    }
]