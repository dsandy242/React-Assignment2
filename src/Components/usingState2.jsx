import React from 'react'
import State1 from './usingState.jsx'
import { Component } from 'react'
class State2 extends Component{


render()
{
    return(<div className="div1Style">
        <button className="resetStyle" onClick={this.props.onReset}>RESET</button>
        {this.props.counters.map (counter=><State1 onDelete={this.props.onDelete} onIncrement={this.props.onIncrement} key={counter.id} counter={counter}/>) }
    </div>);
}
}
export default State2;
