const express = require("express");
const multer = require("multer");
const transporter = require("../nodemailer/nodemailer");

const router = express.Router();
const upload = multer();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// Strip CR/LF so user input can never inject extra mail headers
const clean = (v, max) => String(v || "").replace(/[\r\n]+/g, " ").trim().slice(0, max);

router.post("/send-messages", upload.none(), async (req, res) => {
  const name = clean(req.body.name, 100);
  const mail = clean(req.body.mail, 150);
  const phone = clean(req.body.phone_no, 20);
  const services = clean(req.body.services, 100);
  const message = String(req.body.message || "").trim().slice(0, 1000);

  if (!name || !mail || !phone || !services || !message) {
    return res.status(400).json({ status: "error", message: "All fields are required" });
  }
  if (!EMAIL_RE.test(mail)) {
    return res.status(400).json({ status: "error", message: "Please enter a valid email address" });
  }

  try {
    await transporter.sendMail({
      from: `"DOC4U Website" <${process.env.EMAIL_USER}>`,
      to: "docforyouhelpdesk@gmail.com",
      replyTo: `"${name.replace(/"/g, "")}" <${mail}>`,   // hitting Reply answers the visitor directly
      subject: `[DOC4U Support] ${services} - ${name}`,
      text: `New support request from the website.

Name:    ${name}
Email:   ${mail}
Phone:   ${phone}
Topic:   ${services}

Message:
${message}
`,
    });
    return res.status(200).json({ status: "success", message: "Support request sent" });
  } catch (error) {
    console.error("Error sending support email:", error);
    return res.status(500).json({ status: "error", message: "We couldn't send your message right now. Please try again." });
  }
});

module.exports = router;
