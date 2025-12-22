const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.sendMail = async ({ to, cc, subject, html, attachments = [] }) => {
  await transporter.sendMail({
    from: `"IOTAFLOW Website" <${process.env.EMAIL_USER}>`,
    to,
    cc,
    subject,
    html,
    attachments,
  });
};
