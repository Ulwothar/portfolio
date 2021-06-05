import React from 'react';
import './Projects.css';
import Improvement from '../../images/improvement.jpg';
import Cc from '../../images/cc.jpg';

const Projects = () => {
  return (
    <div className="projects-wrapper" id="projects">
      <div className="projects-header-wrapper">
        <h2 className="dark-blue-text">{'const '}</h2>
        <h2 className="light-yellow-text">{'MyProjects '}</h2>
        <h2 className="white-text">{'= '}</h2>
        <h2 className="pink-text">{'() '}</h2>
        <h2 className="white-text">{'=> '}</h2>
        <h2 className="light-blue-text">{'{'}</h2>
      </div>
      <div className="projects">
        <div className="project">
          <img src={Improvement} alt="Improvement" />
          <p className="white-text">
            This web application is a continuous improvement solution for a
            company of medium to large size. It was build to let employees place
            an improvement sugestions, which are then beeing proccessed by
            managing staff to determine if the suggestion is valid.
          </p>
        </div>
        <hr></hr>
        <div className="project">
          <img src={Cc} alt="Improvement" />
        </div>
      </div>
      <div className="header-bracket-ending">
        <h2 className="light-blue-text">{'}'}</h2>
      </div>
    </div>
  );
};

export default Projects;
