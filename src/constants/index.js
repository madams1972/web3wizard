import {
  mobile,
  backend,
  creator,
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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  social1,
  social2,
  social3,
  social4,
  social5,
  social6,
  social7,
  social8,
  portfolio,
  
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
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
  
];

const experiences = [
  {
    title: "Expansion of Social Media Presence and Community Engagement",
    // company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Q1 2023",
    points: [
      "We are profoundly grateful for your unwavering support and involvement in the remarkable journey of Tough Teddez since its inception. The past few months have been an extraordinary testament to our collective strength, as we have built something truly significant in the NFT space.",
    ],
  },
  {
    title: "Launch of Tough Teddez Marketplace",
    // company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Q2 2023",
    points: [
      "We plan to launch the Tough Teddez Marketplace, a platform where our NFT holders can buy, sell, and trade Tough Teddez NFTs. This will add significant utility to our NFTs and provide a seamless trading experience for our community.",
    ],
  },
  {
    title: "Development of Tough Teddez DAO Governance",
    // company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Q3 2023",
    points: [
      "We will develop a comprehensive governance structure for the Tough Teddez DAO, allowing NFT holders to have a say in the future direction of the project. This will include voting rights on major decisions and the opportunity to propose new initiatives.",
    ],
  },
  {
    title: "Introduction of Tough Teddez Staking and Rewards Program",
    // company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Q4 2023",
    points: [
      "We will introduce a staking program, allowing NFT holders to stake their NFTs and earn rewards. This will provide additional utility to our NFTs and incentivize long-term holding.",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Friday proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Friday does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Friday optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Web 3.0 Wizards",
    description:
      "We believe that Web 3.0 represents the future of the internet, where users have more control over their data and services, and where trust and transparency are fundamental principles. By joining this group, you will have the opportunity to connect with like-minded individuals who share your passion for Web 3.0 and to engage in thoughtful discussions and debates.",
    tags: [
      {
        name: "Learn to Code",
        color: "blue-text-gradient",
      },
      {
        name: "HTML, CSS, JS",
        color: "green-text-gradient",
      },
      {
        name: "Create a NFT or 3d Website",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://www.web3wizards.tech",
  },
  {
    name: "My 3d Portfolio",
    description:
      "Check out my Portfolio of work",
    tags: [
      {
        name: "Three.js",
        color: "blue-text-gradient",
      },
      {
        name: "HTML, CSS, JS",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link:
      "https://my3d-portfolio-1zjm5sjlr-madams-stantonadams.vercel.app/",
  },
  {
    name: "Discord",
    description:
      "Join the Discord and take advantage of opportunities to chat with the Web3Wizards and to take part in contest, games and activities and giveaways",
    tags: [
      {
        name: "Chat",
        color: "blue-text-gradient",
      },
      {
        name: "Games",
        color: "green-text-gradient",
      },
      {
        name: "Live Calls",
        color: "pink-text-gradient",
      },
    ],
    image: social3,
    source_code_link: "https://discord.gg/EdKtRp3ydB",
  },
  {
    name: "FaceBook Group",
    description:
      "A place for us to talk about NFT's and other things in the Web3space",
    tags: [
      {
        name: "Blockchain",
        color: "blue-text-gradient",
      },
      {
        name: "Crypto",
        color: "green-text-gradient",
      },
      {
        name: "NFT's",
        color: "pink-text-gradient",
      },
    ],
    image: social2,
    source_code_link: "https://www.facebook.com/groups/nfthustlegang",
  },
  {
    name: "Twitter",
    description:
      "A place for us to talk about NFT's and other things in the Web3space",
    tags: [
      {
        name: "Blockchain",
        color: "blue-text-gradient",
      },
      {
        name: "Crypto",
        color: "green-text-gradient",
      },
      {
        name: "NFT's",
        color: "pink-text-gradient",
      },
    ],
    image: social4,
    source_code_link: "https://twitter.com/ToughTeddezNFT",
  },
  {
    name: "Tiktok",
    description:
      "A place for us to talk about NFT's and other things in the Web3space",
    tags: [
      {
        name: "Blockchain",
        color: "blue-text-gradient",
      },
      {
        name: "Crypto",
        color: "green-text-gradient",
      },
      {
        name: "NFT's",
        color: "pink-text-gradient",
      },
    ],
    image: social5,
    source_code_link: "https://www.tiktok.com/@web3wizardz",
  },
  {
    name: "Linkedin",
    description:
      "A place for us to talk about NFT's and other things in the Web3space",
    tags: [
      {
        name: "Blockchain",
        color: "blue-text-gradient",
      },
      {
        name: "Crypto",
        color: "green-text-gradient",
      },
      {
        name: "NFT's",
        color: "pink-text-gradient",
      },
    ],
    image: social8,
    source_code_link: "https://www.linkedin.com/in/equitymalissa/",
  },
  {
    name: "Telegram",
    description:
      "A place for us to talk about NFT's and other things in the Web3space",
    tags: [
      {
        name: "Blockchain",
        color: "blue-text-gradient",
      },
      {
        name: "Crypto",
        color: "green-text-gradient",
      },
      {
        name: "NFT's",
        color: "pink-text-gradient",
      },
    ],
    image: social1,
    source_code_link: "https://t.me/+TAGXWq4GtPI2MGEx",
  },
  {
    name: "Instagram",
    description:
      "A place for us to talk about NFT's and other things in the Web3space",
    tags: [
      {
        name: "Blockchain",
        color: "blue-text-gradient",
      },
      {
        name: "Crypto",
        color: "green-text-gradient",
      },
      {
        name: "NFT's",
        color: "pink-text-gradient",
      },
    ],
    image: social7,
    source_code_link: "https://www.instagram.com/nft_teacher1",
  },
  {
    name: "YouTube",
    description:
      "A place for us to talk about NFT's and other things in the Web3space",
    tags: [
      {
        name: "Blockchain",
        color: "blue-text-gradient",
      },
      {
        name: "Crypto",
        color: "green-text-gradient",
      },
      {
        name: "NFT's",
        color: "pink-text-gradient",
      },
    ],
    image: social6,
    source_code_link:
      "https://www.youtube.com/channel/UCUfxfD4PlpC1f5SMdHqvs0A",
  },
];

export { services, technologies, experiences, projects };
