import React, { Component } from 'react';
import { getcountry } from "./countryRedux/action";
class CountryData extends Component{
    state={
        countryName:''
    }
ChangeHandler=(event)=>{
    let country=event.target.value;
    console.log("inSide Cahnge Handler")
    this.setState({countryName:country})
    console.log(this.state.countryName)
    }
   render(){ 
     debugger
      return <div><br/><h1>Select Country:</h1>
    <select placeholder="select"onChange={(e) => this.ChangeHandler(e)}>
      {getcountry.map((val) => <option key={val.Country} value={val.Country}>{val.Country} </option>)}
            </select>
    
    {/* {this.state.countryName && <Com1 con={this.state.countryName} toD={this.state.toDate} frD={this.state.fromDate} ></Com1>} */}
    </div>  
  }  
}
export default CountryData;