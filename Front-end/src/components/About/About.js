import React from 'react';
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
};

const About = () => {
  return (
    <div id="about">
      <div className="about-page">
        <h2>
          {aboutContent.sectionTag}
          <br></br>
          {'\u00A0'}
          {aboutContent.headerTag +
            aboutContent.title +
            aboutContent.closingHeaderTag}
        </h2>
        <br></br>
        {'\u00A0'}
        <p>
          {aboutContent.paragraphTag}
          <br></br>
          {'\u00A0'}
          {'\u00A0'}
          {aboutContent.paragraphText}
          <br></br>
          {'\u00A0'}
          {aboutContent.closingParagraphTag}
          <br></br>
          {aboutContent.closingSectionTag}
        </p>
      </div>
    </div>
  );
};

export default About;
