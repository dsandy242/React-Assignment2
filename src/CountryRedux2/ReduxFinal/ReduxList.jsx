import React from "react";
import { connect } from "react-redux";
import BodyComp from '../../AxiosProject/BodyComponent';
//import changeHandlers from './changeHandler';
const mapStateToProps = state => {
  return { countries: state.countries };
};
const changeHandler=(e,{countries})=>{
  debugger
  console.log(countries)
  let selectedCountry = e.target.value;
  console.log("inside ChangeHandler")
  {countries
  .filter((country) =>country.Country === selectedCountry)
  .map(con1=>{
  return <div>{con1.Country}</div>
    })
  }}
 //return <changeHandlers country={selectedCountry}></changeHandlers>
const ConnectedList = ({ countries }) => (
<ul><select placeholder="select" onChange= {(e)=>changeHandler(e,{countries})}>
          {countries.map(el => (
      <option key={el.country}>{el.Country}:{el.CountryCode}</option>
    ))}   </select>  
     </ul>
);

const List = connect(mapStateToProps)(ConnectedList,changeHandler);

export default List;

// key={con1.Country} Country={con1.Country} code={con1.CountryCode}
//     slug={con1.Slug} new={con1.NewConfirmed} newDeaths={con1.NewDeaths} TotalConfirmed={con1.TotalConfirmed}
//     NewDeaths={con1.NewDeaths} TotalDeaths={con1.TotalDeaths} NewRecovered={con1.NewRecovered} TotalRecovered={con1.TotalRecovered}
//     Date={con1.Date}
// onClickHandler=(e)=> {
  // let selectedCountry = e.target.value;
  // this.setState({
  //   selectedCountry
  //  })
  // const Countries2=this.state.Countries
  // .filter((country) =>country.Country === selectedCountry)
  // .map(con1=>{
  //   return <BodyComp key={con1.Country} Country={con1.Country} code={con1.CountryCode}
  //   slug={con1.Slug} new={con1.NewConfirmed} newDeaths={con1.NewDeaths} TotalConfirmed={con1.TotalConfirmed}
  //   NewDeaths={con1.NewDeaths} TotalDeaths={con1.TotalDeaths} NewRecovered={con1.NewRecovered} TotalRecovered={con1.TotalRecovered}
  //   Date={con1.Date}></BodyComp>
  //   })
 
//   this.setState({Countries2:Countries2})
// }

// this.state={
//   selectedCountry:'',
//   Countries2:''
// }

//   onClickHandler=(e)=> {
//     let selectedCountry = e.target.value;
//    this.setState({
//       selectedCountry     })
//     const Countries2=this.state.Countries
//    .filter((country) =>country.Country === selectedCountry)
//     .map(con1=>{
//      return <BodyComp key={con1.Country} Country={con1.Country} code={con1.CountryCode}
//      slug={con1.Slug} new={con1.NewConfirmed} newDeaths={con1.NewDeaths} TotalConfirmed={con1.TotalConfirmed}
//      NewDeaths={con1.NewDeaths} TotalDeaths={con1.TotalDeaths} NewRecovered={con1.NewRecovered} TotalRecovered={con1.TotalRecovered}
//      Date={con1.Date}></BodyComp>
//       })
  
//    this.setState({Countries2:Countries2})
//  }
