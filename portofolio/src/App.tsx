import React, { useEffect } from 'react';
import TopNavbar from './components/TopNavbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import SocialCards from './components/SocialCards';
import SoftSkills from './components/SoftSkills';
import ExperienceShort from './components/ExperienceShort';
import HardSkills from './components/HardSkills';
import ContactButtons from './components/ContactButtons'; 
import Testimonials from './components/Testimonials';

const App: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <TopNavbar />
      <AboutMe />
      <ContactButtons />
      <Home />
      <ExperienceShort />
      <HardSkills />
      <Testimonials /> 
      <SoftSkills />
      <Education />
      <SocialCards />
      <Footer />
    </div>
  );
};

export default App;