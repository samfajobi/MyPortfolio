const dotenv = require("dotenv")
const express = require('express');
const nodemailer = require('nodemailer');



dotenv.config();

const app = express()

app.use(express.json());

app.get("/test", ( req, res ) => {
    res.send("Welcome here")
})


app.post("/api/form", ( req, res ) => {
    console.log(req.body)

    res.send("Welcome")

    let data = req.body

    let transporter = nodemailer.createTransport({
        service: Gmail,
        port: 465,
        auth: {
            user: process.env.emailAddress,
            pass: process.env.password
        }

    })


    let mailOptions = {
        from: data.email,
        to: process.env.emailAddress,
        subject: `Message from ${data.name}`,
        html: `
          <h3>Contact Details</h3>
          <ul>
            <li>Name: ${data.name}</li>
            <li>Email: ${data.email}</li>
            <li>PhoneNo: ${data.number}</li>
            <li>Message: ${data.message}</li>
          </ul>
        `
    }

    transporter.sendMail( mailOptions, (error, response) => {
        if( error ) {
            res.send("Your Message has been Successfully Sent")
        } else {
            res.send("Your Message has been sent Successfully")
        }

    }) 

    transporter.close()

    
})



const port = 4000;

app.listen(port, () => {
    console.log(`App is running on  Port ${port}`)
})


