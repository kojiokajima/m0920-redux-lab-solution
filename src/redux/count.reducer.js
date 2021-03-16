//init state
const initState = {
    count: 0
}

//reducer function
const countReducer = (state = initState, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1
            }
        default:
            return state
    }
}

export default countReducer