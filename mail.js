var nodemail = require('nodemailer');

exports.mail = function(url) {
    console.log("fasdfa");
    
    mailOptions = {
        from:"harshgorakhia@gmail.com",
        to: url,
        subject:"Trial - NodeJS",
        text: "Hello " + url
    }
    
    trs1 = nodemail.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // upgrade later with STARTTLS
        auth: {
            user: "Node",
            pass: "fadfajkdf"
        },
        debug: true,
    });

    trs1.verify(function(error,success) {
        if (error)
        {console.log(error);}
        else {console.log("Server is ready");}
    });

    trs1.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log("error is "+error);
            resolve(false); // or use rejcet(false) but then you will have to handle errors
        } 
        else {
            console.log('Email sent: ' + info.response);
            resolve(true);
        }
    });
}