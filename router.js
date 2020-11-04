const express = require('express');
const tweetRouter = express.Router();
var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: 'jsbjnWl85GEyvyW6zyg1AgAtE',
    consumer_secret: 'tPBT0IdeS6Lljpe5sRi3oQN1ZYBQfwNKUV85i1cL1pTgZCHttw',
    access_token_key: '1323586893271818240-pj6H2S2X84fQsTp4FGVucKf47rvy5Y',
    access_token_secret: 'ybFAWgHU33ENx06a2v2JcQvhJ13YiJV59uiIuIQsXzbjs',
    bearer_token:'AAAAAAAAAAAAAAAAAAAAAKSVJQEAAAAATCEq4mfjtQ5xImSUGlZURhysddA%3DmT8Bof0mj6lCusSe6seC1hlGETSDPXc3hqvFLe5ASphKsoD5Rz'
  });

tweetRouter.get('/',function(req, res, next){
    client.get('search/tweets', {q:"#tesla since:2020-4-10",count:5}, function(error, tweets, response) {
        if (!error) {
          console.log(tweets);
          //res.send(tweets);
          res.status(200).json({ success: true, tweets })
        }
      });
    //client.get('', )
    //.then(function(result) {
      //  var tweets = result.data;
       // console.log(tweets);
        //res.send({tweets});
      //})
      //.catch(function(err) {
       // console.log('caught error', err.stack)
        //res.send({ error: err })
      //})
})

module.exports = tweetRouter;