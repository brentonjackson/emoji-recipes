const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const emojiDesc = require('./foodEmojis.json');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const axios = require('axios').default;
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

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
        twiml.message(`Grabbing your ${convertedEmojis.join(' ')} recipe!`);

        // console.log(convertedEmojis.join(', '));


        // let recipeName = "";
        // let recipeInstructions = "";
        // let recipeUrl = "";

        // let options = {
        //     method: 'GET',
        //     url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random',
        //     params: {tags: convertedEmojis.join(', '), number: '1'},
        //     headers: {
        //       'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        //       'x-rapidapi-key': 'dac58d202fmsha1a27e90eea4894p108a55jsnbe8112dd21d9'
        //     }
        //   };
          
        //   axios.request(options).then(function (response) {
        //       console.log(response.data.recipes[0]?.instructions.length);
        //       recipeName = response.data.recipes[0]?.title;
        //       recipeInstructions = response.data.recipes[0]?.instructions;
        //       recipeUrl = response.data.recipes[0]?.sourceUrl;
        //   }).catch(function (error) {
        //       console.error(error);
        //   });
        //   console.log(recipeUrl)
        //   twiml.message(recipeUrl);
    }


  if (req.body.Body === '🍪') {
      twiml.message('That is a cookie!')
  }

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});
