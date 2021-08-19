import React from "react";
import './Products.css'
import {Button} from "../FormItem/Button";
export const Products=(props)=>{
    return (
        <div className="div-container">
            <p>{props.productName}</p>
            {props.productDescription}
            <p >Available count :{props.quantity- parseInt(props.count)}</p>
            <p className={"priceDetails"}>${props.price}</p>
            <p className={"sellerDetail"}>{props.sellerDetail}</p>
            <p className={"choiceDetails"}>{props.recomentation.join(" , ")}</p>
            {!parseInt(props.count)?<Button class={props.class} onClick={()=>props.onClick(props.name)} name={props.name} />
            :(<div className="quantity-container">
            <Button class="plus-icon" onClick={()=>props.onClick("-")} name="-" />
                    {props.count}
            <Button class="minus-icon" onClick={()=>props.onClick("+")} name="+" />
        </div>)}
        </div>
    );
}
