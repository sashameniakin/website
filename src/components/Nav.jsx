import Typewriter from "typewriter-effect";

export default function Nav() {
  return (
    <>
      <section className="bg-[url('./assets/images/background.png')] bg-cover h-screen bg-no-repeat bg-center opacity-80 flex flex-col">
        <header className="h-screen">
          <nav className="flex justify-between p-8">
            <div className="flex gap-5">
              <a
                href="https://github.com/sashameniakin"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="w-[22px] h-[22px] hover:cursor-pointer"
                  src="./images/icons/icon-github.svg"
                  alt="github"
                  onMouseOver={(e) =>
                    (e.currentTarget.src =
                      "./images/icons/icon-github-active.svg")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.src = "./images/icons/icon-github.svg")
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
                  src="./images/icons/icon-frontend-mentor.svg"
                  alt="frontend-mentor"
                  onMouseOver={(e) =>
                    (e.currentTarget.src =
                      "./images/icons/icon-frontend-mentor-active.svg")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.src =
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
                  src="./images/icons/icon-linkedin.svg"
                  alt="linkedin"
                  onMouseOver={(e) =>
                    (e.currentTarget.src =
                      "./images/icons/icon-linkedin-active.svg")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.src = "./images/icons/icon-linkedin.svg")
                  }
                />
              </a>
            </div>
            <div className="flex text-pureWhite gap-6 text-nav">
              <p className="hover:text-secondary hover:cursor-pointer hover:underline decoration-secondary decoration-2 underline-offset-[5px]">
                HOME
              </p>
              <p className="hover:text-secondary hover:cursor-pointer hover:underline decoration-secondary decoration-2 underline-offset-[5px]">
                ABOUT
              </p>
              <p className="hover:text-secondary hover:cursor-pointer hover:underline decoration-secondary decoration-2 underline-offset-[5px]">
                PROJECTS
              </p>
              <p className="hover:text-secondary hover:cursor-pointer hover:underline decoration-secondary decoration-2 underline-offset-[5px]">
                CONTACT
              </p>
            </div>
          </nav>
          <div className="flex flex-col items-end text-pureWhite px-40 pt-[60px] text-h2">
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
        <div className="justify-self-center self-center w-[30px] h-[48px] border-solid border-2 rounded-[60px] animate-bounce border-pureWhite before:w-[7px] before:h-[7px] before:border-pureWhite before:border-2 before:rounded-[60px] before:absolute before:top-[10px] before:left-[10px] before:bg-pureWhite before:animate-bounce" />
      </section>
      <img src="./images/projects/preview.jpg" alt="foto" />
    </>
  );
}
