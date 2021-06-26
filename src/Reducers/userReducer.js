const users = (state = {}, action) => {
    switch (action.type) {
        case 'getUser':
        return state;
        case 'loginUser':
            if(state[action.userName] && state[action.password] ){
            return {...state,"isLoggedIn":true};
            }
            else
               {return state;}
         case 'logOutUser':
            if(state[action.userName] && state[action.password] ){
                return {...state,"isLoggedIn":false}
                }
                else
                   {return state;}
        case 'hasLoggedIn':
            return state.isLoggedIn;
        case 'registerUser':
            state={...state,
                userName: action.userName,
                password:action.password,
                lastName:action.lastName,
                firstName:action.firstName,
                address:action.address,
                phoneNumber:action.phoneNumber,
                gender:action.gender,
                DOB:action.DOB
            }
            return state;
      default:
        return state
    }
  }
  
  export default users
