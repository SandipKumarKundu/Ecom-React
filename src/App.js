import logo from './logo.svg';
import './App.css';
import Login from './StateFull/LoginPage/Login';
// import loginContainer from './Containers/loginContainer'
import Home from './StateFull/HomePage/Home';
import { BrowserRouter as Router, Route, Switch,useHistory } from 'react-router-dom';
import { connect } from 'react-redux'
import {useEffect} from 'react';
import Register from "./StateFull/LoginPage/Registration";
function App( {user}) {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route exact path="/">
            <Home value={user}/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          {/* <Route path="/dashboard">
            <Dashboard />
          </Route> */}
        </Switch>
      </Router>
     {/* <Login /> */}
    </div>
  );
}

// const getVisibleTodos = (users) => {
// return users;
// }
const mapStateToProps = state => ({
  user: state.user
})
export default connect(
  mapStateToProps
)(App);
