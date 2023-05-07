import ScrollUpButton from "./UI/ScrollUpButton";

export default function About({ section1 }) {
  return (
    <div ref={section1} className="h-[500px] bg-whiteBackground" id="about">
      <div className="flex w-[80%] mx-auto pt-10">
        <h1 className="text-contact text-background">ABOUT</h1>
      </div>
      <div className="flex justify-center items-center h-full">
        <p className="text-h2 text-background">under construction</p>
        <img src="./images/skills/react.svg" alt="react" />
        <img src="./images/skills/html-5.svg" alt="html" />
      </div>
      <ScrollUpButton />
    </div>
  );
}
