import React,{useState} from 'react'
import Input from '../../Presentation/FormItem/Input'
const Login= props =>{
 const [userState,setUserState]=useState({
     "userName":"",
     "password":""
 });
const onChange=event=>{
    console.log(userState)
    if(event.target.name=="userName"){
        setUserState({
            userName:event.target.value,
            password:userState.password
        })
    }
    else{
        setUserState({
            userName: userState.userName,
            password:event.target.value
        })
    }
}
    return (
        <div>
<Input type="text" value={userState.userName} onChange={onChange} name="userName"
title="Please provide Username" />
<Input type="text" value={userState.password} onChange={onChange} name="password"
title="Please provide password" />
</div>
    );
}

export default Login;