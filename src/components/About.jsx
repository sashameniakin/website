import ScrollButton from "./UI/ScrollButton";

export default function About({ section1, section1InView }) {
  return (
    <div ref={section1} className="h-[500px] bg-whiteBackground" id="about">
      <div className="flex justify-center items-center h-full">
        <p className="text-h2 text-background">under construction</p>
      </div>
      <ScrollButton section1InView={section1InView} />
    </div>
  );
}