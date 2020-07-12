import React,{Component} from 'react';
import {connect} from 'react-redux';
import { removeList } from '../reduxProject2/actions';

class AllTodos extends Component{
    removeList=(index)=>{
     this.props.removeList(index);
 }
 render(){
 const todos =this.props.todos.map((index)=>
 <li key={index}>{index.id}  
 <button onclick={this.removeList}>X</button>
  </li>)
  return <div>
      {todos}
  </div>

 }
    
}
export default AllTodos;