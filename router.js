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
    client.get('search/tweets', {q:"#tesla since:2020-4-10",count:req.query.count}, function(error, tweets, response) {
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

tweetRouter.get('/trends',(req,res)=>{
  client.get('trends/place',{id:23424848},(error,tweets)=>{
    //client.get('trends/available',(error,tweets)=>{
      if(error){
        console.log(error);
      }
    if(req.query.searchTerm){
      try{
        var tweet=tweets.findOne({query:req.query.searchTerm})
        if(!tweet){
          res.status(404).json({sucess:false})
        }else{
          console.log(tweet)
          res.status(200).json({success:true,tweet})
        }
      }
      catch(err){
         console.log(err)
      }
    }  
    else{
      console.log((tweets.json));
      res.status(200).json({success:true,tweets})
    }
  
  })
})


module.exports = tweetRouter;
