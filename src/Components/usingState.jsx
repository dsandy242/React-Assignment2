import React from 'react';
import { Component } from 'react';
import './Styles.css';
class State1 extends Component
{
    render()
    {
        return(<div className="div2Style">
            
            <span className="spanStyle"> {this.formatCount()}</span>
            <button onClick={()=>this.props.onIncrement(this.props.counter)}>Increment</button>
            <button onClick={()=>this.props.onDelete(this.props.counter.id)} 
                    className="deletebtn">DELETE</button>
            

        </div>)
    }
    formatCount(){
        const {value}=this.props.counter;
        return value === 0?"Zero": value;
    }
}
export default State1;
