export default function Project({
  src_large,
  src_small,
  name,
  techstack,
  link,
  github_link,
}) {
  return (
    <section className="flex flex-col justify-start">
      <picture className="group relative flex justify-center">
        <source media="(min-width:415px)" srcSet={src_large} />
        <img src={src_large} alt="foto" />
        <div className="hidden absolute z-10 h-full items-center justify-center gap-5 group-hover:flex group-hover:flex-col">
          <a href={link} target="_blank" rel="noreferrer">
            <p className="text-pureWhite text-dev hover:text-secondary hover:cursor-pointer underline decoration-secondary decoration-2 underline-offset-[5px]">
              VIEW PROJECT
            </p>
          </a>
          <a href={github_link} target="_blank" rel="noreferrer">
            <p className="text-pureWhite text-dev hover:text-secondary hover:cursor-pointer underline decoration-secondary decoration-2 underline-offset-[5px]">
              VIEW CODE
            </p>
          </a>
        </div>
        <span className="group-hover:absolute group-hover:top-0 group-hover:w-full group-hover:h-full group-hover:bg-black group-hover:opacity-70 group-hover:cursor-pointer" />
      </picture>

      <p className="text-pureWhite text-projects pt-4">{name}</p>
      <p className="text-pureWhite text-h3 py-2">{techstack}</p>
      <div className="hidden justify-start gap-[10px] group-hover:flex">
        <p className="hidden absolute">VIEW PROJECT</p>
        <p className="hidden absolute">VIEW CODE</p>
      </div>
    </section>
  );
}
