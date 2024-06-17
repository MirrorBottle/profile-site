import dynamic from "next/dynamic";
import Layout from "../src/layout/Layout";
import { Tooltip } from 'react-tooltip'
const ProjectIsotop = dynamic(() => import("../src/components/ProjectIsotop"), {
  ssr: false,
});
const Index = () => {

  const skills = [
    { name: 'Back-end Dev', value: 'Expert (4+ Years)' },
    { name: 'Front-end Dev', value: 'Expert (3+ Years)' },
    { name: 'Scrum Agile', value: 'Intermediate (2+ Years)' },
    { name: 'Mobile Dev', value: 'Intermediate (2+ Years)' },
    { name: 'Remote Working', value: 'Accustomed (3+ Years)' },
  ]

  const languages = [
    { name: 'PHP', icon: 'devicon-php-plain' },
    { name: 'Javascript', icon: 'devicon-javascript-plain' },
    { name: 'Typescript', icon: 'devicon-typescript-plain' },
    { name: 'Dart', icon: 'devicon-dart-plain' },
    { name: 'Python', icon: 'devicon-python-plain' },
    { name: 'Java', icon: 'devicon-java-plain' },
    { name: 'SQL', icon: 'devicon-mysql-plain' },
    { name: 'HTML', icon: 'devicon-html5-plain' },
    { name: 'CSS', icon: 'devicon-css3-plain' },
    { name: 'SASS', icon: 'devicon-sass-original' },
  ];

  const frameworks = [
    { name: 'Laravel', icon: 'devicon-laravel-original' },
    { name: 'Vue.js', icon: 'devicon-vuejs-plain' },
    { name: 'React', icon: 'devicon-react-original' },
    { name: 'JQuery', icon: 'devicon-jquery-plain' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain' },
    { name: 'Tailwindcss', icon: 'devicon-tailwindcss-original' },
    { name: 'Ant Design', icon: 'devicon-antdesign-plain' },
    { name: 'Bootstrap', icon: 'devicon-bootstrap-plain' },
    { name: 'Flutter', icon: 'devicon-flutter-plain' },
    { name: 'Next.js', icon: 'devicon-nextjs-plain' },
    { name: 'Nuxt.js', icon: 'devicon-nuxtjs-plain' },
    { name: 'Gatsby', icon: 'devicon-gatsby-plain' },
    { name: 'Ionic', icon: 'devicon-ionic-original' },
    { name: 'Capacitor', icon: 'devicon-capacitor-plain' },
    { name: 'Express', icon: 'devicon-express-original' },
    { name: 'CodeIgniter', icon: 'devicon-codeigniter-plain' },
  ]

  const tools = [
    { name: 'Git', icon: 'devicon-git-plain' },
    { name: 'VS Code', icon: 'devicon-vscode-plain' },
    { name: 'Github', icon: 'devicon-github-plain' },
    { name: 'Gitlab', icon: 'devicon-gitlab-plain' },
    { name: 'NPM', icon: 'devicon-npm-original-wordmark' },
    { name: 'Firebase', icon: 'devicon-firebase-plain' },
    { name: 'Jira', icon: 'devicon-jira-plain' },
    { name: 'Eslint', icon: 'devicon-eslint-plain' },
    { name: 'Jetpack', icon: 'devicon-jetpackcompose-plain' },
    { name: 'Vercel', icon: 'devicon-vercel-plain' },
    { name: 'Postman', icon: 'devicon-postman-plain' },
    { name: 'Swagger', icon: 'devicon-swagger-plain' },
  ]
  return (
    <Layout>
      <section className="section section-started">
        <div className="container">
          {/* Hero Started */}
          <div className="hero-started">
            <div
              className="slide"
            >
              {/* <img src="assets/images/profile.png" alt="" /> */}
              <span className="circle circle-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="749px"
                  height="375px"
                >
                  <path
                    fillRule="evenodd"
                    fill="#ff8059"
                    d="M749.000,0.000 C749.000,206.786 581.459,374.514 374.608,374.514 C167.758,374.514 -0.000,206.786 -0.000,0.000 "
                  />
                </svg>
              </span>
              <span className="circle circle-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="416px"
                  height="209px"
                >
                  <path
                    fillRule="evenodd"
                    fill="#3aafc9"
                    d="M-0.000,209.000 C-0.000,94.252 93.051,0.745 207.835,0.745 C322.619,0.745 416.000,94.252 416.000,209.000 "
                  />
                </svg>
              </span>
              <span className="circle circle-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="416px"
                  height="209px"
                >
                  <path
                    fillRule="evenodd"
                    fill="#b9d1e4"
                    d="M-0.000,209.000 C-0.000,94.252 93.051,0.745 207.835,0.745 C322.619,0.745 416.000,94.252 416.000,209.000 "
                  />
                </svg>
              </span>
              <span className="circle circle-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="121px"
                  height="241px"
                >
                  <path
                    fillRule="evenodd"
                    fill="#676cdb"
                    d="M0.000,0.000 C66.624,0.000 120.402,54.096 120.402,120.733 C120.402,187.371 66.624,241.000 0.000,241.000 "
                  />
                </svg>
              </span>
              <span className="circle circle-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="232px"
                  height="117px"
                >
                  <path
                    fillRule="evenodd"
                    fill="rgb(255, 208, 65)"
                    d="M232.000,0.000 C232.000,64.151 180.376,116.580 116.238,116.580 C52.100,116.580 0.000,64.151 0.000,0.000 "
                  />
                </svg>
              </span>
            </div>
            <div className="content">
              <div className="titles">
                <div
                  className="subtitle"
                >
                  Full-stack Web Developer
                </div>
                <h2
                  className="title"
                >
                  Bayu Setiawan
                </h2>
              </div>
              <div
                className="description"
              >
                <p>
                  I am Full-stack Web Developer based in Samarinda, Indonesia and mainly focus toward frontend for the late couple years. I love coffee too!
                </p>
                <div className="social-links">
                  <a target="_blank" rel="noreferrer" href="#">
                    <i aria-hidden="true" className="fab fa-github" />
                  </a>
                  <a target="_blank" rel="noreferrer" href="#">
                    <i aria-hidden="true" className="fab fa-linkedin" />
                  </a>
                  <a target="_blank" rel="noreferrer" href="#">
                    <i aria-hidden="true" className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="info-list">
              <ul>
                <li>
                  Born in <strong>Samarinda, Indonesia</strong>
                </li>
                <li>
                  Experience <strong>{new Date().getFullYear() - 2020}+ Years</strong>
                </li>
                <li>
                  Date of Birth <strong>24 Sep 2003</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section section-bg section-parallax section-parallax-1"
        id="about-section"
      >
        <div className="container">
          {/* Section Heading */}
          <div className="m-titles">
            <h2
              className="m-title"
            >
              About Me
            </h2>
          </div>
          <div className="row row-custom">

            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
              {/* Section Profile */}
              <div className="profile-box">
                <div
                  className="text"
                >
                  <p>
                    My name is Bayu Setiawan. I live in Samarinda, Kalimantan Timur, Indonesia. I have a passion for a frontend development and want to learn more. I'm still young and inexperienced in a lot of things, but if you need young man with great spirit in programming maybe i am the one you need. I can work in a team, i can be the frontend or backend, and if it needed i can do a fullstack development.
                  </p>
                  <p>
                    In the spare time, i write some short story in Indonesian and learn some other technology that got me intrested. I also a coffee entusiast, more towards manual brew and exotic local coffee from my home country.
                  </p>
                  <a
                    href="mailto:setiawanbayu66152@gmail.com"
                    rel="noopener noreferrer" target="_blank"
                    className="btn"
                  >
                    <span>Contact Me</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section section-parallax section-parallax-2"
        id="resume-section"
      >
        <div className="container">
          {/* Section Heading */}
          <div className="m-titles">
            <h2
              className="m-title"
            >
              My Resume
            </h2>
          </div>
          <div className="row row-custom">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
              {/* Description */}
              <div
                className="text"
              >
                <p>
                  Passionate Full Stack Web Developer with a knack for transforming ideas into engaging, user-friendly web applications. With a love for both front-end design and back-end logic, I excel in creating seamless digital experiences using the finest technology that best fit my clients needed.
                </p>
              </div>
              {/* Skills */}
              <div className="skills-items">
                <div
                  className="p-title"
                >
                  SKILLS
                </div>
                {skills.map(skill => (
                  <div className="skills-item" key={skill.name}>
                    <div className="name">{skill.name}</div>
                    <div className="value">
                      <span className="num">{skill.value}</span>
                    </div>
                  </div>
                ))}
              </div>
              {/* Languages */}
              <div
                className="p-title"
              >
                LANGUAGES
              </div>
              <div className="services-items mt-1 px-2">
                <Tooltip id="language-tooltip" />
                {languages.map(language => (
                  <div
                    key={language.name}
                    className="services-item"
                    data-tooltip-id="language-tooltip"
                    data-tooltip-content={language.name}
                    data-tooltip-place="top"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className={language.icon} />
                    </div>
                  </div>
                ))}
              </div>
              {/* Frameworks */}
              <div
                className="p-title"
              >
                FRAMEWORKS
              </div>
              <div className="services-items mt-1 px-2">
                <Tooltip id="framework-tooltip" />
                {frameworks.map(framework => (
                  <div
                    key={framework.name}
                    className="services-item"
                    data-tooltip-id="framework-tooltip"
                    data-tooltip-content={framework.name}
                    data-tooltip-place="top"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className={framework.icon} />
                    </div>
                  </div>
                ))}
              </div>
              {/* Tools */}
              <div
                className="p-title"
              >
                TOOLS
              </div>
              <div className="services-items mt-1 px-2">
                <Tooltip id="tool-tooltip" />
                {tools.map(tool => (
                  <div
                    key={tool.name}
                    className="services-item"
                    data-tooltip-id="tool-tooltip"
                    data-tooltip-content={tool.name}
                    data-tooltip-place="top"
                  >
                    <div className="icon">
                      <i aria-hidden="true" className={tool.icon} />
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="p-title"
              >
                EXPERIENCE
              </div>
              <div className="history-items">
                <div
                  className="history-item"
                >
                  <div className="date">Mar 2024 - Present</div>
                  <div className="name">TechQiao Inc. (テックチャオ株式会社)</div>
                  <div className="subname">Full Stack Web Developer - Remotely, Shizuoka, Japan</div>
                  <div className="text">
                    <p>
                      I'm working for the same project from the same project with new environment. My role
                      remains focused on enhancing the application's functionality, user experience, and
                      performance. Leveraging my extensive experience and deep understanding of the
                      project.
                    </p>
                  </div>
                </div>
                <div
                  className="history-item"
                >
                  <div className="date">Feb 2022 - Mar 2024</div>
                  <div className="name">Synchate Co Ltd (株式会社シンクエイト)</div>
                  <div className="subname">Full Stack Web Developer - Remotely, Tokyo, Japan</div>
                  <div className="text">
                    <p>
                      I currently work remotely as a full stack developer leveraged Vue.js and Laravel on a big
                      scale project for clients. My focus is more on the front-end side with the main focus of the
                      project is developing a web from a 20 years desktop app.

                    </p>
                  </div>
                </div>
                <div
                  className="history-item"
                >
                  <div className="date">Mar 2021 - Feb 2022</div>
                  <div className="name">PT. Indeks Media Teknologi</div>
                  <div className="subname">Full Stack Web Developer - On Site, Samarinda, Indonesia</div>
                  <div className="text">
                    <p>I served as a Full Stack Developer for a Japanese project, employing Vue.js for the
                      frontend and Laravel for the backend service. My role encompassed feature
                      development, seamless frontend-backend integration, collaborative teamwork in agile,
                      and communications between Japanese team and Indonesia team.</p>
                  </div>
                </div>
                <div
                  className="history-item"
                >
                  <div className="date">Mar 2020 - Mar 2021</div>
                  <div className="name">PT. Thortech Asia Software</div>
                  <div className="subname">Full Stack Web Developer - On Site, Samarinda, Indonesia</div>
                  <div className="text">
                    <p>Developed two projects using React.js and Laravel as a full stack developer working in a
                      team of four and act as the lead of the front-end team.</p>
                  </div>
                </div>
              </div>
              {/* History */}
              <div className="history-left">
                <div className="history-items">
                  <div
                    className="p-title"
                  >
                    EDUCATION
                  </div>
                  <div
                    className="history-item"
                  >
                    <div className="date">Mar 2021 - Present</div>
                    <div className="name">Universitas Mulawarman</div>
                    <div className="subname">Bachelors of Informatics Engineering</div>
                  </div>
                  <div
                    className="history-item"
                  >
                    <div className="date">Mar 2019 - Mar 2021</div>
                    <div className="name">SMKN 7 Samarinda</div>
                    <div className="subname">Vocational Study (RPL)</div>
                  </div>
                </div>

              </div>
              <div className="history-right">
                <div className="history-items">
                  <div
                    className="p-title"
                  >
                    AWARDS
                  </div>
                  <div
                    className="history-item"
                  >
                    <div className="date">2023 - Hackathon 4.0 x #Hack4ID</div>
                    <div className="name">Favorite Winner "Livvy"</div>
                    <div className="text">
                      <p>
                        Livvy is a service that provides a new solution for house down-payment using
                        blockchain technology.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="clear" />
              {/* Button CV */}
              <a
                target="_blank"
                rel="noreferrer"
                download
                href="/assets/files/resume.pdf"
                className="btn"
              >
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section section-bg section-parallax section-parallax-5"
        id="works-section"
      >
        <div className="container">
          {/* Section Heading */}
          <div className="m-titles">
            <h2
              className="m-title"
            >
              My Projects
            </h2>
          </div>
          <div className="row row-custom">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
              {/* Description */}
              <div
                className="text"
              >
                <p>
                  Here is a collection of my favorite projects that I've developed recently. Each project showcases my skills and dedication to creating high-quality applications. From innovative features to seamless user experiences, these projects represent the best of my work.
                </p>
              </div>
            </div>
          </div>
          {/* Works */}
          <ProjectIsotop />
        </div>
      </section>
    </Layout>
  );
};
export default Index;
