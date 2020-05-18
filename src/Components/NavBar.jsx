import React from 'react';
import { Component } from 'react';
import './Styles.css'
class Nav extends Component{
render()
{
    return <div className="navStyle">Cart
    <span className="spanStyle">{this.props.totalCounters}
        </span>
    </div>
}
}
export default Nav;