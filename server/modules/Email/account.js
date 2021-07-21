require('dotenv').config()
const sgMail = require('@sendgrid/mail')
const sendgridAPI = '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'
sgMail.setApiKey(sendgridAPI)
console.log(sendgridAPI);
sgMail.send({
    to : "9328217188nikul@gmail.com",
    from : "9328217188nikul@gmail.com",
    subject : "CHEAKING",
    text : "NIKUL is hardworking"
})