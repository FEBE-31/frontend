import { applyMiddleware, combineReducers, createStore } from "redux";
import login from "../reducers/login";
import register from "../reducers/register";
import thunk from "redux-thunk";

const rootReducers = combineReducers({
  login,
  register,
});

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
