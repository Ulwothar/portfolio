import React from 'react';

const aboutContent = {
  aboutParagraphText: `My name is Mateusz and I am a software engineer at Freightlink Solutions. Most of my work involves developing web applications using MEAN stack. I'm familiar with Angular (and Angularjs), as most our front end work is done with these frameworks, teamed up with bootstrap and material libraries for more modern look and the ease of implementation. I have also worked with React for some of my personal projects but right now I know Angular framework better.<br><br>

As for the back end, I've used a variety of javascript/typescript based solutions, like node js, express, nest js to build server applications both in my current workplace and with my previous company (Marimosa), where we were building bespoke software solutions for clients from different industries. Thanks to the fact, we've been working with different partners, I have worked with different kinds of hosting for our projects (VPS, EC2 instance, Elastic Beanstalk - for the servers and/or monorepo apps. S3, Amplify, Cloudfront for the front end).<br><br>
Back end is not always a server application, many of the projects I've been working on were built with serverless and microservice infrastructure within AWS ecosystem. Thanks to that I've been able to learn and become familiar with services like (AWS) Lambda, Event Bridge, Step Functions, SNS, SES, API Gateway, S3.<br><br>

I've been using GitHub for source control to create and maintain projects. Also for projects stored within AWS, I have used Code Pipeline for CICD, to make deployments quick, smooth, simple to trigger and control.<br><br>

For testing, I've used libraries like Jest, Mocha, Chai and Supertest. I'm quite comfortable with unit testing back-end applications, can't say I have a ton of experience with writing front-end tests yet but I see not knowing something as an opportunity to learn and develop as a software engineer.<br><br>

I always expect more from myself and I work hard to achieve both company's and my personal goals.`,
  footerParagraphText: `I am glad you've made it this far and I hope you liked this site. Please feel free to use the contact form if you'd like to leave some feedback or have a job offer. I will get back to you as soon as I can.`,
};

const CodeText = (props) => {
  const { about, footer } = props;

  let paragraph = [];

  if (about) {
    let htmlTag = '';
    let gettingHtmlTag = false;
    for (let character of aboutContent.aboutParagraphText) {
      if (character === '<') {
        gettingHtmlTag = true;
      }
      if (!gettingHtmlTag) {
        paragraph.push(
          <p key={paragraph.length} className='white-text'>
            {character}
          </p>,
        );
        continue;
      }
      htmlTag += character;
      if (character === '>') {
        paragraph.push(
          <p>
            <br />
          </p>,
        );
        gettingHtmlTag = false;
      }
    }

    return (
      <>
        <span
          className='about-function-declaration'
          id='about-function-declaration'>
          <p className='dark-blue-text'>const </p>
          <p className='light-yellow-text'>About </p>
          <p className='white-text'>= </p>
          <p className='pink-text'>{'() '}</p>
          <p className='dark-blue-text'>{'=> '}</p>
          <p className='light-blue-text'>{'{'}</p>{' '}
        </span>
        <span className='return-declaration' id='return-declaration'>
          <p className='pink-text'>return </p>
          <p className='yellow-text'>{'('}</p>
        </span>
        <span className='about-div-begin' id='about-div-begin'>
          <p className='grey-text'>{'<'}</p>
          <p className='dark-blue-text'>{'div '}</p>
          <p className='light-blue-text'>className</p>
          <p className='white-text'>=</p>
          <p className='orange-text'>{`"about"`}</p>
          <p className='grey-text'>{'>'}</p>
        </span>
        <span className='about-header' id='about-header'>
          <p className='grey-text'>{'<'}</p>
          <p className='dark-blue-text'>h2</p>
          <p className='grey-text'>{'>'}</p>
          <p className='white-text'> About Me </p>
          <p className='grey-text'>{'</'}</p>
          <p className='dark-blue-text'>h2</p>
          <p className='grey-text'>{'>'}</p>
        </span>
        <span className='about-paragraph' id='about-paragraph'>
          <p className='grey-text'>{'<'}</p>
          <p className='dark-blue-text'>p</p>
          <p className='grey-text'>{'>'}</p>
        </span>
        <span className='paragraph' id='paragraph'>
          {paragraph}
        </span>
        <span className='closing-paragraph' id='closing-paragraph'>
          <p className='grey-text'>{'</'}</p>
          <p className='dark-blue-text' id='dark-blue-text'>
            p
          </p>
          <p className='grey-text'>{'>'}</p>
        </span>
        <span className='closing-div' id='closing-div'>
          <p className='grey-text'>{'</'}</p>
          <p className='dark-blue-text'>div</p>
          <p className='grey-text'>{'>'}</p>
        </span>
        <span className='closing-return' id='closing-return'>
          <p className='yellow-text'>{')'}</p>
        </span>
        <span className='closing-about' id='closing-about'>
          <p className='light-blue-text'>{'}'}</p>
        </span>
        <p className='empty-paragraph'> </p>
        <span className='exporting-about' id='exporting-about'>
          <p className='pink-text'>export default </p>
          <p className='light-yellow-text'>About</p>
          <p className='white-text'>{' ;'}</p>
        </span>
      </>
    );
  } else if (footer) {
    for (let character of aboutContent.footerParagraphText) {
      paragraph.push(
        <p key={paragraph.length} className='white-text'>
          {character}
        </p>,
      );
    }

    return (
      <>
        <span
          className='footer-function-declaration'
          id='footer-function-declaration'>
          <p className='dark-blue-text'>const </p>
          <p className='light-yellow-text'>BeforeYouGo </p>
          <p className='white-text'>= </p>
          <p className='pink-text'>{'() '}</p>
          <p className='dark-blue-text'>{'=> '}</p>
          <p className='light-blue-text'>{'{'}</p>{' '}
        </span>
        <span className='footer-return-declaration'>
          <p className='pink-text'>return </p>
          <p className='yellow-text'>{'('}</p>
        </span>
        <span className='footer-div-begin'>
          <p className='grey-text'>{'<'}</p>
          <p className='dark-blue-text'>{'div '}</p>
          <p className='light-blue-text'>className</p>
          <p className='white-text'>=</p>
          <p className='orange-text'>{`"about"`}</p>
          <p className='grey-text'>{'>'}</p>
        </span>
        <span className='footer-header-left'>
          <p className='grey-text'>{'<'}</p>
          <p className='dark-blue-text'>h2</p>
          <p className='grey-text'>{'>'}</p>
          <p className='white-text'> A few final words </p>
          <p className='grey-text'>{'</'}</p>
          <p className='dark-blue-text'>h2</p>
          <p className='grey-text'>{'>'}</p>
        </span>
        <span className='footer-paragraph'>
          <p className='grey-text'>{'<'}</p>
          <p className='dark-blue-text'>p</p>
          <p className='grey-text'>{'>'}</p>
        </span>
        <span className='footer-paragraph-text'>{paragraph}</span>
        <span className='footer-paragraph-text'>
          <p className='white-text'> Mateusz Krupa</p>
        </span>
        <span className='footer-paragraph'>
          <p className='grey-text'>{'</'}</p>
          <p className='dark-blue-text' id='dark-blue-text'>
            p
          </p>
          <p className='grey-text'>{'>'}</p>
        </span>
        <span className='footer-div-begin'>
          <p className='grey-text'>{'</'}</p>
          <p className='dark-blue-text'>div</p>
          <p className='grey-text'>{'>'}</p>
        </span>
        <span className='footer-return-declaration'>
          <p className='yellow-text'>{')'}</p>
        </span>
        <span className='footer-closing-about'>
          <p className='light-blue-text'>{'}'}</p>
        </span>
        <p className='empty-paragraph'> </p>
        <span className='exporting-footer'>
          <p className='pink-text'>export default </p>
          <p className='light-yellow-text'>BeforeYouGo</p>
          <p className='white-text'>{' ;'}</p>
        </span>
      </>
    );
  }

  return null;
};

export default CodeText;
