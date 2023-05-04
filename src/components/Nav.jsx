import Typewriter from "typewriter-effect";
import ScrollDownButton from "./UI/ScrollDownButton";
import { useState } from "react";
import Menu from "./UI/Menu";

export default function Nav({ section2InView, section2, section1InView }) {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <section
        ref={section2}
        className="bg-[url('./assets/images/background.png')] z-20 relative bg-cover h-screen bg-no-repeat bg-center opacity-80 flex flex-col"
      >
        <header className="h-screen">
          <div className="flex flex-col items-center justify-center">
            <nav
              className={`justify-between flex h-[88px] ${
                section1InView && !section2InView
                  ? "bg-pureWhite transition delay-400 ease-in"
                  : !section1InView && !section2InView
                  ? "bg-black transition delay-400 ease-in"
                  : ""
              }  p-8  fixed top-0 left-0 right-0`}
            >
              <div className="flex gap-5">
                <a
                  href="https://github.com/sashameniakin"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="w-[22px] h-[22px] hover:cursor-pointer"
                    src={`${
                      section1InView && !section2InView
                        ? "./images/icons/icon-github-black.svg"
                        : "./images/icons/icon-github.svg"
                    }`}
                    alt="github"
                    onMouseOver={(e) =>
                      (e.currentTarget.src =
                        "./images/icons/icon-github-active.svg")
                    }
                    onMouseOut={(e) =>
                      section1InView && !section2InView
                        ? (e.currentTarget.src =
                            "./images/icons/icon-github-black.svg")
                        : (e.currentTarget.src =
                            "./images/icons/icon-github.svg")
                    }
                  />
                </a>
                <a
                  href="https://www.frontendmentor.io/profile/sashameniakin"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="w-[22px] h-[22px] hover:cursor-pointer"
                    src={`${
                      section1InView && !section2InView
                        ? "./images/icons/icon-frontend-mentor-black.svg"
                        : "./images/icons/icon-frontend-mentor.svg"
                    }`}
                    alt="frontend-mentor"
                    onMouseOver={(e) =>
                      (e.currentTarget.src =
                        "./images/icons/icon-frontend-mentor-active.svg")
                    }
                    onMouseOut={(e) =>
                      section1InView && !section2InView
                        ? (e.currentTarget.src =
                            "./images/icons/icon-frontend-mentor-black.svg")
                        : (e.currentTarget.src =
                            "./images/icons/icon-frontend-mentor.svg")
                    }
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/oleksandr-meniakin/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="w-[22px] h-[22px] cursor-pointer"
                    src={`${
                      section1InView && !section2InView
                        ? "./images/icons/icon-linkedin-black.svg"
                        : "./images/icons/icon-linkedin.svg"
                    }`}
                    alt="linkedin"
                    onMouseOver={(e) =>
                      (e.currentTarget.src =
                        "./images/icons/icon-linkedin-active.svg")
                    }
                    onMouseOut={(e) =>
                      section1InView && !section2InView
                        ? (e.currentTarget.src =
                            "./images/icons/icon-linkedin-black.svg")
                        : (e.currentTarget.src =
                            "./images/icons/icon-linkedin.svg")
                    }
                  />
                </a>
              </div>
              <div className="flex desktop:hidden">
                {menu ? (
                  <button onClick={() => setMenu(false)}>
                    <img
                      src={`${
                        section1InView && !section2InView
                          ? "./images/icons/close-black.svg"
                          : "./images/icons/close.svg"
                      }`}
                      alt="close"
                    />
                  </button>
                ) : (
                  <button
                    className="flex desktop:hidden"
                    onClick={() => setMenu(true)}
                  >
                    <img
                      src={` ${
                        section1InView && !section2InView
                          ? "./images/icons/menu-black.svg"
                          : "./images/icons/menu.svg"
                      }`}
                      alt="menu"
                    />
                  </button>
                )}
              </div>
              <div
                className={`hidden desktop:flex ${
                  !section1InView && !section2InView ? "flex-row" : "flex-row"
                } gap-6 text-nav ${
                  section1InView && !section2InView
                    ? "text-background"
                    : "text-pureWhite"
                }`}
              >
                <a href="#">
                  <p className="hover:text-secondary hover:cursor-pointer hover:underline decoration-secondary decoration-2 underline-offset-[5px]">
                    HOME
                  </p>
                </a>
                <a href="#about">
                  <p className="hover:text-secondary hover:cursor-pointer hover:underline decoration-secondary decoration-2 underline-offset-[5px]">
                    ABOUT
                  </p>
                </a>
                <a href="#projects">
                  <p className="hover:text-secondary hover:cursor-pointer hover:underline decoration-secondary decoration-2 underline-offset-[5px]">
                    PROJECTS
                  </p>
                </a>
                <a href="#contact">
                  <p className="hover:text-secondary hover:cursor-pointer hover:underline decoration-secondary decoration-2 underline-offset-[5px]">
                    CONTACT
                  </p>
                </a>
              </div>
            </nav>
            {menu && (
              <Menu
                section1InView={section1InView}
                section2InView={section2InView}
              >
                <a
                  href="#"
                  className="hover:text-secondary hover:cursor-pointer hover:underline decoration-secondary decoration-2 underline-offset-[5px]"
                >
                  <p>HOME</p>
                </a>
                <a
                  href="#about"
                  className="hover:text-secondary hover:cursor-pointer hover:underline decoration-secondary decoration-2 underline-offset-[5px]"
                >
                  <p>ABOUT</p>
                </a>
                <a
                  href="#projects"
                  className="hover:text-secondary hover:cursor-pointer hover:underline decoration-secondary decoration-2 underline-offset-[5px]"
                >
                  <p>PROJECTS</p>
                </a>
                <a
                  href="#contact"
                  className="hover:text-secondary hover:cursor-pointer hover:underline decoration-secondary decoration-2 underline-offset-[5px]"
                >
                  <p>CONTACT</p>
                </a>
              </Menu>
            )}
          </div>

          <div className="flex flex-col items-end text-pureWhite px-10 desktop:px-40 pt-[140px] text-h2">
            <div className="flex flex-col items-center desktop:items-start gap-5">
              <h1 className="text-h2 desktop:text-h1">WELCOME TO MY WEBSITE</h1>
              <p className="w-1/2 desktop:w-full">
                I'm
                <span className="text-secondary text-dev">
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 400,
                    }}
                    onInit={(typewriter) => {
                      typewriter.typeString("Developer").pauseFor(1000).start();
                    }}
                  />
                </span>
              </p>
              <p className="text-h3 w-1/2 desktop:w-full hover:text-secondary hover:cursor-pointer underline decoration-secondary decoration-2 underline-offset-[5px]">
                <a href="#contact">CONTACT ME</a>
              </p>
            </div>
          </div>
        </header>

        <ScrollDownButton />
      </section>
    </>
  );
}
