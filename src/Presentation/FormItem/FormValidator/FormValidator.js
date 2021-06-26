import React, {useEffect, useState} from 'react'
const FormValidator= props =>{
    const [errorMessage,setErrorMessage]=useState("");
    const runValidation=async (type,value)=>{
        let error="";
        if(props.validate)
        switch (type){
            case "password":{
                const regexp= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                error=!value.match(regexp)?`
            ${props.title} is having issue`:"";
                await setErrorMessage(error);
                props.tunnel.next({name:props.name,errorMessage:error});
        break;
            }
            default :
                break;
        }
    }
    useEffect(async ()=>{
        await runValidation(props.type,props.value)
    },[props.value]);
    return (
      <span className="validationError">{errorMessage}</span>
    );
}

export default FormValidator;
