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
        case "GNATS_UPGRADE":
            return {
                ...state,
                frogs: state.frogs + 2
            }
        default:
            return state
    }
}