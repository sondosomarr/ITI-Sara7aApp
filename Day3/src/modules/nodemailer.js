import dotenv from 'dotenv'
import nodemailer from 'nodemailer'

dotenv.config({})
let mailTransporter= nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    }
})
 let sendEmail= async(to,subject,body)=>{
    
        let mailOptions={
            from: process.env.EMAIL,
            to: to,
            subject: subject,
            text: body
        }
       const info= await mailTransporter.sendEmail(mailOptions);
        console.log('Email sent successfully',info.response)

    
 }
 sendEmail().catch(console.error)
 export default sendEmail;