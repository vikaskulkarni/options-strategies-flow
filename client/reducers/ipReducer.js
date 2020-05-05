import { GET_IP_SUCCESS } from "../actions/getIP";

const ipReducer = (state = { ipDetails: {} }, action) => {
  switch (action.type) {
    case GET_IP_SUCCESS:
      return Object.assign({}, state, {
        ipDetails: action.ip.data,
      });
    default:
      return state;
  }
};

export default ipReducer;
