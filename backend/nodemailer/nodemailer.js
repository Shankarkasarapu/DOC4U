const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
      user: 'docforyouhelpdesk@gmail.com',
      pass: 'qkshpzggtpopqggo'
    }
  });
module.exports = transporter;
