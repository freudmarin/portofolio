import React from 'react';
import TopNavbar from './components/TopNavbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import SocialCards from './components/SocialCards';
import SoftSkills from './components/SoftSkills';
import ExperienceShort from './components/ExperienceShort';

const App: React.FC = () => {
  return (
    <div>
      <TopNavbar />
      <AboutMe />
      <Home />
      <ExperienceShort />
      <SoftSkills />
      <Education />
      <SocialCards />
      <Footer />
    </div>
  );
};

export default App;