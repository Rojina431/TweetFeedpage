import React from 'react';
import './tweetbox.css';
import {Button,Avatar} from '@material-ui/core';
export default function TweetBox(){
    return(
        <div className="tweetbox">
            <form>
            <div className="tweetbox-input">
               <Avatar src="https://pixabay.com/vectors/woman-women-business-woman-female-1353825/"/>
               <input type="text" placeholder="What's hapenning?"/>
            </div>
            <div className="tweetbox-image">
                <input type="text"placeholder="Optional:Enter image url"/>
            </div>
            </form>
            <div className="tweetbox-button">
                <Button>Tweet</Button>
            </div>
        </div>
    );
}
