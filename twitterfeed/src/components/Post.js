import React,{useState,useEffect} from "react";
import "./Post.css";
import axios from 'axios';
import { Avatar, CircularProgress } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import { Card } from '@material-ui/core';
import InfiniteScroll from 'react-infinite-scroll-component';

  function Post() {
    const [Tweets, setTweets] = useState([]);
    const [lim,setLim] =useState(7)
    useEffect(() => {
      fetchTweets();

}, [lim])

/*window.onscroll=function(){
  if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight){
    setLim(prevLim=>prevLim+7);
  }
}*/
const fetchTweets= () => {
  axios.get(`/tweets/?count=${lim}`)
  .then(response => {
      if (response.data.success) {
          setTweets(response.data.tweets.statuses)
      } else {
          alert('Failed to get Tweets')
      }
  })
  .catch((error)=>{
    console.log(error.message);
  })
}



return (
       
    <div>
      <InfiniteScroll
       dataLength={Tweets.length} //This is important field to render the next data
       next={()=>{
         setLim(lim+7)
         console.log(lim)
        }}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
       hasMore={true}
       loader={<CircularProgress style={{color:"var(--twitter-color)",padding:"50px"}} disableShrink />}
       >
      {Tweets&&Tweets.map((tweets, index) => (
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
             <p>{tweets.text}</p>
            </div>
          </div>
          <img src="" alt="" />
          <div className="post__footer">
          <a className="footer"><ChatBubbleOutlineIcon className="icons"/>
          <span>{tweets.retweet_count}</span>
          </a>
          <a className="footer"><RepeatIcon  className="icons"/><span>{tweets.retweet_count}</span></a>
          <a className="footer"><FavoriteBorderIcon  className="icons"/><span>{tweets.user.favourites_count}</span>
          </a>
          <a className="footer"><PublishIcon  className="icons"/><span>{tweets.retweet_count}</span></a>
          </div>
        </div>
      </div>
      </Card>
    </React.Fragment>
  ))}
  </InfiniteScroll>
</div>
    )
}


export default Post;
