import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Social from "./components/Social";
import About from "./components/About";
import Portifolio from "./components/Portifolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About />
      <Portifolio />
      <Experience /> 
      <Contact />

      <Social />
    </div>
  );
}

export default App;
