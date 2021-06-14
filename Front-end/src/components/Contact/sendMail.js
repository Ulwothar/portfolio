const SendMail = async (props) => {
  const { name, email, subject, message } = props;
  try {
    //replace localhost address with your server's address for production
    await fetch('http://localhost:5005/email', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        name: name,
        email: email,
        subject: subject,
        message: message,
      }),
    });
  } catch (error) {
    console.log(error);
  }
};

export default SendMail;
