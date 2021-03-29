import React,{useState,useEffect} from 'react';
import Card from '@material-ui/core/Card';
import { CardContent, CircularProgress } from '@material-ui/core';
import axios from 'axios';
import './trendbody.css';
import {useHistory} from 'react-router-dom'

 export default function TrendBody(){

   const [trend,setTrend]=useState(0);
   const [prevLimit,setPrevLimit]=useState(0)
   const [limit,setLimit]=useState(7)
   useEffect(()=>{
      fetchTrends()
   },[])

var history=useHistory()

   const fetchTrends=()=>{
      axios.get('/tweets/trends')
      .then(response=>{
         console.log(response.data.tweets)
          if(response.data.success){
              setTrend((response.data.tweets));
          }else{
              alert("Failed to get tweets")
          }
      }).catch((error)=>{
          alert("Error arise",error)
      })
   }
  
   const loadMore=()=>{
       setLimit(limit+7);
       setPrevLimit(prevLimit+(limit-prevLimit));
       console.log(limit);
       console.log(prevLimit)
   }

     return(
         <div>
                    <Card className="trendy">
                      <h3 className="trends">What's happenning</h3>
                       {trend?trend[0].trends.slice(prevLimit,limit).map((trends,index)=>(
                        <React.Fragment key={index}>
                        <CardContent className="tren" > 
                         <p className="name">{trends.name}</p>
                         </CardContent>
                         </React.Fragment>
                         )):<CircularProgress style={{color:"var(--twitter-color)",padding:"50px"}} disableShrink/>}
                         <div className="trending">
                         <a href="#" onClick={loadMore} style={{textDecoration:"none",paddingLeft:"14px",
                         color:"var(--twitter-color)"}}>Show More</a>
                         </div>
                         </Card>
         </div>
     );
 }
