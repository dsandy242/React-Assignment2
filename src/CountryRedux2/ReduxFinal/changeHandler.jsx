// import React from 'react';
// import { Component } from 'react';
// class ChangeHandler extends Component{
//     render(){
//         return <div>
//             <h1>helooo {props.country}</h1>
//         </div>
//     }
// }
// export default ChangeHandler;
import React, { Component } from "react";
import { connect } from "react-redux";
import { getcountry } from "../../countryRedux/action";

const mapStateToProps = state => {
  return { countries: state.countries };
};

function mapDispatchToProps(dispatch) {
  return {
    getcountry: country => dispatch(getcountry(country))
  };}
class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sss: [],
      countries:[]
    };   
  }
componentDidMount() {
    this.props.getcountry()
 }

  ConnectedList ({ countries }){
    return <ul><select placeholder="select" onChange= {(e)=>this.changeHandler(e,{countries})}>
            {countries.map(el => (
        <option key={el.country}>{el.Country}:{el.CountryCode}</option>
      ))}   </select>  
       </ul>
  }
   changeHandler(e,{countries}){
    debugger
    console.log(countries)
    let selectedCountry = e.target.value;
    console.log("inside ChangeHandler")
    let sss2=countries
    .filter((country) =>country.Country === selectedCountry)
    .map(con1=>{
    return <div>{con1.Country}</div>
      })
      this.setState({sss:sss2})
    }

  
  render() {

    return (
      <div><br/><h1>Select Country:</h1>
      <button onClick={()=>this.ConnectedList.bind(this)}>connnnnnn</button>
      <div>{ this.state.sss } </div>
            </div>
    );
  }
}

const Form = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedForm);

export default Form;
