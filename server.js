const express = require('express')
const nodemailer = require("nodemailer");

const app = express()

const sendEmail = async(req,res) => {

    try {
        
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: 'yourmail@gmail.com', // gmail id
          pass: 'apppassword', // generated application password
        },
      });
    let info = await transporter.sendMail({
        from: '"CodewithSudeep 👻" <codewithsudeep@gmail.com>', // sender address
        to: "sudeepm0599@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });
    
      res.send({
        status: `Message sent:${info.messageId}`,
        info: info
      })
    } catch (error) {
        console.log(error)
    }

}


app.get('/',(req,res)=>res.send('running at port 3000'))
app.get('/sendemail',sendEmail)

app.listen(3000,()=>console.log("started at port 3000"))


