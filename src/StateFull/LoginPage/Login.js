import React, { useState} from 'react'
import { registerUser} from '../../Actions'
import  {connect, useDispatch} from 'react-redux'
import {useHistory} from "react-router-dom";
import { BehaviorSubject } from 'rxjs';
import HttpInterceptor from "../../Services/HttpInterceptorService";
import DynamicForm from "../DynamicFormComponent/DynamicFormComponent";
import {filter} from "rxjs/operators";
const Login= ({user,dispatch}) =>{
    let history = useHistory();
    let dynamicFormOutputCaller = new BehaviorSubject();
    dynamicFormOutputCaller.pipe(filter(data=>data)).subscribe(async data=>{
        try{
        const user=await HttpInterceptor.post("/users",data);
        await setUserState({
            userName:user.data.userName,
            password:user.data.password,
            lastName:user.data.lastName,
            firstName:user.data.firstName,
            address:user.data.address,
            phoneNumber:user.data.phoneNumber,
            gender:user.data.gender,
            DOB:user.data.DOB,
        })
        dispatch(registerUser(user.data));
        history.push('/');
        }
        catch (e){
            history.push('/register');
        }
    })
 const [userState,setUserState]=useState({
     "userName":user.userName?user.userName:"",
     "password":user.password?user.password:"",
     "lastName":user.lastName?user.lastName:"",
     "firstName":user.firstName?user.firstName:"",
     "address":user.address?user.address:"",
     "phoneNumber":user.phoneNumber?user.phoneNumber:"",
     "gender":user.gender?user.gender:"",
     "DOB":user.DOB?user.DOB:""
 });
    return (
        <DynamicForm formId={"basic-login"} eventEmitter={dynamicFormOutputCaller} />
    );
}

const mapStateToProps = state => ({
    user: state.users
  })
  export default connect(
    mapStateToProps
  )(Login);
