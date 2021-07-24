import * as instrumentValuesActions from "../actions/instrumentValuesActions";

const initialState = {
  instrumentValues: {},
  selectedStrategy: "NONE",
  selectedInstrument: null,
};

const instrumentValuesReducer = (state = initialState, action) => {
  switch (action.type) {
    case instrumentValuesActions.GET_INSTRUMENTVALUES_SUCCESS:
      return {
        ...state,
        instrumentValues: action.instrumentValues,
      };
    case instrumentValuesActions.SHOW_STRATEGY:
      return {
        ...state,
        selectedStrategy: action.payload.strategy,
        selectedInstrument: action.payload.instrumentType,
      };
    default:
      return state;
  }
};

export default instrumentValuesReducer;
