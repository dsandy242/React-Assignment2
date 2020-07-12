import React from 'react';
import { Component } from 'react';
import axios from 'axios';
class Country extends Component{
 state={
cons:[]
 }
    componentDidMount(){
   const str="2020-06-26T20:12:12.831Z";
const today1='2020-06-28T20:12:12.831Z';
  axios.get(`https://api.covid19api.com/country/${this.props.con}/status/confirmed?from=${str}&to=${today1}`)
  .then((req)=>{
  const conData=req.data;
  this.setState({cons:conData});
  console.log(this.state.cons)
          })
  .catch((error)=>{
      console.log("error")
    })
  .finally(()=>
    console.log("Finally Excuted"));
}
render(){
   
    return <div> 
<h1>{this.props.con.Country}</h1>
{this.state.cons.map((c,index)=><li key={index}>
  Country:{c.Country}<br/> Country Cases:{c.Cases} <br/> Date: {c.Date}</li>)}
    </div>
}
}
export default Country;