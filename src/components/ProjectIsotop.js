import Isotope from "isotope-layout";
import { nanoid } from "nanoid";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
const ProjectIsotop = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  const techs = {
    laravel: { name: 'Laravel', icon: 'devicon-laravel-original colored' },
    vue: { name: 'Vue.js', icon: 'devicon-vuejs-plain colored' },
    jquery: { name: 'JQuery', icon: 'devicon-jquery-plain colored' },
    react: { name: 'React', icon: 'devicon-react-original colored' },
    node: { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
    tailwind: { name: 'Tailwindcss', icon: 'devicon-tailwindcss-original colored' },
    antdesign: { name: 'Ant Design', icon: 'devicon-antdesign-plain colored' },
    bootstrap: { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
    flutter: { name: 'Flutter', icon: 'devicon-flutter-plain colored' },
    nextjs: { name: 'Next.js', icon: 'devicon-nextjs-plain colored' },
    nuxtjs: { name: 'Nuxt.js', icon: 'devicon-nuxtjs-plain colored' },
    gatsby: { name: 'Gatsby', icon: 'devicon-gatsby-plain colored' },
    typescript: { name: 'Typescript', icon: 'devicon-typescript-plain' },
    ionic: { name: 'Ionic', icon: 'devicon-ionic-original colored' },
    capacitor: { name: 'Capacitor', icon: 'devicon-capacitor-plain colored' },
    express: { name: 'Express', icon: 'devicon-express-original colored' },
    codeigniter: { name: 'CodeIgniter', icon: 'devicon-codeigniter-plain colored' },
    git: { name: 'Git', icon: 'devicon-git-plain colored' }
  };
  const projects = [
    {
      id: nanoid(),
      img: 'japan.jpg',
      title: 'Japan Project',
      client: 'Classified Client',
      sorting: 'web',
      techs: [
        { name: "laravel", title: "Laravel 7" },
        { name: "vue", title: "Vue 2" },
        { name: "git", title: "± 3 Year Development" }
      ],
    },
    {
      id: nanoid(),
      img: 'distan-kubar.png',
      title: 'Company Profile',
      client: 'DISTAN Kutai Barat',
      sorting: 'compro',
      url: 'https://distan-kubar.thortech.asia/',
      techs: [
        { name: "laravel", title: "Laravel 5.8" },
        { name: "bootstrap", title: "Bootstrap 4" },
        { name: "jquery", title: "Jquery" }
      ]
    },
    {
      id: nanoid(),
      img: 'imm.png',
      title: 'Vehicle Management System (Maintenance)',
      client: 'PT. Indominco Mandiri',
      sorting: 'web',
      techs: [
        { name: "react", title: "ReactJS" },
        { name: "bootstrap", title: "Bootstrap 4" },
        { name: "laravel", title: "Laravel 5.8" }
      ],
    },
    {
      id: nanoid(),
      img: 'siabanggp.png',
      title: 'SIABANG GP',
      client: 'Dinas Pekerjaan Umum Balikpapan',
      sorting: 'web',
      techs: [
        { name: "bootstrap", title: "Bootstrap 4" },
        { name: "laravel", title: "Laravel 5.8" },
        { name: "jquery", title: "JQuery" },
      ],
      url: 'http://siabanggp.balikpapan.go.id/tamu'
    },
    {
      id: nanoid(),
      img: 'online-kubar.png',
      title: 'OK Kubar',
      client: 'DISKOMINFO Kutai Barat',
      sorting: 'web',
      techs: [
        { name: "bootstrap", title: "Bootstrap 4" },
        { name: "laravel", title: "Laravel 5.8" },
        { name: "react", title: "ReactJS" },
        { name: "typescript", title: "Typescript" },
      ],
    },
    {
      id: nanoid(),
      img: 'imagin-sketch.png',
      title: 'Penaku',
      client: 'Personal Project',
      sorting: 'web',
      techs: [
        { name: "gatsby", title: "Gatsby" },
        { name: "react", title: "ReactJS" },
        { name: "typescript", title: "Typescript" },
      ],
      url: 'https://penaku.my.id',
      repo: 'https://github.com/MirrorBottle/profile-site'
    },
    {
      id: nanoid(),
      img: 'citra.png',
      title: 'Citra99 Sharia Fintech',
      client: 'Citra99',
      sorting: 'web',
      techs: [
        { name: "vue", title: "Vue2" },
        { name: "laravel", title: "Laravel 7" },
      ]
    },
    {
      id: nanoid(),
      img: 'perumdam.png',
      title: 'Perumdam Flood Report (Thesis)',
      client: 'Personal Client',
      sorting: 'web',
      techs: [
        { name: "jquery", title: "Jquery" },
        { name: "laravel", title: "Laravel 8" },
        { name: "bootstrap", title: "Bootstrap 4" },
      ],
      url: 'http://perumdam.naflatech.com'
    },
    {
      id: nanoid(),
      img: 'natari.png',
      title: 'Natari Company Profile',
      client: 'Personal Client',
      sorting: 'compro',
      techs: [
        { name: "jquery", title: "Jquery" },
        { name: "laravel", title: "Laravel 8" },
        { name: "bootstrap", title: "Bootstrap 4" },
      ],
      url: 'http://natari.id'
    },
    {
      id: nanoid(),
      img: 'vote.jpg',
      title: 'E-Vote Konda 2 Balikpapan',
      client: 'Konda 2 Balikpapan',
      sorting: 'web',
      techs: [
        { name: "jquery", title: "Jquery" },
        { name: "laravel", title: "Laravel 8" },
        { name: "bootstrap", title: "Bootstrap 4" },
      ],
    },
    {
      id: nanoid(),
      img: 'kenji.png',
      title: 'GKII BPN Profile',
      client: 'Kemah Injil Balikpapan',
      sorting: 'compro',
      techs: [
        { name: "vue", title: "Vue 3" },
        { name: "laravel", title: "Laravel 8" },
      ],
      url: 'https://gkiibpn.com'
    },
    {
      id: nanoid(),
      img: 'bdriver.png',
      title: 'BDriver - Vehicle Management System',
      client: 'Bank Kaltimtara',
      sorting: 'web',
      techs: [
        { name: "laravel", title: "Laravel 8" },
        { name: "jquery", title: "Jquery" },
      ]
    },
    {
      id: nanoid(),
      img: 'anandita.png',
      title: 'PT. Anandita Profile',
      client: 'PT. Anandita Putri Akmal',
      sorting: 'compro',
      techs: [
        { name: "laravel", title: "Laravel 8" },
        { name: "jquery", title: "Jquery" },
      ],
      url: 'https://pt-anandita.com'
    },
    {
      id: nanoid(),
      img: 'sidayaku.png',
      title: 'SIDAYAKU - Online Visit System',
      client: 'Personal Client',
      sorting: 'web',
      techs: [
        { name: "laravel", title: "Laravel 8" },
        { name: "jquery", title: "Jquery" },
      ],
      url: 'https://sidayaku.my.id/'
    },
    {
      id: nanoid(),
      img: 'sidabusu.png',
      title: 'SIDABUSU - Vehicle Management System (App & Website)',
      client: 'Personal Client',
      sorting: 'web',
      techs: [
        { name: "laravel", title: "Laravel 8" },
        { name: "jquery", title: "Jquery" },
        { name: "ionic", title: "Ionic 5" },
      ],
    },
    {
      id: nanoid(),
      img: 'simpeg.png',
      title: 'SIMPEG - Staff Management System',
      client: 'Personal Client',
      sorting: 'web',
      techs: [
        { name: "laravel", title: "Lumen" },
        { name: "react", title: "React" },
      ],
    },
    {
      id: nanoid(),
      img: 'naj.png',
      title: 'NAJ - E-Procurement (Maintenance)',
      client: 'NAJ',
      sorting: 'web',
      techs: [
        { name: "laravel", title: "Laravel 7" },
        { name: "jquery", title: "Jquery" },
      ],
    },
    {
      id: nanoid(),
      img: 'gjmf.png',
      title: 'GJMF',
      client: 'FKIP Unmul',
      sorting: 'web',
      techs: [
        { name: "node", title: "Node JS" },
        { name: "vue", title: "Vue 2" },
      ],
    },
    {
      id: nanoid(),
      img: 'pt-anandita-app.png',
      title: 'PT. Anandita App',
      client: 'PT. Anandita Putri Akmal',
      sorting: 'mobile',
      techs: [
        { name: "flutter", title: "Flutter 2" },
        { name: "laravel", title: "Laravel 8" }
      ],
    },
    {
      id: nanoid(),
      img: 'citra-mobile.png',
      title: 'Citra99 Mobile',
      client: 'Citra99',
      sorting: 'mobile',
      techs: [
        { name: "flutter", title: "Flutter 2" },
        { name: "laravel", title: "Laravel 7" }
      ],
      url: 'https://play.google.com/store/apps/details?id=com.citra99.citra99mobile'
    },
    {
      id: nanoid(),
      img: 'citra-profile.png',
      title: 'Citra99 Company Profile & Auction',
      client: 'Citra99',
      sorting: 'compro',
      techs: [
        { name: "jquery", title: "Jquery" },
        { name: "laravel", title: "Laravel 8" },
        { name: "bootstrap", title: "Bootstrap 4" }
      ],
      url: 'https://citra99.com/'
    },
  ];
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".works-items", {
        itemSelector: ".works-col",
        percentPosition: true,
        masonry: {
          columnWidth: ".works-col",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
      console.log(isotope)
    }, 1000);
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
      console.log(isotope)
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <Fragment>
      <div className="works-box">
        <div
          className="filter-links"
        >
          <a
            className={`c-pointer ${activeBtn("*")}`}
            onClick={handleFilterKeyChange("*")}
            data-href=".works-col"
          >
            All
          </a>
          <a
            className={`c-pointer ${activeBtn("sorting-compro")}`}
            onClick={handleFilterKeyChange("sorting-compro")}
            data-href=".sorting-compro"
          >
            Web Profile
          </a>
          <a
            className={`c-pointer ${activeBtn("sorting-web")}`}
            onClick={handleFilterKeyChange("sorting-web")}
            data-href=".sorting-web"
          >
            Web System
          </a>
          <a
            className={`c-pointer ${activeBtn("sorting-mobile")}`}
            onClick={handleFilterKeyChange("sorting-mobile")}
            data-href=".sorting-mobile"
          >
            Mobile Dev
          </a>
        </div>
        <div className="works-items works-list-items row">
          {projects.map(project => (
            <div key={project.id} className={`works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-${project.sorting}`}>
              <div className="works-item">
                <a>
                  <span
                    className="image"
                  >
                    <span className="img">
                      <img src={`/assets/images/works/${project.img}`} alt={project.title} />
                      <span className="overlay" />
                    </span>
                  </span>
                  <span className="desc">
                    <span className="name">{project.title}</span>
                    <span className="category">
                      {project.client}
                      <br />
                      <div className="flex mt-2">
                        {project.techs.map(tech => (
                          <p className="m-0" key={tech.name}><i className={techs[tech.name] ? techs[tech.name].icon : ''}></i> {tech.title}</p>
                        ))}
                      </div>
                    </span>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};
export default ProjectIsotop;
