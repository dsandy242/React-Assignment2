import React, { Component } from "react";
import { connect } from "react-redux";
import { getcountry } from "../../countryRedux/action";
mapDispatchToProps=(dispatch)=> {
  return {
    getcountry: country => dispatch(getcountry(country))
  };}
class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sss: "",
      countries:[]
    };   
  }
componentDidMount() {
    this.props.getcountry()
 }
  ChangeHandler=(event)=>{
    let country=event.target.value;
    console.log("inSide Cahnge Handler")
    this.setState({sss:country})
        }
  render() {

    return (
      <div><br/><h1>Select Country:</h1>
            </div>
    );
  }
}
const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default Form;




//    let cons =this.props.getcountry(this.props.country.map((val) => <option key={val.Country} value={val.Country}>hello </option>))
//{countries.map(country => <p>{country.Country}</p>)}
{/* {cons} */}

//   handleChange(event) {
//     this.setState({ [event.target.id]: event.target.value });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     const { title } = this.state;
//     this.props.addArticle({ title });
//     this.setState({ title: "" });
//   }

 // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);