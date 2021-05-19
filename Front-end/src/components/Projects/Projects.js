import React from 'react';
import './Projects.css';
import Improvement from '../../images/improvement.jpg';
import Cc from '../../images/cc.jpg';

const Projects = () => {
  return (
    <div className="projects-grid">
      <div className="project">
        <img src={Improvement} alt="Improvement" />
      </div>
      <div className="project">
        <img src={Cc} alt="Improvement" />
      </div>
    </div>
  );
};

export default Projects;
