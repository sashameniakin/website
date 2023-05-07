import ScrollUpButton from "./UI/ScrollUpButton";

export default function About({ section1 }) {
  return (
    <div ref={section1} className="h-[500px] bg-whiteBackground" id="about">
      <div className="flex w-[80%] mx-auto pt-10">
        <h1 className="text-contact text-background">ABOUT</h1>
      </div>
      <div className="flex flex-col justify-center items-center h-full">
        <p className="text-h2 text-background">under construction</p>
        <p className="text-h1 text-background">SKILLS</p>
        <img src="./images/skills/react.svg" alt="react" />
        <img src="./images/skills/html-5.svg" alt="html" />
        <img src="./images/skills/css3.svg" alt="css" />
        <img src="./images/skills/redux.svg" alt="redux" />
        <img src="./images/skills/javascript.svg" alt="javascript" />
        <img src="./images/skills/git.svg" alt="git" />
      </div>
      <ScrollUpButton />
    </div>
  );
}
