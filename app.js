let express = require('express');

var path = require('path');

var bodyParser = require('body-parser')

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'cyairahughes@gmail.com',
        
    }
    });

const port = process.env.PORT || 5000;

let app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '/')));
app.use(express.urlencoded({ extended: true }));

app.post('/', function(req, res) {
    let contact_info = {
        "name": req.body.name,
        "email": req.body.email,
        "message": req.body.message
    }

    transporter.sendMail({
        from: contact_info.name + ' ' + contact_info.email,
        to: "cyairahughes@gmail.com",
        subject: contact_info.name + ' ' + "was interested in your portfolio.", 
        text: contact_info.message,
      }).then(info => {
        console.log({info});
      }).catch(console.error);

});

app.listen(5000);
console.log('Server started at http://localhost:' + port);