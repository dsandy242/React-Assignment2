import React from 'react';
import State1 from 'C:/Users/sandh/Desktop/reactProject2/counter-app/src/Components/usingState.jsx';
import { Component } from 'react';
import State2 from './Components/usingState2';
import Nav from './Components/NavBar';
import Validation from './Assignment2/Validation'
import Char from './Assignment2/Char'

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



