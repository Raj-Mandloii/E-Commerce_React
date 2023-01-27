import * as types from "./actionTypes";
const initState = {
    job: [],
    loading: false,
    error: false
}

const reducer = (oldState = initState, action) => {
    switch (action.type) {
        case types.REQUEST:
            return {
                ...oldState,
                loading: true,
                error:false
            }

        case types.SUCCESS:
            
            return {
                ...oldState,
                loading: false,
                error:false,
                job: action.payload

            }
        case types.FAILURE:
            return {
                ...oldState,
                loading: false,
                error:true
            }
        default:
            return oldState
    }
}

export { reducer };