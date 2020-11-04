import React from 'react';
import './feed.css'
import Post from './Post';
import TweetBox from './tweetbox';
function Feed(){
    return(
        <div className="feed">
          <div className="feed__header"> 
            <h5>Home</h5>
          </div>  
          <TweetBox/>
          <Post/>
        </div>
    );
}

export default Feed;