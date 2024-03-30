import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

import ostramlogo from "../assets/companylogos/ostramlogo.png";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Testimonials",
    url: "#testimonials",
  },

];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];


export const companyLogos = [
  {
    name: "Ostram Sacco",
    imageUrl: ostramlogo,
    saccourl: "https://www.ostramsacco.co.ke/",
  },
  {
    name: "Ostram Sacco",
    imageUrl: ostramlogo,
    saccourl: "https://www.ostramsacco.co.ke/",
  },
  {
    name: "Ostram Sacco",
    imageUrl: ostramlogo,
    saccourl: "https://www.ostramsacco.co.ke/",
  },
  {
    name: "Ostram Sacco",
    imageUrl: ostramlogo,
    saccourl: "https://www.ostramsacco.co.ke/",
  },
  {
    name: "Ostram Sacco",
    imageUrl: ostramlogo,
    saccourl: "https://www.ostramsacco.co.ke/",
  },
];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Reporting",
    text: "Gain insights with robust reporting tools.",
    date: "May 2023",
    status: "progess",
    colorful: true,
  },
  {
    id: "1",
    title: "AI Systems",
    text: "Optimize operations with AI-driven solutions.",
    date: "May 2023",
    status: "progress",
    colorful: false,
  },
  {
    id: "2",
    title: "Member Client App",
    text: "Access SACCO services conveniently on the go.",
    date: "May 2023",
    status: "progress",
    colorful: false,
  },
  {
    id: "3",
    title: "Member Portal",
    text: "Centralized platform for member interaction",
    date: "May 2023",
    status: "progress",
    colorful: true,
  },
];





export const collabContent = [
  {
    id: "0",
    title: "SMS Communication",
    text: "Seamlessly communicate with members via SMS for quick updates and notifications.",
  },
  {
    id: "1",
    title: "To-do App",
    text:"Stay organized and productive with our intuitive to-do app, perfect for managing tasks efficiently."
  },
  {
    id: "2",
    title: "Loan Calculator",
    text:"Easily estimate loan payments and plan finances with our user-friendly loan calculator tool."
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "We don't have a fixed price, because we care about you",
    description: "Pricing is determined by various factors and we guarantee it will be a low amount",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  // {
  //   id: "1",
  //   title: "Premium",
  //   description: "Advanced AI chatbot, priority support, analytics dashboard",
  //   price: "9.99",
  //   features: [
  //     "An advanced AI chatbot that can understand complex queries",
  //     "An analytics dashboard to track your conversations",
  //     "Priority support to solve issues quickly",
  //   ],
  // },
  // {
  //   id: "2",
  //   title: "Enterprise",
  //   description: "Custom AI chatbot, advanced analytics, dedicated account",
  //   price: null,
  //   features: [
  //     "An AI chatbot that can understand your queries",
  //     "Personalized recommendations based on your preferences",
  //     "Ability to explore the app and its features without any cost",
  //   ],
  // },
];

export const benefits = [
  {
    id: "0",
    title: "Member Management",
    description: "Simplify member management tasks with our intuitive system. Easily onboard new members, update information, and maintain accurate records, ensuring smooth operations for your SACCO.",
    backgroundUrl: "assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Loan Management",
    description: "Effortlessly manage loans with our comprehensive system. From application to approval and repayment, streamline the entire loan process to increase efficiency and enhance member satisfaction.",
    backgroundUrl: "assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Savings Management",
    description: "Take control of savings management with our powerful tools. Enable members to set savings goals, track progress, and make deposits easily, empowering them to achieve financial stability.",
    backgroundUrl: "assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Deposits Management",
    description: "Streamline deposits management with our user-friendly platform. From accepting deposits to processing transactions, ensure accuracy and security while providing members with a seamless experience.",
    backgroundUrl: "assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Staff Management",
    description: "Optimize staff management processes with our feature-rich solution. Assign tasks, track performance, and manage schedules effortlessly, empowering your team to deliver exceptional service to members.",
    backgroundUrl: "assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "AI Credit Scoring",
    description: "Utilize our AI credit scoring feature to enhance lending decisions with advanced machine learning algorithms. Accurately assess creditworthiness, reduce risk, and improve loan portfolio performance.",
    backgroundUrl: "assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
