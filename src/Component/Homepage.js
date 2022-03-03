import s from "./homepage.module.scss";
import Tweety from "../images/Tweety.png";
import project1 from "../images/project.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import Particles from "react-tsparticles";

export default function Homepage() {
  const data = [
    {
      image: project1,
      title: "Why do we use it?",
      date: "oct,2010 - oct,2012",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many websites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like.",
    },
    {
      image: project2,
      title: "Why do we use it?",
      date: "oct,2010 - oct,2012",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many websites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like.",
    },
    {
      image: project3,
      title: "Why do we use it?",
      date: "oct,2010 - oct,2012",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many websites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like.",
    },
  ];

  return (
    <>
      <Particles
        height="300px"
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
              <h3>SKills: HTML, CSS, JavaScript, React.</h3>
            </p>
          </div>
        </div>
        <div className={s.content}>
          <div className={s.about}>
            <p>
              <h2>About me</h2>
            </p>
            <p>
              Hi all, Anu Chaudhary loves to do programming, writting, speaking
              and travelling. I worked as a freelancer. I live my life with my
              own conditions and don't like the interference of any other person
              (or) third person.
            </p>
          </div>
          <div className={s.social}>
            <h2>Contacts</h2>
            <div>
              <p>
                <i class="fa fa-envelope-o"></i>
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
                <i class="fa fa-linkedin"></i>
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
                <i class="fa fa-github"></i>
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
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={s.footerSection}>
        <div className={s.footer}>
          <p>© 2022</p>
        </div>
      </div>
    </>
  );
}
