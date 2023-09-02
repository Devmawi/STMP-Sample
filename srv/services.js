const nodemailer = require("nodemailer");

module.exports = class CatalogService {
    
    // example: /catalog/sendMail()
    async sendMail(req) {
        const transporter = nodemailer.createTransport({
            host: "smtp-mail.outlook.com",
            port: 587,
            secure: false,
            auth: {
              // TODO: replace `user` and `pass` values from <https://forwardemail.net>
              type: 'login',
              user: '[USERNAME/MAILADDRESS]',
              pass: '[PASSWORD]',
            },
            tls: {
                ciphers:'SSLv3'
            }
          });

          const info = await transporter.sendMail({
            from: '[YOUR_NAME]', // sender address
            to: "[RECEIVER_ADDRESS]", // list of receivers
            subject: "Hello STMP with BTP ✔", // Subject line
            text: "Testnachricht zur Überprüfung von STMP in BTP", // plain text body
            html: "<b>Hello world?</b>", // html body
          });

          console.log("Message sent: %s", info.messageId);
          
        return "Mail send :)"
    }
}