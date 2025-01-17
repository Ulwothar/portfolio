import nodemailer from 'nodemailer';

const SendMail = (req, res, next) => {
  const { name, email, subject, message } = req.body;

  const sendConfirmationMail = {
    subject: 'Thank you for popping in',
    message: `Hello ${name}. <br/>Thank you for your message, it has just been delivered. I will reply as soon as I read it.<br />Kind regards,<br />Mateusz Krupa`,
  };

  let transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.PORT,
    secure: false,
    auth: {
      user: process.env.USERNAME,
      pass: process.env.PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  console.log({
    envVariables: {
      host: process.env.HOST,
      port: process.env.PORT,
      user: process.env.USERNAME,
      secure: process.env.SECURE,
      password: process.env.PASSWORD,
    },
    bodyVariables: {
      name: name,
      email: email,
      subject: subject,
      message: message,
    },
  });

  const receiveMailOptions = {
    from: `${name} <${email}>`,
    to: process.env.USERNAME,
    subject: subject,
    text: message,
  };

  const sendConfirmationMailOptions = {
    from: process.env.USERNAME,
    to: `${name} <${email}>`,
    subject: sendConfirmationMail.subject,
    html: sendConfirmationMail.message,
  };

  transporter.sendMail(receiveMailOptions, function (error, info) {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: error });
    } else {
      transporter.sendMail(sendConfirmationMailOptions, function (error, info) {
        if (error) {
          console.log(error);
          res.status(500).json({ error: error });
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      console.log('Email sent: ' + info.response);
      return res.status(201).json({ message: 'Email sent successfully!' });
    }
  });
};

export default SendMail;
