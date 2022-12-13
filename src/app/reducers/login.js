// reducers/login.js
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "../actions/login";

const initialState = {
  isFetching: false,
  token: null,
  error: null,
  role: null,
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
      console.log(action.token);
      return {
        ...state,
        isFetching: false,
        token: action.token,
        error: null,
        role: action.role,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case LOGOUT:
      return {
        ...state,
        isFetching: false,
        token: null,
        error: null,
      };
    default:
      return state;
  }
}
