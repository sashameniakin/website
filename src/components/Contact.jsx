import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [inputValue, setInputValue] = useState("");
  const [blur, setBlur] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k862voe",
        "template_t90t26i",
        e.target,
        "k94NtOqejEnqZuhKh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  function handleBlur() {
    setBlur(true);
  }

  function handleChange() {
    setBlur(false);
  }

  return (
    <section className="bg-whiteBackground" id="contact">
      <div className="w-[80%] mx-auto flex flex-col desktop:flex-row gap-[20%] desktop:justify-between py-16">
        <div className="flex flex-col gap-5 w-[80%] mx-auto pb-12 desktop:pb-0 items-left desktop:w-1/2">
          <h1 className="text-contact text-background underline decoration-secondary decoration-[7px] underline-offset-[18px] pb-5">
            CONTACT
          </h1>
          <p className="text-h2 text-background opacity-60">Get in touch</p>
          <p className="text-background text-text text-center desktop:text-left">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I'll get back to you as soon as possible.
          </p>
        </div>
        <div className="flex flex-col gap-5 w-[80%] mx-auto desktop:w-1/2">
          <form onSubmit={sendEmail} className="flex flex-col gap-3">
            <input
              className="bg-whiteBackground border-b-2 border-secondary resize-none outline-none"
              type="text"
              name="name"
              placeholder="NAME"
              required
            />
            <input
              className="bg-whiteBackground border-b-2 border-secondary resize-none outline-none"
              type="text"
              placeholder="SUBJECT"
              name="subject"
              required
            />
            <input
              className="bg-whiteBackground border-b-2 border-secondary resize-none outline-none focus:invalid:border-red"
              type="email"
              placeholder="EMAIL"
              name="email"
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
              name="message"
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
