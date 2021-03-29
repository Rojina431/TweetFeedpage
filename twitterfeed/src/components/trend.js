import React,{useState,useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import {InputAdornment} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import './trend.css';
import TrendBody from './trendbody.js';
export default function Trend(){

   var d=new Date()
   var date=d.getFullYear()

    const [color,setColor]=useState("rgb(169,169,169)")

    const myFunction=()=>{
       setColor("var(--twitter-color)")
    }

    const myFunc=()=>{
        setColor("rgb(169,169,169)")
     }

    return(
        <div className="trend">
            <TextField
              className="searchTweet"
              id="Tweet"
              placeholder="Search Twitter"
              fullWidth
              InputProps={{ disableUnderline:true,
                startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon style={{color:color}}/>
                    </InputAdornment>
                  ),
            }}
            onMouseOver={myFunction}
            onMouseLeave={myFunc}
      />
      <br/>
      <TrendBody/>
      <br/>
      <footer className="foot">
        <span className="foottext"><a href="#" className="link">Terms of Service</a></span>
        <span className="foottext"><a href="#" className="link">Privacy Policy</a></span>
        <span className="foottext"><a href="#" className="link">Cookie Policy</a></span>
        <br/>
        <span className="foottext"><a href="#" className="link">Ads info</a></span>
        <span className="foottext"><a href="#" className="link">More...</a></span>
       <span className="foottext">&#169; {date} Twitter,inc</span>
      </footer>
    </div>
    );
}