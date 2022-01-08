const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const emojiDesc = require('./foodEmojis.json');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/sms', (req, res) => {
    const twiml = new MessagingResponse();
    let message = req.body.Body;
    let regex = new RegExp('[a-zA-Z0-9]');
    if (regex.test(message)) {
        twiml.message('Emojis only please 😎');
    } else {
        let convertedEmojis = [];
        [...message].forEach(char => convertedEmojis.push(emojiDesc[char]))
        console.log(convertedEmojis)
        twiml.message(`Grabbing your ${convertedEmojis.join(' ')} recipe!`);
    }
    // console.log(regex.test(req.body.Body))
    // let recipeQuery = req.body.Body;
    // console.log(regex.test(req.body.Body))

  if (req.body.Body === '🍪') {
      twiml.message('That is a cookie!')
  }

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});
