import React,{useState,useEffect} from "react";
import "./Post.css";
import axios from 'axios';
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import { Card } from '@material-ui/core';

  function Post() {

    const [Tweets, setTweets] = useState([]);
 
    useEffect(() => {
      fetchTweets();

}, [])


const fetchTweets= () => {
  axios.get('/tweets')
  .then(response => {
      if (response.data.success) {
          setTweets(response.data.tweets.statuses)
          console.log(response.data.tweets.statuses)
      } else {
          alert('Failed to get Tweets')
      }
  })
  .catch((e)=>{
    console.log(e.message);
  })
}

return (
       
    <div>
      {Tweets[1]&&Tweets.map((tweets, index) => (
      <React.Fragment key={index}>
        <Card>
        <div className="post" >
        <div className="post__avatar">
          <Avatar src={tweets.user.profile_image_url} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {tweets.user.screen_name}{" "}
                <span className="post__headerSpecial">
                  {tweets.user.verified && <VerifiedUserIcon className="post__badge" />} @
                  {tweets.user.name}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
             <h1>{tweets.text}</h1>
            </div>
          </div>
          <img src="" alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" /><span>{tweets.retweet_count}</span>
      <FavoriteBorderIcon fontSize="small" /><span>{tweets.user.favourites_count}</span>
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
      </Card>
    </React.Fragment>
  ))}
</div>
    )
}


export default Post;