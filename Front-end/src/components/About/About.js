import React, { useEffect } from 'react';
import { NavHashLink } from 'react-router-hash-link';
import './About.css';
import CodeText from '../../shared/components/CodeText';

const aboutContent = {
  sectionTag: '<div className="about-page">',
  closingSectionTag: '</div>',
  headerTag: '<h2>',
  closingHeaderTag: '</h2>',
  title: 'About',
  paragraphTag: '<p>',
  closingParagraphTag: '</P>',
  paragraphText:
    "Hi, it's really good to see you here! My name is Mateusz and I am an aspiring fullstack developer. I am really dedicated to learning and improving my skills as well as expanding them. Also, if I’m stuck at something, I’m not afraid to ask more experienced people for help if google, documentation and Stackoverflow are not enough. Aside from that I am a quick learner and good problem-solver with keen attention to detail. Always expect more from myself and I work hard to achieve both company's and my personal goals.",
  tabSign: '\u00A0 \u00A0 ',
};

const About = () => {
  const paragraph = [];

  for (let character of aboutContent.paragraphText) {
    paragraph.push(
      <p key={paragraph.length} className="white-text">
        {character}
      </p>,
    );
  }

  useEffect(() => {
    const aboutPage = document.getElementById('about-page');
    aboutPage.classList.add('about-visible');
    const aboutFunctionStart = document.getElementById(
      'about-function-declaration',
    );
    aboutFunctionStart.classList.add('about-visible');
    const returnDeclaration = document.getElementById('return-declaration');
    returnDeclaration.classList.add('about-visible');
    const aboutDivBegin = document.getElementById('about-div-begin');
    aboutDivBegin.classList.add('about-visible');
    const aboutHeader = document.getElementById('about-header');
    aboutHeader.classList.add('about-visible');
    const aboutParagraph = document.getElementById('about-paragraph');
    aboutParagraph.classList.add('about-visible');
    const paragraphLineOne = document.getElementById('paragraph');
    paragraphLineOne.classList.add('about-visible');
    const closingParagraph = document.getElementById('closing-paragraph');
    closingParagraph.classList.add('about-visible');
    const closingDiv = document.getElementById('closing-div');
    closingDiv.classList.add('about-visible');
    const closingReturn = document.getElementById('closing-return');
    closingReturn.classList.add('about-visible');
    const closingAbout = document.getElementById('closing-about');
    closingAbout.classList.add('about-visible');
    const exportingAbout = document.getElementById('exporting-about');
    exportingAbout.classList.add('about-visible');
  }, []);

  return (
    <section id="about">
      <div className="about-page" id="about-page">
        {/* <span
          className="about-function-declaration"
          id="about-function-declaration">
          <p className="dark-blue-text">const </p>
          <p className="light-yellow-text">About </p>
          <p className="white-text">= </p>
          <p className="pink-text">{'() '}</p>
          <p className="dark-blue-text">{'=> '}</p>
          <p className="light-blue-text">{'{'}</p>{' '}
        </span>
        <span className="return-declaration" id="return-declaration">
          <p className="pink-text">return </p>
          <p className="yellow-text">{'('}</p>
        </span>
        <span className="about-div-begin" id="about-div-begin">
          <p className="grey-text">{'<'}</p>
          <p className="dark-blue-text">{'div '}</p>
          <p className="light-blue-text">className</p>
          <p className="white-text">=</p>
          <p className="orange-text">{`"about"`}</p>
          <p className="grey-text">{'>'}</p>
        </span>
        <span className="about-header" id="about-header">
          <p className="grey-text">{'<'}</p>
          <p className="dark-blue-text">h2</p>
          <p className="grey-text">{'>'}</p>
          <p className="white-text"> About Me </p>
          <p className="grey-text">{'</'}</p>
          <p className="dark-blue-text">h2</p>
          <p className="grey-text">{'>'}</p>
        </span>
        <span className="about-paragraph" id="about-paragraph">
          <p className="grey-text">{'<'}</p>
          <p className="dark-blue-text">p</p>
          <p className="grey-text">{'>'}</p>
        </span>
        <span className="paragraph" id="paragraph">
          {paragraph}
        </span>
        <span className="closing-paragraph" id="closing-paragraph">
          <p className="grey-text">{'</'}</p>
          <p className="dark-blue-text" id="dark-blue-text">
            p
          </p>
          <p className="grey-text">{'>'}</p>
        </span>
        <span className="closing-div" id="closing-div">
          <p className="grey-text">{'</'}</p>
          <p className="dark-blue-text">div</p>
          <p className="grey-text">{'>'}</p>
        </span>
        <span className="closing-return" id="closing-return">
          <p className="yellow-text">{')'}</p>
        </span>
        <span className="closing-about" id="closing-about">
          <p className="light-blue-text">{'}'}</p>
        </span>
        <p className="empty-paragraph"> </p>
        <span className="exporting-about" id="exporting-about">
          <p className="pink-text">export default </p>
          <p className="light-yellow-text">About</p>
          <p className="white-text">{' ;'}</p>
        </span> */}
        <CodeText about="true" />
      </div>
      <div className="scroll-arrow">
        <NavHashLink to="#projects" smooth="true">
          <p> {' ||'}</p>
          <p>\/</p>
        </NavHashLink>
      </div>
    </section>
  );
};

export default About;
