if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


client.messages
      .create({
         body: 'Test message.',
         from: process.env.TWILIO_NUMBER,
         to: process.env.MY_PHONE_NUMBER,
         statusCallback: 'https://script.google.com/macros/s/AKfycbzAl66Dpm4eHdkG4iDmR-0Sdu_3RcXQ-ehnJLRvE1aPUiMVhtb3eVgZE-vsVcvjwhFM/exec'
       })
      .then(message => console.log(message))
      .catch(err => console.log(err));