import React from "react";
import "./BodyComp.css";
const headerComp=(props)=>
{

return <div><button>
    <h4 className="countryStyle">Country: {props.Country}   Code: {props.code} 
Slug: {props.slug}    NewConfirmed: {props.new}   NewDeaths: {props.newDeaths}   
TotalConfirmed: {props.TotalConfirmed} NewDeaths:{props.NewDeaths}
TotalDeaths:{props.TotalDeaths}   NewRecovered:{props.NewRecovered}    Date: {props.Date} 
</h4></button>
</div>
}
export default headerComp;
