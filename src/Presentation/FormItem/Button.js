import React from "react";
import './Button.css'
export const Button=(props)=>{
    return (
        <button className={props.class} onClick={props.onClick}>{props.name}</button>
    );
}
