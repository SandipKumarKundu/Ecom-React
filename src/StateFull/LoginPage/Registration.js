import React, { useState} from 'react'
import { connect } from 'react-redux'
import {registerUser} from "../../Actions";
import {useHistory, withRouter} from "react-router-dom";
import DynamicForm from "../DynamicFormComponent/DynamicFormComponent";
import {BehaviorSubject} from "rxjs";
import HttpInterceptor from "../../Services/HttpInterceptorService";
import {filter} from "rxjs/operators";
const Register = props=>{
    const dynamicFormOutputCaller = new BehaviorSubject();

    const {user,dispatch}= props;
    let history = useHistory();
    const [userState,setUserState]=useState({
        "userName":user.userName?user.userName:"",
        "password":user.password?user.password:"",
        "lastName":user.lastName?user.lastName:"",
        "firstName":user.firstName?user.firstName:"",
        "address":user.address?user.address:"",
        "phoneNumber":user.phoneNumber?user.phoneNumber:"",
        "gender":user.gender?user.gender:"",
        "DOB":user.DOB?user.DOB:"",
        "runValidate":{}
    });
    dynamicFormOutputCaller.pipe(filter(data=>data)).subscribe(async data=>{
        try{
            const user=await HttpInterceptor.post("users/register",data);
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
        return (
            <DynamicForm formId={"basic-registration"} eventEmitter={dynamicFormOutputCaller} />

        );
}

const mapStateToProps = state => ({
    user: state.users
})
export default connect(
    mapStateToProps
)(withRouter(Register));

