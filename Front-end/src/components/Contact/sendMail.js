const SendMail = async (props) => {
  const { name, email, subject, message } = props;
  try {
    //replace localhost address with your server's address for production
    await fetch('https://portfolio.mattkrp.co.uk/email', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        name: name,
        email: email,
        subject: subject,
        message: message,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        if (result) {
          console.log(result);
        }
      });
  } catch (error) {
    console.log(error);
  }
};

export default SendMail;
