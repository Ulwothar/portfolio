import React from 'react';
import './Projects.css';
import Improvement from '../../images/improvement.jpg';
import Cc from '../../images/cc.jpg';

const Projects = () => {
  return (
    <div className="projects-wrapper">
      <div className="projects-header-wrapper">
        <h2 className="dark-blue-text">{'const '}</h2>
        <h2 className="light-yellow-text">{'MyProjects '}</h2>
        <h2 className="white-text">{'= '}</h2>
        <h2 className="pink-text">{'() '}</h2>
        <h2 className="white-text">{'=> '}</h2>
        <h2 className="light-blue-text">{'{'}</h2>
      </div>
      <div className="projects-grid" id="projects">
        <div className="project">
          <img src={Improvement} alt="Improvement" />
        </div>
        <div className="project">
          <img src={Cc} alt="Improvement" />
        </div>
      </div>
      <h2 className="light-blue-text">{'}'}</h2>
    </div>
  );
};

export default Projects;
