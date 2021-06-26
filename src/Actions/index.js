export const loginUser = (userState) => ({
    type: 'loginUser',
  userName:userState.userName,
  password:userState.password,
  lastName:userState.lastName,
  firstName:userState.firstName,
  address:userState.address,
  phoneNumber:userState.phoneNumber,
  gender:userState.gender,
  DOB:userState.DOB
  });
  export const logoutUser = ({userName,password}) => ({
    type: 'logOutUser',
    userName: userName,
    password: password
  });
  export const registerUser = (userState) => ({
    type: 'registerUser',
      userName:userState.userName,
      password:userState.password,
      lastName:userState.lastName,
      firstName:userState.firstName,
      address:userState.address,
      phoneNumber:userState.phoneNumber,
      gender:userState.gender,
      DOB:userState.DOB
  });
  export const loadForm = (id) => ({
    type: 'loadForm',
    id:id
  });
  export const registerForm = (formConfig) => ({
    type: 'registerForm',
      data:formConfig
  });
  export const updateFormData = (id,bundleData) => ({
    type: 'updateFormData',
    id:id,
      data:bundleData
  });
