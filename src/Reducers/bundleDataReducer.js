const bundleData = (state = {}, action) => {
    switch (action.type) {
        case 'updateFormData':
            if(action.id){
                const newState=state;
                newState[action.id]=action.data;
                state=newState;
                return state;
            }
            else
                return state;
        default:
            return state
    }
}
export default bundleData
