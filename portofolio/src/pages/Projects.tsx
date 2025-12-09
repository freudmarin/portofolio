import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import AnimationWrapper from '../components/AnimationWrapper';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const Projects: React.FC = () => {

  return (
    <AnimationWrapper>
      <section className="container" style={{ marginTop: '3rem' }}>
        <AnimationWrapper delay={0.1}>
          <h1 className="fancy" style={{ textAlign: 'center' }}>Innovative Projects</h1>
        </AnimationWrapper>
        <motion.div
          className="project-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="project-card"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              style={{ position: 'relative', overflow: 'visible' }}
            >
              <div className="project-title">{project.title}</div>
              <div className="project-desc">{project.description}</div>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
              <div className="project-links">
                {project.links.map((link) => (
                  <a href={link.url} target="_blank" rel="noopener noreferrer" key={link.url}>{link.label}</a>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </AnimationWrapper>
  );
};

export default Projects;