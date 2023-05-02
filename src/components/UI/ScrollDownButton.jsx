export default function ScrollDownButton() {
  return (
    <a
      title="Scroll to down"
      className="justify-self-center self-center"
      href="#about"
    >
      <div className=" w-[30px] h-[48px] border-solid border-2 rounded-[60px] animate-bounce border-pureWhite before:w-[7px] before:h-[7px] before:border-pureWhite before:border-2 before:rounded-[60px] before:absolute before:top-[10px] before:left-[10px] before:bg-pureWhite before:animate-bounce" />
    </a>
  );
}
