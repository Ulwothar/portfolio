import React, { useEffect } from 'react';
import './About.css';

const aboutContent = {
  sectionTag: '<div className="about-page">',
  closingSectionTag: '</div>',
  headerTag: '<h2>',
  closingHeaderTag: '</h2>',
  title: 'About',
  paragraphTag: '<p>',
  closingParagraphTag: '</P>',
  paragraphText:
    'My professional goal is to become a software developer. I’ve always been interested in coding, however I have never actually worked in IT. I am really dedicated to learning and improving my skills as well as expanding them. Also, if I’m stuck at something, I’m not afraid to ask more experienced people for help, if google, documentation and Stackoverflow are not enough.',
  tabSign: '\u00A0 \u00A0 ',
};

const About = () => {
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
    const paragraphLineOne = document.getElementById('paragraph-line-one');
    paragraphLineOne.classList.add('about-visible');
    const paragraphLineTwo = document.getElementById('paragraph-line-two');
    paragraphLineTwo.classList.add('about-visible');
    const paragraphLineThree = document.getElementById('paragraph-line-three');
    paragraphLineThree.classList.add('about-visible');
    const paragraphLineFour = document.getElementById('paragraph-line-four');
    paragraphLineFour.classList.add('about-visible');
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
    <div id="about">
      <div className="about-page" id="about-page">
        <span
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
          <p className="pink-text">{aboutContent.tabSign}return </p>
          <p className="yellow-text">{'('}</p>
        </span>
        <span className="about-div-begin" id="about-div-begin">
          <p className="grey-text">
            {aboutContent.tabSign + aboutContent.tabSign}
            {'<'}
          </p>
          <p className="dark-blue-text">{'div '}</p>
          <p className="light-blue-text">className</p>
          <p className="white-text">=</p>
          <p className="orange-text">{`"about"`}</p>
          <p className="grey-text">{'>'}</p>
        </span>
        <span className="about-header" id="about-header">
          <p className="grey-text">
            {aboutContent.tabSign + aboutContent.tabSign + aboutContent.tabSign}
            {'<'}
          </p>
          <p className="dark-blue-text">h2</p>
          <p className="grey-text">{'>'}</p>
          <p className="white-text"> About Me </p>
          <p className="grey-text">{'</'}</p>
          <p className="dark-blue-text">h2</p>
          <p className="grey-text">{'>'}</p>
        </span>
        <span className="about-paragraph" id="about-paragraph">
          <p className="grey-text">
            {aboutContent.tabSign + aboutContent.tabSign + aboutContent.tabSign}
            {'<'}
          </p>
          <p className="dark-blue-text">p</p>
          <p className="grey-text">{'>'}</p>
        </span>
        <span className="paragraph-line-one" id="paragraph-line-one">
          <p className="white-text">
            {aboutContent.tabSign +
              aboutContent.tabSign +
              aboutContent.tabSign +
              aboutContent.tabSign}
            My professional goal is to become a software developer. I’ve always
            been interested in coding,
          </p>
        </span>
        <span className="paragraph-line-two" id="paragraph-line-two">
          <p className="white-text">
            {aboutContent.tabSign +
              aboutContent.tabSign +
              aboutContent.tabSign +
              aboutContent.tabSign}
            however I have never actually worked in IT. I am really dedicated to
            learning and improving
          </p>
        </span>
        <span className="paragraph-line-three" id="paragraph-line-three">
          <p className="white-text">
            {aboutContent.tabSign +
              aboutContent.tabSign +
              aboutContent.tabSign +
              aboutContent.tabSign}
            my skills as well as expanding them. Also, if I’m stuck at
            something, I’m not afraid to ask
          </p>
        </span>
        <span className="paragraph-line-four" id="paragraph-line-four">
          <p className="white-text">
            {aboutContent.tabSign +
              aboutContent.tabSign +
              aboutContent.tabSign +
              aboutContent.tabSign}
            more experienced people for help, if google, documentation and
            Stackoverflow are not enough.
          </p>
        </span>
        <span className="closing-paragraph" id="closing-paragraph">
          <p className="grey-text">
            {aboutContent.tabSign + aboutContent.tabSign + aboutContent.tabSign}
            {'</'}
          </p>
          <p className="dark-blue-text" id="dark-blue-text">
            p
          </p>
          <p className="grey-text">{'>'}</p>
        </span>
        <span className="closing-div" id="closing-div">
          <p className="grey-text">
            {aboutContent.tabSign + aboutContent.tabSign}
            {'</'}
          </p>
          <p className="dark-blue-text">div</p>
          <p className="grey-text">{'>'}</p>
        </span>
        <span className="closing-return" id="closing-return">
          <p className="yellow-text">
            {aboutContent.tabSign}
            {')'}
          </p>
        </span>
        <span className="closing-about" id="closing-about">
          <p className="light-blue-text">{'}'}</p>
        </span>
        <p> </p>
        <span className="exporting-about" id="exporting-about">
          <p className="pink-text">export default </p>
          <p className="light-yellow-text">About</p>
          <p className="white-text">{' ;'}</p>
        </span>
      </div>
    </div>
  );
};

export default About;
