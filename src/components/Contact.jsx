import { useState } from "react";

export default function Contact() {
  const [inputValue, setInputValue] = useState("");
  const [blur, setBlur] = useState(false);

  function handleBlur() {
    setBlur(true);
  }

  function handleChange() {
    setBlur(false);
  }

  return (
    <section className="bg-whiteBackground" id="contact">
      <div className="w-[80%] mx-auto flex gap-[20%] justify-between py-16">
        <div className="flex flex-col gap-5 w-1/2">
          <h1 className="text-contact text-background underline decoration-secondary decoration-[7px] underline-offset-[18px] pb-5">
            CONTACT
          </h1>
          <p className="text-background text-text">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I'll get back to you as soon as possible.
          </p>
        </div>
        <div className="flex flex-col gap-5 w-1/2">
          <form className="flex flex-col gap-3">
            <input
              className="bg-whiteBackground border-b-2 border-secondary resize-none outline-none"
              type="text"
              placeholder="NAME"
              required
            />
            <input
              className="bg-whiteBackground border-b-2 border-secondary resize-none outline-none"
              type="email"
              placeholder="EMAIL"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onBlur={handleBlur}
              onFocus={handleChange}
              required
            />
            {inputValue &&
              !blur &&
              (!inputValue.includes("@") ||
                (inputValue.includes("@") &&
                  inputValue.charAt(inputValue.length - 1) === "@") ||
                (inputValue.includes(".") &&
                  inputValue.charAt(inputValue.length - 1) === ".")) && (
                <span>Sorry, invalid format here</span>
              )}
            <textarea
              className="bg-whiteBackground border-b-2 border-secondary resize-none outline-none"
              type="textarea"
              placeholder="MESSAGE"
              required
            />
            <button
              className="text-h3 text-background hover:text-secondary hover:cursor-pointer underline decoration-secondary decoration-2 underline-offset-[5px]"
              type="submit"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
