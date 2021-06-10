import React from 'react';
import './Projects.css';
import Improvement from '../../images/improvement.jpg';
import Cc from '../../images/cc.jpg';
import ReactImage from '../../images/react.png';
import NodeImage from '../../images/nodejs.png';
import ExpressImage from '../../images/express.png';
import MongoImage from '../../images/mongo.png';
import SwaggerImage from '../../images/swagger.png';
import MochaImage from '../../images/mocha.png';
import MongooseImage from '../../images/mongoose.png';

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
              <img
                src={MongooseImage}
                alt="Mongoose logo"
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
              <div>
                <a
                  href="https://improvement.mattkrp.co.uk/authenticate"
                  target="_blank"
                  rel="noreferrer"
                  className="external-link">
                  <span>
                    <p className="grey-text">{'<'}</p>
                    <p className="dark-blue-text">LIVE_SITE</p>
                    <p className="grey-text">{'>'}</p>
                  </span>
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/Ulwothar/Continuous-Improvement"
                  target="_blank"
                  rel="noreferrer"
                  className="external-link">
                  <span>
                    <p className="grey-text">{'<'}</p>
                    <p className="dark-blue-text">CODE</p>
                    <p className="grey-text">{'>'}</p>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="project">
          <div className="project-left">
            <img
              src={Cc}
              alt="Character Creator api"
              className="project-logo"
            />
            <div className="tech-wrapper">
              <img src={NodeImage} alt="Node js logo" className="tech-logo" />
              <img src={MongoImage} alt="MongoDB logo" className="tech-logo" />
              <img
                src={ExpressImage}
                alt="Express js logo"
                className="tech-logo"
              />
              <img
                src={MongooseImage}
                alt="Mongoose logo"
                className="tech-logo"
              />
              <img
                src={SwaggerImage}
                alt="Swagger logo"
                className="tech-logo"
              />
              <img src={MochaImage} alt="Mocha logo" className="tech-logo" />
            </div>
          </div>
          <div className="project-right">
            <p className="white-text">
              {'\u00A0 \u00A0'}Character Creator API was created in
              collaboration with a{' '}
              <a
                href="https://github.com/ruljin"
                className="dark-blue-text in-text-link">
                friend
              </a>{' '}
              of mine, who is developing front-end part. The API uses MongoDB to
              store all data. According strictly to the character part, the app
              can be used to create, read, update and delete characters. Thanks
              to this project I've also learned more about agregation pipelines
              in MongoDB and came up with a solution to return different data
              based on query parameters. I have also implemented uploading
              images to server and returning their path with character queries.
              Besides characters themselves, api also serves as a way to manage
              characcter's data like class, race or nature.
            </p>
            <p className="white-text">
              {'\u00A0 \u00A0'}Aside from all the functionallity, this project
              also taught me how to implement swagger to create api
              documentation and using mocha, supertest and chai for testing
              purposes. All that can be check and tested under the link below.
            </p>
            <div className="project-links">
              <div>
                <a
                  href="http://cc.mattkrp.co.uk/api-docs"
                  target="_blank"
                  rel="noreferrer"
                  className="external-link">
                  <span>
                    <p className="grey-text">{'<'}</p>
                    <p className="dark-blue-text">LIVE_SITE</p>
                    <p className="grey-text">{'>'}</p>
                  </span>
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/Ulwothar/Character-Creator-server"
                  target="_blank"
                  rel="noreferrer"
                  className="external-link">
                  <span>
                    <p className="grey-text">{'<'}</p>
                    <p className="dark-blue-text">CODE</p>
                    <p className="grey-text">{'>'}</p>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bracket-ending">
        <h2 className="light-blue-text">{'}'}</h2>
      </div>
    </div>
  );
};

export default Projects;
