// import React from 'react';
// import State1 from 'C:/Users/sandh/Desktop/reactProject2/counter-app/src/Components/usingState.jsx';
// import { Component } from 'react';
// import State2 from './Components/usingState2';
// import Nav from './Components/NavBar';
// import Validation from './Assignment2/Validation'
// import Char from './Assignment2/Char'
/*
class App extends Component{
  state={
    input:''
  }
  onChanged=(event)=>{
    this.setState({input:event.target.value})
  }
  onDeleteChar=(index)=>{
    const text=this.state.input.split('')
    text.splice(index,1)
    const stext=text.join('')
    this.setState({input:stext})
}

  render(){
    const list=this.state.input.split('').map(
      (ch,index)=>{
      return (<Char Character={ch} key={index} Clicked={()=>this.onDeleteChar(index)}></Char>);
    }
      )
  
    return (<div> 
<input type="text" value={this.state.value} onChange={this.onChanged}/> 
<p>{this.state.input}</p>
<Validation TLength={this.state.input.length}></Validation>
{list}
    </div>)
  }
}
export default App;
*/


// class App extends Component {
//   state={
//     counters:[
//         {id:1,value:3},
//         {id:2,value:2},
//         {id:3,value:0},
//         {id:4,value:0}

//     ]
//     };
//     handleIncrement= counter =>{
//         const counters=[...this.state.counters];
//         const index=counters.indexOf(counter);
//         counters[index]={...counter};
//         counters[index].value++;
//         this.setState({counters});

//     }

//     handleReset= () => {
//         const counters=this.state.counters.map(c => {
//             c.value=0 ;
//             return c;
//         });
//         this.setState({counters});
//        };
//     handleDelete = counterId=>{
//     const counters=this.state.counters.filter(c=>c.id!==counterId);
//     this.setState({counters});
//     console.log("hellloooo");
//     }
//   render(){
//   return (<div>
//     <Nav totalCounters={this.state.counters.filter(c=>c.value>0).length}></Nav>
//     <State2 onReset={this.handleReset}
//             counters={this.state.counters}
//             onDelete={this.handleDelete}
//             onIncrement={this.handleIncrement}
//             ></State2>
//     </div>
//   );
// }
// }

// export default App;



import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import BodyComp from './AxiosProject/BodyComponent';
import HeaderComp from './AxiosProject/HeaderComponent';
import './AxiosProject/HeaderComp.css';
//import Dropdown from './AxiosProject/dummy';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Countries: [],
      Global: {},
      Country: "",
      dis: "",
      value: "",
      selectedCountry: ""
    }
    //  this.onClickHandler = this.onClickHandler.bind(this)
  }

  componentDidMount() {
    axios.get('https://api.covid19api.com/summary')
      .then((res) => {
        let con = res.data.Countries;
        // let country=con.Country;
        console.log(con);
        //  console.log(country);
        this.setState({ Countries: con });
        // this.setState( {Country:country});
        let global = res.data.Global;
        console.log(global);
        this.setState({ Global: global });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Fanally Block Executed")
      });
  }
  onClickHandler(e) {
    let selectedCountry = e.target.value;
    this.setState({
      selectedCountry
    })
    // const Countries=this.state.Countries.map(con1=>{
    //   return <BodyComp key={con1.Country} Country={con1.Country} code={con1.CountryCode}
    //   slug={con1.Slug} new={con1.NewConfirmed} newDeaths={con1.NewDeaths} TotalConfirmed={con1.TotalConfirmed}
    //   NewDeaths={con1.NewDeaths} TotalDeaths={con1.TotalDeaths} NewRecovered={con1.NewRecovered} TotalRecovered={con1.TotalRecovered}
    //   Date={con1.Date}></BodyComp>
    //   })
    //   debugger;
    // this.setState({Countries:Countries})
    //return <div>{Countries}</div>
  }


  render() {

    let global = this.state.Global
    let GlobalList = Object.keys(global).map((l, k) => {
      return (
        <HeaderComp key={k} tit={k} value={l} >{global[l]}</HeaderComp>
      )
    })
    return (
      <div>
        {/* <button onClick={this.getCountries}>Getdata</button> */}
        <h1>Global:</h1><h2>{GlobalList}</h2>
        <div>
          <select placeholder="select" onChange={(e) => this.onClickHandler(e)}>
            {this.state.Countries.map((val) => <option key={val.Country} value={val.Country}>{val.Country}</option>)}
          </select>
        </div>
        {/* <h1>Countries:</h1><h2>{Countries}</h2> */}
    <div>{this.state.Countries.filter((country) => country.Country == this.state.selectedCountry).map((l) =>(
      <div>
        <li>Country - {l.Country}</li>
        <li>NewConfirmed -{l.NewConfirmed}</li>
        <li>NewDeaths - {l.NewDeaths}</li>
        <li>NewRecovered - {l.NewRecovered}</li>
        <li>TotalConfirmed - {l.TotalConfirmed}</li>
        <li>TotalDeaths - {l.TotalDeaths}</li>
        <li>TotalRecovered - {l.TotalRecovered}</li>
      </div>
    ))}</div>
      </div>
    );
  }
}


export default App;

// Country: "Afghanistan"
// CountryCode: "AF"
// Date: "2020-06-13T21:20:09Z"
// NewConfirmed: 656
// NewDeaths: 20
// NewRecovered: 602
// Slug: "afghanistan"
// TotalConfirmed: 23546
// TotalDeaths: 446
// TotalRecovered: 3928

{/* <DropdownButton
alignRight
title="Dropdown right"
id="dropdown-menu-align-right"
onSelect={Countries}
  >
        <Dropdown.Item eventKey="opt1">opt</Dropdown.Item>
        <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
        <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="some link">some link</Dropdown.Item>
</DropdownButton>
<select>
<option onClick={Countries}>opt</option>
<option value="lime">Lime</option>
<option selected value="coconut">Coconut</option>
<option value="mango">Mango</option>
</select>

// onChange={event => this.setState({Country: event.target.value,
      //   dis: event.target.value === "" ? "You must select your favourite team" : ""})}
             //onChange={(e) => this.setState({Country: e.target.value})}

*/}