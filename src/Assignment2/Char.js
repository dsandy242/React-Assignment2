import React from 'react'

const Char=(props)=>{
    const style1={
        padding: '2px',
        margin: '2px',
        textAlign:"center",
        border: '2px solid black',
        disply:'inline-block'
    }
    return (<div style={style1} onClick={props.Clicked}>
{props.Character}
    </div>)
}
export default Char;