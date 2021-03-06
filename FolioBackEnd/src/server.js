const dotenv = require("dotenv")
const express = require('express');
const nodemailer = require('nodemailer');



dotenv.config();

const app = express()

app.use(express.json());

app.get("/test", ( req, res ) => {
    res.send("Welcome to my Website")
})


app.post("/api/form", ( req, res ) => {
    console.log(req.body)

    

    let data = req.body

    let transporter = nodemailer.createTransport({
        service: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: process.env.username,
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
            console.log("Your Message has been Successfully Sent")
        } else {
            console.log("Your Message has been sent Successfully")
        }

    }) 

    transporter.close()

    
})



if ( process.env.NODE_ENV === "production") {
    // Set Static Folder
   // app.use(express.static(path.join(""))) OR
    app.use(express.static(path.join(__dirname, "/frontend/build")))

    app.use("*", (req, res) => {
        req.sendFile(path.join(__dirname, "/frontEnd/build", "index.html" ))

    })
}


const port = 4000;

app.listen(port, () => {
    console.log(`App is running on  Port ${port}`)
})


