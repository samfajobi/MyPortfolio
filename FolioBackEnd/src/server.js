const express = require('express');
const nodemailer = require('nodemailer');




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

    })

    
})



const port = 4000;

app.listen(port, () => {
    console.log(`App is running on  Port ${port}`)
})


