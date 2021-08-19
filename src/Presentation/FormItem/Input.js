import React from 'react'
import "./Input.css"
import FormValidator from "./FormValidator/FormValidator";
const Input= props =>{
    return (
        <div className="inputs">
            <label>{props.name}            {props.required?<span className={'required'}>*</span>:""}
            </label>
            {
                props.type=='select'?
                   ( <select className={"selection"} type={props.type} value={props.value} onChange={props.onChange} name={props.name}
                             title={props.title}>
                       {props.options.map(options=>{
                           return (<option key={options} value={options} >{options}</option>)
                       })}
                    </select>):
                    <input type={props.type} value={props.value} onChange={props.onChange} name={props.name}
                           title={props.title}
                    ></input>
            }

            <FormValidator required={props.required} name={props.name} value={props?.value} type={props?.type} title={props?.title} validate={props?.validate} tunnel={props.tunnel}/>
        </div>
    );
}

export default Input;
