export default function Menu({ section1InView, section2InView, children }) {
  return (
    <div
      className={`fixed top-[88px] left-[10px] right-[10px] rounded-md ${
        section1InView && !section2InView
          ? "bg-background"
          : "bg-whiteBackground"
      }  z-50`}
    >
      <div
        className={`mx-6 mt-6 pt-8 pb-[50px] gap-6 items-center flex flex-col text-h2 ${
          section1InView && !section2InView
            ? "text-pureWhite"
            : "text-background"
        } `}
      >
        {children}
      </div>
    </div>
  );
}
