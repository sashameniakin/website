import ScrollUpButton from "./UI/ScrollUpButton";
import { skillsDB } from "../skillsDB";

export default function About({ section1 }) {
  return (
    <div ref={section1} className="bg-whiteBackground" id="about">
      <div className="flex w-[80%] mx-auto pt-10">
        <h1 className="text-contact text-background">ABOUT</h1>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-h2 text-background py-40">under construction</p>
        <p className="text-h1 text-background py-6">SKILLS</p>
        <section className=" mx-auto grid w-[80%] desktop:w-[40%] gap-[8%] desktop:gap-[2%] grid-rows-2 desktop:pb-10 desktop:grid-rows-3 grid-cols-5 ">
          {skillsDB.map((skill) => {
            return (
              <div className="flex flex-col items-center py-2 text-center">
                <img
                  src={skill.link}
                  className="w-[32px] h-[32px]"
                  alt={skill.alt}
                />
                <p className="text-h3 text-background">{skill.description}</p>
              </div>
            );
          })}
        </section>
      </div>
      <ScrollUpButton />
    </div>
  );
}
