import React from 'react'
const Input= props =>{
    return (
<input type={props.type} value={props.value} onChange={props.onChange} name={props.name}
title={props.title}
></input>
    );
}

export default Input;