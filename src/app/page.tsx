import Header from './components/Header'
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';


export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Testimonials />
      <Skills />
      <Projects />
      <Pricing />
      <Contact />
      <Footer />
    </>
  )
}
