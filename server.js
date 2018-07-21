const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/api/form', (req, res) => {
  // console.log(req.body);
  // res.status(200).send();
  console.log('Credentials obtained, sending message...');
  const htmlEmail = `
  <h3>Content Details</h3>
    <ul>
      <li>Name: ${req.body.fullName}</li>
      <li> Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
`
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'shanuayyala@gmail.com',
      pass: 'Sree@74268'
    }
  })
  let mailOptions = {
    from: 'shanuayyala@gmail.com',
    to: 'contact.us@virtuetechinc.com',
    subject: 'ContactUS-Message',
    text: req.body.message,
    html: htmlEmail
  }
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return console.log(err);
    }
    console.log('Message sent: %s', info.messgae);
    console.log('Message URL: %s', nodemailer.getTestMessageUrl(info));
  })
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
});
