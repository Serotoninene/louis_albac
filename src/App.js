// Components
import Header from "./Frames/Header";
import Realisations from "./Frames/Realisations";
import ParcoursPro from "./Frames/ParcoursPro";
import ParcoursScolaire from "./Frames/ParcoursScolaire";
import AboutMe from "./Frames/AboutMe";
import Contact from "./Frames/Contact";
import ScrollContainer from "./Components/ScrollContainer";

// Styling
import "./Scss/style.scss";
import "locomotive-scroll/src/locomotive-scroll.scss";

function App() {
  return (
    <div className="App">
      <ScrollContainer>
        <Header />
        <Realisations />
        <ParcoursScolaire />
        <ParcoursPro />
        <AboutMe />
        <Contact />
      </ScrollContainer>
    </div>
  );
}

export default App;
