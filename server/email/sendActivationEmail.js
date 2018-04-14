const nodemailer = require('nodemailer');

let transportAccountVerification;


module.exports = function(email, activationToken) {
  nodemailer.createTestAccount((err, account) => {
     let transport = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
          user: account.user, // generated ethereal user
          pass: account.pass // generated ethereal password
      }
    });

    const activationEmailBody =
      `This is your account activation link! localhost:3001/activate/${activationToken}`;

    let mailOptions = {
      from: '"A ghost ooOoOOo 👻" <aghostooooooo@example.com>', // sender address
      to: 'human@example.com, manuh@example.com', // list of receivers
      subject: 'Verify your account!', // Subject line
      text: activationEmailBody,
      html: `<b>${activationEmailBody}</b>` // html body
    };

    transport.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
  });
}
