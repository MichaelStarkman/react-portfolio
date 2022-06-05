import * as React from "react";
// import { useRef } from 'react'
import HomeScreen from './Components/HomeScreen/HomeScreen';
import PortNavBar from './Components/PortNavBar/PortNavBar';
import AboutMe from './Components/AboutMe/AboutMe';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import ContactForm from './Components/ContactForm/ContactForm';
import PortFooterBar from './Components/PortFooterBar/PortFooterBar'
import ScrollToTop from "./Components/Scroll/ScrollToTop";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  // const homeScreenSection = useRef(null);
  // const projectsSection = useRef(null);
  // const aboutSection = useRef(null);
	// const skillsSection = useRef(null);
	// const contactSection = useRef(null);

	// const scrollDown = (ref) => {
	// 	window.scrollTo({
	// 		top: ref.current.offsetTop,
	// 		behavior: 'smooth',
	// 	});
	// };
  return (
    <div className="App">
      <ScrollToTop />
      <PortNavBar></PortNavBar>
      <HomeScreen
        // ref={homeScreenSection}
      ></HomeScreen>
      <Projects
        // ref={projectsSection}
      ></Projects>
      <Skills
        // ref={skillsSection}
      ></Skills>
      <AboutMe
        // ref={aboutSection}
      ></AboutMe>
      <ContactForm
        // ref={contactSection}
      ></ContactForm>
      <PortFooterBar></PortFooterBar>
    </div>
  );
}

export default App;
