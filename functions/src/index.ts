import {onRequest} from "firebase-functions/v2/https";
import * as nodemailer from "nodemailer";
import * as admin from "firebase-admin";
import * as dotenv from "dotenv";
import * as cors from "cors";

dotenv.config();
admin.initializeApp();

const corsHandler = cors({origin: true});

const mailTransport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.GMAILEMAIL,
    pass: process.env.GMAILPASSWORD,
  },
});

export const sendEmail = onRequest(async (req, res) => {
  corsHandler(req, res, async () =>{
    const {to, subject, text} = req.body;

    const mailOptions = {
      from: process.env.GMAILEMAIL,
      to: `${to}`,
      subject: `${subject}`,
      text: `${text}`,
    };

    res.set("Access-Control-Allow-Origin", "*");

    try {
      await mailTransport.sendMail(mailOptions);
      res.status(200).send("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email: ", error);
      res.status(500).send("Error sending email");
    }
  });
});

