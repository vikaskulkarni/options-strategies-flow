import * as instrumentValuesActions from "../actions/instrumentValuesActions";

const initialState = {
  instrumentValues: {},
  selectedStrategy: "NONE"
};

const instrumentValuesReducer = (state = initialState, action) => {
  switch (action.type) {
    case instrumentValuesActions.GET_INSTRUMENTVALUES_SUCCESS:
      return {
        ...state,
        instrumentValues: action.instrumentValues
      };
    case instrumentValuesActions.SHOW_IRON_CONDOR_FLOW:
      return {
        ...state,
        selectedStrategy: action.strategy
      };
    default:
      return state;
  }
};

export default instrumentValuesReducer;
