import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useInView } from "react-intersection-observer";

function App() {
  const [section1Ref, section1InView] = useInView({ threshold: 0.1 });
  const [section2Ref, section2InView] = useInView({ threshold: 0.05 });
  const [section3Ref, section3InView] = useInView({ threshold: 0.05 });

  return (
    <>
      <Nav
        section2InView={section2InView}
        section2={section2Ref}
        section1InView={section1InView}
      />
      <About
        section1={section1Ref}
        section1InView={section1InView}
        section3InView={section3InView}
      />

      <Projects section3={section3Ref} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
