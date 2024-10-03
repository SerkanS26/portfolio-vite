import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

const App = () => {
  return (
    <main className="bg-dark font-poppins ">
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Footer />
    </main>
  );
};

export default App;
