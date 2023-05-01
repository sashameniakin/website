export default function Project({ src_large, src_small, name, techstack }) {
  return (
    <section className="flex flex-col justify-start">
      <picture className="relative flex justify-center">
        {/* <source media="(min-width:415px)" srcSet={src_large} /> */}
        <img src={src_large} alt="foto" />
        <p>VIEW PROJECT</p>
        <p>VIEW CODE</p>
        <span className="hover:absolute hover:top-0 hover:w-full hover:h-full hover:bg-black hover:opacity-70" />
      </picture>

      <p>{name}</p>
      <p>{techstack}</p>
      <div className="hidden justify-start gap-[10px]">
        <p className="hidden absolute">VIEW PROJECT</p>
        <p className="hidden absolute">VIEW CODE</p>
      </div>
    </section>
  );
}
