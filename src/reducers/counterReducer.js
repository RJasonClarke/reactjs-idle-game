const initialState = {
    frogs: 0
}

export const counterReducer = (state = initialState, action) => {
    switch(action.type){
        case "INCREMENT":
            return {
                ...state,
                frogs: state.frogs + 1
            }
        default:
            return state
    }
}