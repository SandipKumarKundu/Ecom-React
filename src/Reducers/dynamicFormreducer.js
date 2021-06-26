const dynamicForm = (state = [], action) => {
    switch (action.type) {
        case 'loadForm':
            if(action.id){
                const formConfig=state.filter(config=>config.id==action.id);
                return formConfig;
            }
            else
                return state;
        case 'registerForm':

            state.push(action.data);
            return state;
        default:
            return state
    }
}
export default dynamicForm
