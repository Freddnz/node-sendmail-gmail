const { Router } = require('express');
const nodemailer = require('nodemailer');


const router = Router()

const {MAIL_SEND_USER, PASS_USER,MAIL_USER_DEST} =process.env

router.get('/',(req, res)=>{
    res.render('index');
});

router.post('/send-email', async(req, res)=>{
    console.log(req.body);
    const {name, email, phone, message } = req.body;

    contentHTML = `
        <h1>User Information</h1>
        <ul>
            <li>User Name: ${name}</li>
            <li>User Email: ${email}</li>
            <li>User phone: ${phone}</li>
        </ul>
        <p>${message}</p>
    `

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: MAIL_SEND_USER,
          pass: PASS_USER 
        }
    });

    const mailOptions = {
        from: "Server", //+MAIL_SEND_USER,
        to: MAIL_USER_DEST,
        subject: 'Test Send Email',
        html: contentHTML
    };
      
    await transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    });

    

    res.send({status : 'Message Recived'});
    //res.render('index')
});

module.exports = router;