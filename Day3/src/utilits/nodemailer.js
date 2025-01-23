import dotenv from 'dotenv';
import { createTransport } from 'nodemailer';
import { emailTemplate } from './emailTemplate.js';


// Load environment variables
dotenv.config();

// Create transporter with Gmail service
let transporter = createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL, // Your Gmail address
    pass: process.env.PASS,  // Your Gmail password or app-specific password
  },
});

// Function to send an email
export default async function sendEmail(email,url) {
  if (!email) {
    throw new Error('Recipient email is undefined');
  }

  try {
    const info = await transporter.sendMail({
      from: `"Sondos" <${process.env.EMAIL}>`, // Sender's email
      to: email,                              // Recipient's email
      subject: 'Welcome to our website',      // Subject line
      html:emailTemplate(url),
    });

    console.log('Email sent successfully:', info.response);
  } catch (error) {
    console.error('Error sending email:', error.message);
  }
}



