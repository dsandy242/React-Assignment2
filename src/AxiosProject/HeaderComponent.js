import React from 'react';
import "./HeaderComp.css"
const bodyComp=(props)=>{
    return <div>
        <h4 className='globalStyle'>{props.value}:{props.children}</h4>
    </div>
}
export default bodyComp;