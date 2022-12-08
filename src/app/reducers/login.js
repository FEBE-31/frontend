// reducers/login.js
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/login";

const initialState = {
  isFetching: false,
  token: null,
  error: null,
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        token: action.token,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
}
