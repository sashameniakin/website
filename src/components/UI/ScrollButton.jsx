export default function ScrollButton({ section1InView, section3InView }) {
  return (
    <a href="#" title="Scroll to top">
      <div
        className={`fixed ${
          section1InView || section3InView ? "" : "hidden"
        }  shadow-2xl hover:ease-in-out hover:duration-300 right-3 hover:top-[795px] top-[800px] z-50 bg-secondary w-[40px] h-[40px] border-none rounded-[100px] before:absolute before:content-arrow before:top-[7px] before:right-[8px]`}
      ></div>
    </a>
  );
}
