import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Bayu Setiawan",
  initials: "BS",
  url: "https://bayu-setiawan.my.id",
  location: "Samarinda, Indonesia",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "💡 Frontend Web Developer | Vue.js & Laravel Enthusiast | Tech Lover with a Taste for Great Coffee",
  summary:
    "I’m currently working remotely at a Japanese company, where I get to solve real-world problems, write clean code, and document components (in both English and Japanese keigo!).  While I’m still early in my career, I bring energy, curiosity, and a solid foundation in building modern web apps — both frontend and backend. Whether you need a reliable team player, a fast learner, or someone who can bridge the gap between frontend and backend (yes, I'm fullstack developer by work, frontend by heart!), I’m ready to jump in!",
  avatarUrl: "/profile.jpg",
  languages: [
    "PHP",
    "Javascript",
    "HTML",
    "CSS",
    "Typescript",
    "Python",
    "Dart",
    "Java",
    "SQL",
    "SCSS"
  ],
  frameworks: [
    "Vue.js",
    "Laravel",
    "React",
    "Flutter",
    "Next.js",
    "Node.js",
    "JQuery",
    "Bootstrap",
    "TailwindCSS",
    "Quasar",
    "Gatsby",
    "Ionic",
    "Ant Design",
    "CodeIgniter",
  ],
  tools: [
    "Git",
    "VS Code",
    "Swagger",
    "Postman",
    "Docker",
    "Gitlab",
    "Github",
    "npm",
    "Figma",
    "Jira",
    "Vercel"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "setiawanbayu66152@gmail.com",
    tel: "+6282353165184",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/MirrorBottle",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/setiawan-bayu",
        icon: Icons.linkedin,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/setiawan__bayu",
        icon: Icons.instagram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "テックチャオ株式会社 (TechQiao Co., Ltd.)",
      href: "https://techqiao.co.jp",
      badges: ["Currently"],
      location: "Shizuoka, Japan (Remote)",
      title: "Software Engineer",
      logoUrl: "/techqiao.jpg",
      start: "Jun 2024",
      end: "Present",
      description:
        "Continuing development on a large-scale enterprise system within a new company structure, I focus on both frontend and backend enhancements using Vue 3 with Vuex and Quasar for building dynamic, component-based interfaces, and Laravel for robust backend services. My role involves optimizing performance, improving UX, and maintaining clean, scalable code while actively contributing to sprint planning, cross-team collaboration, and technical documentation in both English and Japanese keigo.",
    },
    {
      company: "株式会社シンクエイト (Synchate Inc.)",
      badges: [],
      href: "https://www.synchate.com",
      location: "Tokyo, Japan (Remote)",
      title: "Full-stack Web Developer",
      logoUrl: "/synchate.jpg",
      start: "Feb 2022",
      end: "Jun 2024",
      description:
        "Worked as a full stack developer on a large-scale project using Vue.js and Laravel. The project involved migrating a 20-year-old desktop application into a modern web-based platform. While I contributed to both ends, my main responsibility was frontend development, with an emphasis on building a robust, user-friendly interface and collaborating closely with backend engineers and stakeholders.",
    },
    {
      company: "PT. Indeks Media Teknologi (IMT)",
      href: "http://www.indeksmediateknologi.co.id",
      badges: [],
      location: "Samarinda, Indonesia",
      title: "Full-stack Web Developer",
      logoUrl: "/imt.jpg",
      start: "Mar 2021",
      end: "Feb 2022",
      description:
        "Developed and maintained features for a Japan-based web application using Vue.js and Laravel. Played a key role in bridging communication between the Japanese and Indonesian teams. My responsibilities included end-to-end feature development, frontend-backend integration, and agile collaboration.",
    },
    {
      company: "CV. Thortech Asia Software",
      href: "http://thortech.asia",
      badges: [],
      location: "Samarinda, Indonesia",
      title: "Frontend Web Developer",
      logoUrl: "/thortech.jpg",
      start: "Mar 2020",
      end: "Mar 2021",
      description:
        "Led frontend efforts on two web projects using React.js and Laravel. As part of a small four-person development team, I contributed to both frontend and backend but took initiative as the lead on the UI side — ensuring responsive, high-quality design and functionality.",
    },
  ],
  education: [
    {
      school: "Universitas Mulawarman",
      href: "https://unmul.ac.id",
      degree: "Bachelor of Computer Science",
      logoUrl: "/unmul.png",
      start: "2021",
      end: "Present",
    },
    {
      school: "SMKN 7 Samarinda",
      href: "https://www.smkn7-smr.sch.id",
      degree: "Vocational High School",
      logoUrl: "/smk7.png",
      start: "2018",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
