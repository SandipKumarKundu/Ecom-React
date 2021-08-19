import React from "react";
import './Navbar.css'
import {Button} from "../FormItem/Button";
export const Navbar=(props)=>{
    return (
        <div className="navbar-container">
            <div className="user-info">
            <div>Hello {props.user.firstName}</div>
            <div>Delver to {props.user.address}</div>
            </div>
        <div className="button-container">
            {props.buttons.map(button=>{
            return (<Button class={button.className} onClick={button.onClick} name={button.name} />);
                })
            }
        </div>
        </div>
    );
}
