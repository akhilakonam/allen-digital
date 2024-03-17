const initialState = {
    isLoading: false
}

export default function loaderReducer(state=initialState, action) {
    switch(action.type) {
        case "SET_LOADER_STATUS": {
            return {
                ...state,
                isLoading: action.payload
            }
        }
        default: return state
    }
}