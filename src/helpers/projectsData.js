import codecollab from '../assets/codecollab.jpg'
import dappVoting from '../assets/dapp.jpg'
import nxtblog from '../assets/nxtblog.png'

const projectsData = [
    {
        name: "NXTBLOG",
        img: nxtblog,
        description:
            "Built a modern blogging platform with ReactJs and NextJs, featuring secure authentication via JWT. Styled with Tailwind CSS for a responsive design, the site allows users to sign up, create, and publish blog posts easily with an intuitive interface.",
        technologies: "React / NextJS / TailwindCSS",
        repo_link: "https://github.com/ashish553/nxtblog",
        url: "https://blog-app-iota-jet.vercel.app/",
    },
    {
        name: "CodeCollab",
        img: codecollab,
        description:
            "Code Collab delivers a collaborative coding environment with real-time editing, offering features like unique room generation for privacy, syntax highlighting for clarity, and intelligent auto-suggestions. It enables users to edit, save, and download files effortlessly, all while facilitating communication through an integrated group chat.",
        technologies: "React / Socket / SCSS",
        repo_link: "https://github.com/ashish553/CodeCollab",
        url: "https://code-collab-topaz.vercel.app/",
    },
    {
        name: "Decentralised Voting",
        img: dappVoting,
        description:
            "Experience the future of secure and transparent voting with our Decentralized Voting App powered by blockchain technology. This innovative project combines the reliability of blockchain with the accessibility of modern web applications to create a voting platform that ensures integrity, transparency, and trust in the electoral process.",
        technologies: "React / EthersJS / SCSS",
        repo_link: "https://github.com/ashish553/dapp-voting",
        url: "https://dapp-voting-eight.vercel.app/",
    },
];
  
export default projectsData