import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import AnimationWrapper from '../components/AnimationWrapper';
import SoftSkills from '../components/SoftSkills';
import Education from '../components/Education';
import SocialCards from '../components/SocialCards';

const Home: React.FC = () => {
   return (
      <AnimationWrapper>
         <section id="projects" className="container">
            <h2 className="fancy" style={{color: '#fff'}}>Projects</h2>
            <div className="project-grid">
               {projects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
               ))}
            </div>
         </section>
      </AnimationWrapper>
      );
   };

   export default Home;