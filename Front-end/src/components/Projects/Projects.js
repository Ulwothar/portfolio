import React from 'react';
import './Projects.css';
import Improvement from '../../images/improvement.jpg';
import Cc from '../../images/cc.jpg';
import ReactImage from '../../images/react.png';
import NodeImage from '../../images/nodejs.png';
import ExpressImage from '../../images/express.png';
import MongoImage from '../../images/mongo.png';

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
          <div className="project-left">
            <img src={Improvement} alt="Improvement" className="project-logo" />
            <div className="tech-wrapper">
              <img src={ReactImage} alt="React js logo" className="tech-logo" />
              <img src={NodeImage} alt="Node js logo" className="tech-logo" />
              <img src={MongoImage} alt="MongoDB logo" className="tech-logo" />
              <img
                src={ExpressImage}
                alt="Express js logo"
                className="tech-logo"
              />
            </div>
          </div>
          <div className="project-right">
            <p className="white-text">
              {'\u00A0 \u00A0'}This web application is a continuous improvement
              solution for a company of medium to large size. It was build to
              provide employees with proper tools to send suggestions of
              improvement of different aspects of company environment. There
              also is a logging in option, designed for management staff to
              review and process all suggestions, write comments, move them to
              different stages and plan tasks to be completed for each
              suggestion.
            </p>
            <span>
              <p className="white-text">{'\u00A0 \u00A0'}Please use </p>
              <p className="yellow-text">{"'Mateusz' "}</p>
              <p className="white-text">as a login and </p>
              <p className="yellow-text">{"'qwerty' "}</p>
              <p className="white-text">as a password.</p>
            </span>
            <div className="project-links">
              <p>
                <a
                  href="https://improvement.mattkrp.co.uk/authenticate"
                  target="_blank"
                  rel="noreferrer">
                  <span>
                    <p className="grey-text">{'<'}</p>
                    <p className="dark-blue-text">LIVE_SITE</p>
                    <p className="grey-text">{'>'}</p>
                  </span>
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/Ulwothar/Continuous-Improvement"
                  target="_blank"
                  rel="noreferrer">
                  <span>
                    <p className="grey-text">{'<'}</p>
                    <p className="dark-blue-text">CODE</p>
                    <p className="grey-text">{'>'}</p>
                  </span>
                </a>
              </p>
            </div>
          </div>
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
