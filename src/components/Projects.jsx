import Project from "./Project";

export default function Projects() {
  return (
    <section className="bg-background">
      <div className=" mx-auto grid w-[80%] gap-[2%] grid-cols-2">
        <Project
          src_large={"./images/projects/preview.jpg"}
          namr="Photosnap"
          techstack="JavaScript React"
        />
        <Project
          src_large={"./images/projects/preview.jpg"}
          namr="Photosnap"
          techstack="JavaScript React"
        />
      </div>
    </section>
  );
}
