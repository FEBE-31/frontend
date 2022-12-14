import { applyMiddleware, combineReducers, createStore } from "redux";
import login from "../reducers/login";
import register from "../reducers/register";
import createCampaign from "../reducers/campaign";
import thunk from "redux-thunk";

const rootReducers = combineReducers({
  login,
  register,
  createCampaign,
});

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
