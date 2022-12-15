import {
  CAMPAIGN_REQUEST,
  CAMPAIGN_SUCCESS,
  CAMPAIGN_FAILURE,
} from "../actions/campaign";

const initialState = {
  isFetching: false,
  msg: null,
  error: null,
  id: null,
};

export default function createCampaign(state = initialState, action) {
  switch (action.type) {
    case CAMPAIGN_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case CAMPAIGN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        msg: action.msg,
        id: action.id,
        error: null,
      };
    case CAMPAIGN_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
}
