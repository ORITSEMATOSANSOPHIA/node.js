// email-sender.js
const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sweetpuri19@example.com', // Your email address
    pass: 'smridhu1234', // Your email password or an app-specific password
  },
});

// Email content
const mailOptions = {
  from: 'sweetpuri19@example.com', // Sender's email address
  to: 'whyterose73@gmail.com', // Recipient's email address
  subject: 'Test Email', // Subject line
  text: 'This is a test email sent from Node.js using nodemailer.', // Plain text body
};

// Send email
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
