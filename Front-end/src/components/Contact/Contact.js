import React, { useState } from 'react';
import './Contact.css';
import ReactImage from '../../images/react.png';
import NodeImage from '../../images/nodejs.png';
import ExpressImage from '../../images/express.png';
import MongoImage from '../../images/mongo.png';
import SwaggerImage from '../../images/swagger.png';
import MochaImage from '../../images/mocha.png';
import MongooseImage from '../../images/mongoose.png';
import HtmlImage from '../../images/html.png';
import CssImage from '../../images/css.png';
import JsImage from '../../images/javascript.png';
import LinkedInImage from '../../images/linkedIn.png';
import GitHubImage from '../../images/github.png';
import CodeText from '../../shared/components/CodeText';
import SendMail from './sendMail';

let newForm = {
  email: '',
  name: '',
  subject: '',
  message: '',
};

const Contact = () => {
  const [contactForm, setContactForm] = useState(newForm);

  const onChangeHandler = (event) => {
    let thisName = event.target.name;
    setContactForm({
      ...contactForm,
      [thisName]: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    alert('Thank you for contacting me, I will reply as soon as I can.');
    SendMail(contactForm);
    console.log(contactForm);
    event.target.reset();
  };

  return (
    <footer className="portfolio-footer" id="footer">
      <section className="footer-header">
        <h2 className="dark-blue-text">const </h2>
        <h2 className="light-yellow-text">ContactMe </h2>
        <h2 className="white-text">= </h2>
        <h2 className="pink-text">() </h2>
        <h2 className="white-text">{'=>'} </h2>
        <h2 className="light-blue-text">{'{'}</h2>
      </section>

      <section className="footer-content">
        <section className="footer-left">
          <CodeText footer="true" />
        </section>

        <section className="footer-center">
          <form className="contact-form" onSubmit={submitHandler}>
            <label>
              <span className="name-paragraph">
                <p className="grey-text">{'<'}</p>
                <p className="dark-blue-text">name</p>
                <p className="grey-text">{'> '}</p>
              </span>
              <input
                type="text"
                name="name"
                placeholder="Name..."
                className="text-input"
                onChange={onChangeHandler}
                required
              />
              <span className="name-paragraph">
                <p className="grey-text">{' </'}</p>
                <p className="dark-blue-text">name</p>
                <p className="grey-text">{'> '}</p>
              </span>
            </label>

            <label>
              <span className="email-paragraph">
                <p className="grey-text">{'<'}</p>
                <p className="dark-blue-text">email</p>
                <p className="grey-text">{'> '}</p>
              </span>
              <input
                type="email"
                name="email"
                placeholder="E-mail..."
                className="text-input"
                onChange={onChangeHandler}
                required
              />
              <span className="email-paragraph">
                <p className="grey-text">{' </'}</p>
                <p className="dark-blue-text">email</p>
                <p className="grey-text">{'> '}</p>
              </span>
            </label>

            <label>
              <span className="subject-paragraph">
                <p className="grey-text">{'<'}</p>
                <p className="dark-blue-text">subject</p>
                <p className="grey-text">{'> '}</p>
              </span>
              <input
                type="text"
                name="subject"
                placeholder="Subject..."
                className="text-input"
                onChange={onChangeHandler}
                required
              />
              <span className="subject-paragraph">
                <p className="grey-text">{' </'}</p>
                <p className="dark-blue-text">subject</p>
                <p className="grey-text">{'> '}</p>
              </span>
            </label>

            <label>
              <span className="message-paragraph">
                <p className="grey-text">{'<'}</p>
                <p className="dark-blue-text">message</p>
                <p className="grey-text">{'>'}</p>
              </span>
              <textarea
                type="textarea"
                name="message"
                placeholder="Message..."
                className="message-input"
                onChange={onChangeHandler}
                required
              />
              <span className="message-paragraph">
                <p className="grey-text">{'</'}</p>
                <p className="dark-blue-text">message</p>
                <p className="grey-text">{'> '}</p>
              </span>
            </label>

            <button type="submit" className="submit-button">
              <span>
                <p className="grey-text">{'<'}</p>
                <p className="dark-blue-text">{'SUBMIT'}</p>
                <p className="grey-text">{'>'}</p>
              </span>
            </button>
          </form>

          <div className="social-media-links">
            <a
              href="https://www.linkedin.com/in/mateusz-krupa-691774124/"
              target="_blank"
              rel="noreferrer">
              <img
                src={LinkedInImage}
                alt="My linkedIn profile"
                className="tech-logo"
              />
            </a>
            <a
              href="https://github.com/Ulwothar"
              target="_blank"
              rel="noreferrer">
              <img
                src={GitHubImage}
                alt="My github page"
                className="tech-logo"
              />
            </a>
          </div>
        </section>

        <section className="footer-right">
          <img src={HtmlImage} alt="HTML logo" className="tech-logo" />
          <img src={CssImage} alt="Css logo" className="tech-logo" />
          <img src={JsImage} alt="Javascript logo" className="tech-logo" />
          <img src={ReactImage} alt="React js logo" className="tech-logo" />
          <img src={NodeImage} alt="Node js logo" className="tech-logo" />
          <img src={MongoImage} alt="MongoDB logo" className="tech-logo" />
          <img src={ExpressImage} alt="Express js logo" className="tech-logo" />
          <img src={MongooseImage} alt="Mongoose logo" className="tech-logo" />
          <img src={SwaggerImage} alt="Swagger logo" className="tech-logo" />
          <img src={MochaImage} alt="Mocha logo" className="tech-logo" />
        </section>
      </section>
      <section className="footer-bottom">
        <div className="footer-bracket-ending">
          <h2 className="light-blue-text">{'}'}</h2>
        </div>
      </section>
    </footer>
  );
};

export default Contact;
