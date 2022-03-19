import s from "./homepage.module.scss";
import Tweety from "../images/Tweety.png";
import project1 from "../images/project.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import Particles from "react-tsparticles";
import html5 from "../images/html5.png";
import css from "../images/css.png";
import javascript from "../images/javascript.png";
import react from "../images/react.jpeg";
import redux from "../images/redux.png";

export default function Homepage() {
  const data = [
    {
      image: project3,
      title: "ProfessionalsUK",
      date: "Oct 2021 - Present",
      desc: "Currently working here as part time & freelancer, this project is on Php & Reactjs. I am proving HTML, CSS, Reactjs support in developing additional features like Email page creation, Improving existing CSS, Converting mobile friendly, New Mobile hamburger development etc.",
      url: "https://professionalsuk.co.uk/",
    },
    {
      image: project1,
      title: "JobSeeker Services Platform",
      date: "April 2019 - Oct 2020",
      desc: "It's a online job seeker service platform where jobseeker can purchase services like Resume Writing, Higher ranking in the eye of Recruiter, etc services. I worked on the mobile web version of this, Skills used are ReactJS, Redux, Javascript, HTML, CSS & consumed Rest Api for backend data.",
      url: "https://resume.naukri.com/",
    },
    {
      image: project2,
      title: "Recruiter Management System",
      date: "Nov 2018 - July 2019",
      desc: "Its a dedicated portal used by Recruiters for services like Job posting, Resume downloading, Jobseeker searching. I worked here on almost all modules like Job posting form, Candidate searching page, Send message service. Skills used are HTML, CSS, ReactJS, Redux, JS, Webpack, Axios.",
      url: "https://rms.naukri.com/",
    },
  ];

  return (
    <>
      <Particles
        height="320px"
        options={{
          height: "100px",
          background: {
            color: {
              value: "#000000",
            },
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
          },
          fullScreen: {
            enable: false,
          },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                mode: "repulse",
              },
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              grab: {
                distance: 400,
              },
              push: {
                groups: ["z5000", "z7500", "z2500", "z1000"],
              },
            },
          },
          particles: {
            color: {
              animation: {
                h: {
                  speed: 20,
                },
              },
            },
            groups: {
              z5000: {
                number: {
                  value: 70,
                },
                zIndex: {
                  value: 50,
                },
              },
              z7500: {
                number: {
                  value: 30,
                },
                zIndex: {
                  value: 75,
                },
              },
              z2500: {
                number: {
                  value: 50,
                },
                zIndex: {
                  value: 25,
                },
              },
              z1000: {
                number: {
                  value: 40,
                },
                zIndex: {
                  value: 10,
                },
              },
            },
            links: {
              color: {
                value: "#ffffff",
              },
              opacity: 0.4,
            },
            move: {
              angle: {
                value: 10,
              },
              attract: {
                rotate: {
                  x: 600,
                  y: 1200,
                },
              },
              direction: "right",
              enable: true,
              path: {},
              outModes: {
                bottom: "out",
                left: "out",
                right: "out",
                top: "out",
              },
              speed: 5,
              spin: {},
            },
            number: {
              value: 200,
            },
            opacity: {
              animation: {
                speed: 3,
                minimumValue: 0.1,
              },
            },
            size: {
              animation: {},
            },
            zIndex: {
              value: 5,
              opacityRate: 0.5,
            },
          },
          emitters: {
            autoPlay: true,
            fill: true,
            life: {
              wait: false,
            },
            rate: {
              quantity: 1,
              delay: 7,
            },
            shape: "square",
            startCount: 0,
            size: {
              mode: "percent",
              height: 0,
              width: 0,
            },
            particles: {
              shape: {
                type: "images",
                options: {
                  images: {
                    src: "https://particles.js.org/images/cyan_amongus.png",
                    width: 500,
                    height: 634,
                  },
                },
              },
              size: {
                value: 40,
              },
              move: {
                speed: 10,
                outModes: {
                  default: "none",
                  right: "destroy",
                },
                straight: true,
              },
              zIndex: {
                value: 0,
              },
              rotate: {
                value: {
                  min: 0,
                  max: 360,
                },
                animation: {
                  enable: true,
                  speed: 10,
                  sync: true,
                },
              },
            },
            position: {
              x: -5,
              y: 55,
            },
          },
        }}
      />
      <div className={s.body}>
        <div className={s.header}>
          <div className={s.circle}>
            <img alt="tweety" width={"50px"} src={Tweety} />
          </div>
          <div>
            <h1>Anu Chaudhary</h1>
          </div>
          <div>
            <p>
              <h3>Frontend Developer</h3>
            </p>
          </div>
          <div>
            <p>
              <h3>JavaScript, ReactJS, Redux, HTML5, CSS3, Web Development.</h3>
            </p>
          </div>
        </div>
        <div className={s.content}>
          <div className={s.about}>
            <p>
              <h2>About me</h2>
            </p>
            <p>
              Hi there, I am Anu Chaudhary, a Frontend Developer with 2 years of
              professional working experience in IT company. I like to build
              awesome UI, love to learn new things in Frontend. Currently I am
              skilled in ReactJS framework along with Redux, CSS3, Html5,
              Webpack & RestAPIs.
              <p>
                I recently started my full time Job search in United kingdom, Remote
                working preference.
              </p>
            </p>
          </div>
          <div className={s.social}>
            <h2>Contacts</h2>
            <div>
              <p>
                <i className="fa fa-envelope-o"></i>
                <span className={s.common}>
                  <a
                    rel="noreferrer"
                    href="mailto:anuchaudhary000111@gmail.com"
                  >
                    E.Mail
                  </a>
                </span>
              </p>
              <p>
                <i className="fa fa-linkedin"></i>
                <span className={s.common}>
                  <a
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/anuchaudhary000111/"
                    target="_blank"
                  >
                    linkedin
                  </a>
                </span>
              </p>
              <p>
                <i className="fa fa-github"></i>
                <span className={s.common}>
                  <a
                    rel="noreferrer"
                    href="https://github.com/anuchaudhary000111"
                    target="_blank"
                  >
                    github
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className={s.projectSection}>
          <p>
            <h2>Projects</h2>
          </p>

          {data.map((item, index) => {
            return (
              <div key={index} className={s.projectRow}>
                <div className={s.projectImg}>
                  <img
                    alt="project"
                    width={"100%"}
                    height="150px"
                    src={item.image}
                  />
                </div>
                <div className={s.projectDesc}>
                  <h4>{item.title}</h4>
                  <p className={s.date}>{item.date}</p>
                  <p className={s.desc}>{item.desc}</p>
                  <p className={s.date}>
                    <a href={item.url} rel="noreferrer" target="_blank">
                      Project Url
                    </a>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={s.icons}>
        <span>
          <img alt="project" src={html5} />
        </span>
        <span>
          <img alt="project" src={css} />
        </span>

        <span>
          <img alt="project" src={javascript} />
        </span>

        <span>
          <img alt="project" src={react} />
        </span>

        <span>
          <img alt="project" src={redux} />
        </span>
      </div>
      <div className={s.footerSection}>
        <div className={s.footer}>
          <p>Anu Chaudhary © 2022</p>
        </div>
      </div>
    </>
  );
}
