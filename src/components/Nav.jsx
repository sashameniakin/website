import Typewriter from "typewriter-effect";
import ScrollDownButton from "./UI/ScrollDownButton";

export default function Nav({ section2InView, section2, section1InView }) {
  return (
    <>
      <section
        ref={section2}
        className="bg-[url('./assets/images/background.png')] bg-cover h-screen bg-no-repeat bg-center opacity-80 flex flex-col"
      >
        <header className="h-screen">
          <nav className="flex justify-between p-8 fixed top-0 left-0 right-0">
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
                      : (e.currentTarget.src = "./images/icons/icon-github.svg")
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
            <div
              className={`flex ${
                !section1InView && !section2InView ? "flex-col" : "flex-row"
              } gap-6 text-nav ${
                section1InView && !section2InView
                  ? "text-background"
                  : "text-pureWhite"
              }`}
            >
              <a href="#home">
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

          <div className="flex flex-col items-end text-pureWhite px-40 pt-[140px] text-h2">
            <div className="flex flex-col items-start gap-5">
              <h1 className="text-h1">WELCOME TO MY WEBSITE</h1>
              <p>
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
              <p className="text-h3 hover:text-secondary hover:cursor-pointer underline decoration-secondary decoration-2 underline-offset-[5px]">
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
