import React from 'react'
import "./Input.css"
import FormValidator from "./FormValidator/FormValidator";
const Input= props =>{
    return (
        <div className="inputs">
            <label>{props.name}</label>
        <input type={props.type} value={props.value} onChange={props.onChange} name={props.name}
        title={props.title}
        ></input>
            <FormValidator name={props.name} value={props?.value} type={props?.type} title={props?.title} validate={props?.validate} tunnel={props.tunnel}/>
        </div>
    );
}

export default Input;
