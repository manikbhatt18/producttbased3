const SibApiV3Sdk = require("sib-api-v3-sdk");

const client = SibApiV3Sdk.ApiClient.instance;
const apiKey = client.authentications["api-key"];
apiKey.apiKey = process.env.BREVO_API_KEY;

const emailApi = new SibApiV3Sdk.TransactionalEmailsApi();

exports.sendMail = async ({ to, cc, subject, html, attachments = [] }) => {
  const emailData = {
    sender: {
      name: "IOTAFLOW Website",
      email: "manikstudy18@gmail.com", // must be verified in Brevo
    },
    to: [{ email: to }],
    subject,
    htmlContent: html,
  };

  if (cc) {
  emailData.cc = Array.isArray(cc)
    ? cc.map((email) => ({ email }))
    : [{ email: cc }];
  }

  if (attachments.length > 0) {
    emailData.attachment = attachments.map((file) => ({
      name: file.filename,
      content: file.content.toString("base64"),
    }));
  }

  await emailApi.sendTransacEmail(emailData);
};
