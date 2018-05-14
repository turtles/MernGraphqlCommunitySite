const nodemailer = require('nodemailer');

module.exports = function(email, userId, activationToken) {
  nodemailer.createTestAccount((err, account) => {
      if (err) {
        return console.log(err);
      }
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
      `This is your account activation link! localhost:3000/activate/${userId}/${activationToken}`;

    let mailOptions = {
      from: '"A ghost ooOoOOo 👻" <aghostooooooo@example.com>',
      to: 'human@example.com',
      subject: 'Verify your account!',
      text: activationEmailBody,
      html: `<b>${activationEmailBody}</b>`
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
