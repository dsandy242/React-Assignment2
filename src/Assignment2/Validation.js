import React from 'react'

const Validation=(props)=>{
   var message="Text is Too Long"
    if(props.TLength<=5)
    {
        message="Text is Too short"
    }
    return <div>
        {message}
    </div>
}
export default Validation;
/*
{
    props.inputLength>=5?
<p>TOo bIg</p>:
<p>Too short</p>}*/