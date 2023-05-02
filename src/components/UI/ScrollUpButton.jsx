import { useEffect, useState } from "react";

export default function ScrollUpButton() {
  const [scrollToTopButton, setScrollToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScrollToTopButton(true);
      } else {
        setScrollToTopButton(false);
      }
    });
  }, []);

  return (
    <a href="#" title="Scroll to top">
      <div
        className={`fixed ${
          scrollToTopButton ? "" : "hidden"
        }  shadow-2xl hover:ease-in-out hover:duration-300 right-3 hover:top-[795px] top-[800px] z-50 bg-secondary w-[40px] h-[40px] border-none rounded-[100px] before:absolute before:content-arrow before:top-[7px] before:right-[8px]`}
      ></div>
    </a>
  );
}
