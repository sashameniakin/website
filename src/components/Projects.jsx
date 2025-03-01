import Project from "./Project";

//REACT NextJS Styled Components RapidAPI CoinmarketcapAPI MongoDB ChartJS NextAuth ethers web3
export default function Projects() {
  return (
    <section id="projects" className="bg-background pb-14">
      <div className="w-[80%] mx-auto flex justify-between pt-16">
        <h1 className="text-pureWhite text-contact ">PROJECTS</h1>
        <p className="text-h3 text-pureWhite hover:text-secondary hover:cursor-pointer underline decoration-secondary decoration-2 underline-offset-[5px]">
          <a href="#contact">CONTACT ME</a>
        </p>
      </div>

      <div className=" mx-auto grid w-[80%] gap-[2%] grid-cols-1 desktop:grid-cols-2 desktop:pb-[110px] pt-10">
        <Project
          src_large={"./images/projects/photosnap.jpg"}
          name="PHOTOSNAP MULTI-PAGE WEBSITE"
          techstack="REACT Tailwind CSS"
          link="https://photosnap-website-multi-page.vercel.app/"
          github_link="https://github.com/sashameniakin/photosnap-website-multiPage"
        />
        <Project
          src_large={"./images/projects/easybank.jpg"}
          name="EASYBANK LANDING PAGE"
          techstack="REACT Tailwind CSS"
          link="https://easybank-landing-page-ten-psi.vercel.app/"
          github_link="https://github.com/sashameniakin/easybank-landing-page"
        />
        <Project
          src_large={"./images/projects/adam.jpg"}
          name="SINGLE PAGE DEV PORTFOLIO"
          techstack="REACT Styled Components"
          link="https://portfolio-self-pi-88.vercel.app/"
          github_link="https://github.com/sashameniakin/portfolio-AdamKeyes-LandingPage"
        />
        <Project
          src_large={"./images/projects/calculator.jpg"}
          name="CALCULATOR APP"
          techstack="REACT Redux Tailwind CSS"
          link="https://calculator-app-topaz-pi.vercel.app/"
          github_link="https://github.com/sashameniakin/calculator-app"
        />
        <Project
          src_large={"./images/projects/crypto.png"}
          name="CRYPTO APP"
          techstack="REACT NextJS Styled Components API's MongoDB ChartJS NextAuth"
          link="https://crypto10.vercel.app/"
          github_link="https://github.com/sashameniakin/CRYPTO-Web-App"
        />

        <Project
          src_large={"./images/projects/space.jpg"}
          name="SPACE TOURISM MULTI-PAGE WEBSITE"
          techstack="REACT SASS/SCSS"
          link="https://space-tourism-six-ebon.vercel.app/"
          github_link="https://github.com/sashameniakin/space-tourism"
        />
        <Project
          src_large={"./images/projects/audiophile.jpg"}
          name="AUDIOPHILE E-COMMERCE WEBSITE"
          techstack="REACT/TS Tailwind CSS"
          link="https://audiophile-brown.vercel.app/"
          github_link="https://github.com/sashameniakin/audiophile"
        />
      </div>
    </section>
  );
}
