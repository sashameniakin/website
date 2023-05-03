export default function Footer() {
  return (
    <footer className="bg-whiteBackground shadow-inner">
      <section className="flex flex-col-reverse items-center gap-3 desktop:flex-row desktop:justify-between w-[90%] mx-auto py-7 desktop:py-5">
        <p className="text-background text-footer text-center">
          © 2023 Developed by Sasha Meniakin. All rights reserved.
        </p>
        <div className="flex gap-5">
          <a
            href="https://github.com/sashameniakin"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-[18px] h-[18px] hover:cursor-pointer"
              src="./images/icons/icon-github-black.svg"
              alt="github"
              onMouseOver={(e) =>
                (e.currentTarget.src = "./images/icons/icon-github-active.svg")
              }
              onMouseOut={(e) =>
                (e.currentTarget.src = "./images/icons/icon-github-black.svg")
              }
            />
          </a>
          <a
            href="https://www.frontendmentor.io/profile/sashameniakin"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-[18px] h-[18px] hover:cursor-pointer"
              src="./images/icons/icon-frontend-mentor-black.svg"
              alt="frontend-mentor"
              onMouseOver={(e) =>
                (e.currentTarget.src =
                  "./images/icons/icon-frontend-mentor-active.svg")
              }
              onMouseOut={(e) =>
                (e.currentTarget.src =
                  "./images/icons/icon-frontend-mentor-black.svg")
              }
            />
          </a>
          <a
            href="https://www.linkedin.com/in/oleksandr-meniakin/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-[18px] h-[18px] cursor-pointer"
              src="./images/icons/icon-linkedin-black.svg"
              alt="linkedin"
              onMouseOver={(e) =>
                (e.currentTarget.src =
                  "./images/icons/icon-linkedin-active.svg")
              }
              onMouseOut={(e) =>
                (e.currentTarget.src = "./images/icons/icon-linkedin-black.svg")
              }
            />
          </a>
        </div>
      </section>
    </footer>
  );
}
