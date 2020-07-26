const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  const msg = {
    to: email,
    from: 'appank678@gmail.com',
    subject: 'Welcome email',
    text: `Welcome ${name}`,
  };
  sgMail.send(msg);
};

const sendCancellationEmail = (email, name) => {
  const msg = {
    to: email,
    from: 'appank678@gmail.com',
    subject: 'Cancellation email',
    text: `Goodbye ${name}`,
  };
  sgMail.send(msg);
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail
}
