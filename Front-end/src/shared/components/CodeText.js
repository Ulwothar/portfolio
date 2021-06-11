import React from 'react';

const aboutContent = {
  aboutParagraphText:
    "Hi, it's really good to see you here! My name is Mateusz and I am an aspiring fullstack developer. I am really dedicated to learning and improving my skills as well as expanding them. Also, if I’m stuck at something, I’m not afraid to ask more experienced people for help if google, documentation and Stackoverflow are not enough. Aside from that I am a quick learner and good problem-solver with keen attention to detail. Always expect more from myself and I work hard to achieve both company's and my personal goals.",
  footerParagraphText: `I am glad you've made it this far and I hope you liked this site. Please feel free to use the contact form if you'd like to leave some feedback or have a job offer. I will get back to you as soon as I can.`,
};

const CodeText = (props) => {
  const { about, footer } = props;

  let paragraph = [];

  if (about) {
    for (let character of aboutContent.aboutParagraphText) {
      paragraph.push(
        <p key={paragraph.length} className="white-text">
          {character}
        </p>,
      );
    }

    return (
      <>
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
        </span>
      </>
    );
  } else if (footer) {
    for (let character of aboutContent.footerParagraphText) {
      paragraph.push(
        <p key={paragraph.length} className="white-text">
          {character}
        </p>,
      );
    }

    return (
      <>
        <span
          className="footer-function-declaration"
          id="footer-function-declaration">
          <p className="dark-blue-text">const </p>
          <p className="light-yellow-text">BeforeYouGo </p>
          <p className="white-text">= </p>
          <p className="pink-text">{'() '}</p>
          <p className="dark-blue-text">{'=> '}</p>
          <p className="light-blue-text">{'{'}</p>{' '}
        </span>
        <span className="footer-return-declaration">
          <p className="pink-text">return </p>
          <p className="yellow-text">{'('}</p>
        </span>
        <span className="footer-div-begin">
          <p className="grey-text">{'<'}</p>
          <p className="dark-blue-text">{'div '}</p>
          <p className="light-blue-text">className</p>
          <p className="white-text">=</p>
          <p className="orange-text">{`"about"`}</p>
          <p className="grey-text">{'>'}</p>
        </span>
        <span className="footer-header-left">
          <p className="grey-text">{'<'}</p>
          <p className="dark-blue-text">h2</p>
          <p className="grey-text">{'>'}</p>
          <p className="white-text"> A few final words </p>
          <p className="grey-text">{'</'}</p>
          <p className="dark-blue-text">h2</p>
          <p className="grey-text">{'>'}</p>
        </span>
        <span className="footer-paragraph">
          <p className="grey-text">{'<'}</p>
          <p className="dark-blue-text">p</p>
          <p className="grey-text">{'>'}</p>
        </span>
        <span className="footer-paragraph-text">{paragraph}</span>
        <span className="footer-paragraph-text">
          <p className="white-text"> Mateusz Krupa</p>
        </span>
        <span className="footer-paragraph">
          <p className="grey-text">{'</'}</p>
          <p className="dark-blue-text" id="dark-blue-text">
            p
          </p>
          <p className="grey-text">{'>'}</p>
        </span>
        <span className="footer-div-begin">
          <p className="grey-text">{'</'}</p>
          <p className="dark-blue-text">div</p>
          <p className="grey-text">{'>'}</p>
        </span>
        <span className="footer-return-declaration">
          <p className="yellow-text">{')'}</p>
        </span>
        <span className="footer-closing-about">
          <p className="light-blue-text">{'}'}</p>
        </span>
        <p className="empty-paragraph"> </p>
        <span className="exporting-footer">
          <p className="pink-text">export default </p>
          <p className="light-yellow-text">BeforeYouGo</p>
          <p className="white-text">{' ;'}</p>
        </span>
      </>
    );
  }

  return null;
};

export default CodeText;
