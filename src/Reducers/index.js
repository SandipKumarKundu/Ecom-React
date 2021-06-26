import { combineReducers } from 'redux'
import users from './userReducer'
import dynamicForm from './dynamicFormReducer'
import bundleData from './bundleDataReducer'

export default combineReducers({
    users,dynamicForm,bundleData
})
