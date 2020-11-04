const express=require('express');
const app=express();
const path =require('path');
const tweetRouter=require('./router')


const port =process.env_PORT||5000
app.listen(port,()=>{
    console.log(`server running in port ${port}`);
})

app.use('/tweets',tweetRouter);

app.use(express.static(path.join(__dirname, 'public')));
module.exports = app;