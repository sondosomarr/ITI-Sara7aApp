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
 let sendEmail={
    send(to,subject,body){
        let mailOptions={
            from: process.env.EMAIL,
            to: to,
            subject: subject,
            text: body
        }
        mailTransporter.sendMail(mailOptions,(error,info)=>{
            if(error){
                console.log('Error sending email',error)
            }else{
                console.log('Email sent successfully',info.response)
            }
        })
    }
 }
 export default sendEmail;