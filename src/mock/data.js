import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Bayu Setiawan Web Profile', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my profile site', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Bayu Setiawan',
  subtitle: 'A Junior Frontend Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: require('../images/resume.pdf'), // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'distan-kubar.png',
    title: 'Company Profile',
    client: ' DISTAN Kutai Barat',
    url: 'https://distan-kubar.thortech.asia/',
    techs: [
      { name: "laravel", title: "Laravel 5.8" },
      { name: "bootstrap", title: "Bootstrap 4" },
      { name: "js", title: "Jquery" }
    ]
  },
  {
    id: nanoid(),
    img: 'imm.png',
    title: 'Vehicle Management System (Maintenance)',
    client: 'PT. Indominco Mandiri',
    techs: [
      { name: "react", title: "ReactJS" },
      { name: "bootstrap", title: "Bootstrap 4" },
      { name: "laravel", title: "Laravel 5.8" }
    ],
  },
  {
    id: nanoid(),
    img: 'ksp.png',
    title: 'Credit Union',
    client: 'Personal Project',
    techs: [
      { name: "react", title: "ReactJS" },
      { name: "bootstrap", title: "Bootstrap 4" },
      { name: "laravel", title: "Laravel 8.0" }
    ],
    url: 'https://ksp.netlify.app/',
    repo: 'https://github.com/MirrorBottle/school-work-fe'
  },
  {
    id: nanoid(),
    img: 'siabanggp.png',
    title: 'SIABANG GP',
    client: 'Dinas Pekerjaan Umum Balikpapan',
    techs: [
      { name: "bootstrap", title: "Bootstrap 4" },
      { name: "laravel", title: "Laravel 5.8" },
      { name: "js", title: "Leaflet" },
    ],
    url: 'http://siabanggp.balikpapan.go.id/tamu'
  },
  {
    id: nanoid(),
    img: 'online-kubar.png',
    title: 'OK Kubar',
    client: 'DISKOMINFO Kutai Barat',
    techs: [
      { name: "bootstrap", title: "Bootstrap 4" },
      { name: "laravel", title: "Laravel 5.8" },
      { name: "js", title: "ReactJS" },
    ],
  },
  {
    id: nanoid(),
    img: 'imagin-sketch.png',
    title: 'ImaginSketch',
    client: 'Personal Project',
    techs: [
      { name: "js-square", title: "Gatsby" },
      { name: "js", title: "ReactJS" },
    ],
    url: 'http://imagin-sketch.netlify.app',
    repo: 'https://github.com/MirrorBottle/profile-site'
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Always welcomes new offer!',
  btn: 'Mail Me',
  email: 'setiawanbayu66152@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/MirrorBottle',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://web.facebook.com/MirrorBottle/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/bayu-setiawan-656357202/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/MirrorBottle',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
