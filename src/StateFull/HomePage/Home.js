import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Switch,useHistory } from 'react-router-dom';
import { connect } from 'react-redux'
import {useEffect} from 'react';
const Home= props =>{
    let history = useHistory();
      if(!props.user?.userName){
      history.push('/login');
      history.go(0);
      // return(<Login />)
      }
    return (
        <div>
            <h1>this is the main Page Welcome </h1>
</div>
    );
}
const mapStateToProps = state => ({
    user: state.users
})
export default connect(
    mapStateToProps
)(Home);
