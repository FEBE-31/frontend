import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
} from '../actions/register'

const initialState = {
    isFetching: false,
    token: null,
    error: null,
}

export default function register(state = initialState, action) {
    switch (action.type) {
        case REGISTER_REQUEST:
            return {
                ...state,
                isFetching: true,
                error: null,
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                token: action.token,
                error: null,
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.error,
            }
        default:
            return state
    }
}
