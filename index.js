const nodemailer = require("nodemailer");

const html = `
<h1>World1214</h1>
`;

async function main() {
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: "bilal@theoneclickdigital.com",
      pass: "khalakijan123456",
    },
  });

  const info = await transporter.sendMail({
    from: "bilal@theoneclickdigital.com",
    to: "adriana2359990@gmail.com",
    subject: "Hello ✔",
    html: html,
  });

  console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);
