import React, {useCallback, useEffect, useState} from 'react'
import Input from '../../Presentation/FormItem/Input'
import {registerForm, registerUser, updateFormData} from '../../Actions'
import  {connect} from 'react-redux'
import HttpInterceptor from "../../Services/HttpInterceptorService";
import {BehaviorSubject} from "rxjs";
import {filter, tap} from "rxjs/operators";
const DynamicForm= props =>{
    let formDef={};
    const [dynamicForm,setDynamicForm]=useState({name:"",input:[],id:""});
    const [dynamicFormData,setDynamicFormData]=useState({});
    const [dynamicFormValid,setDynamicFormValid]=useState({});
    const [dynamicFormError,setDynamicFormError]=useState({});
    const validatorSubject = new BehaviorSubject({});
    validatorSubject.pipe(
        tap(message=>console.log(`error message ${Object.keys(message).length}`)),
        filter(
            message=>Object.keys(message).length>0),
        filter(message=>message.errorMessage.length>0)
    )
        .subscribe(async message=>{
            const errorMap=dynamicFormError;
            errorMap[message.name]=message.errorMessage;
    await setDynamicFormError(errorMap);
    const validityMap=dynamicFormValid;
    validityMap[message.name]=false
    await setDynamicFormValid(validityMap);
})
    useEffect(async ()=>{
        const {data}=await HttpInterceptor.get(`form/${props.formId}`);
        formDef=data;
        await setDynamicForm(formDef);
        props.dispatch(registerForm(formDef));
    },[]);
    const onChange=async event=>{
        const {name,value}=event.target;
        let formData={...dynamicFormData};
        formData[name]=value;
        let validator={...dynamicFormValid};
        validator[name]=true;
        await setDynamicFormValid(validator);
        const errorMap=dynamicFormError;
        delete errorMap[name]
        await setDynamicFormError(errorMap);
        await setDynamicFormData(formData);

    }
    const submit=async event=>{
        event.preventDefault();
        if(Object.keys(dynamicFormError).length<1) {
            props.dispatch(updateFormData(dynamicForm.id,dynamicFormData));
            props.eventEmitter.next(dynamicFormData);
        }
    }
    return (
        <form>
            {

                dynamicForm.input?dynamicForm.input.map(inputs=>{
                return (<Input key={inputs.name} type={inputs.type} value={dynamicFormData[inputs.name]} onChange={onChange} name={inputs.name}
                title={inputs.title} validate={dynamicFormValid[inputs.name]} tunnel={validatorSubject}/>);
            }):""
            }

            <button onClick={submit}>submit</button>

        </form>
    );
}

const mapStateToProps = state => ({
    dynamicForms: state.dynamicForm
})
export default connect(
    mapStateToProps
)(DynamicForm);
