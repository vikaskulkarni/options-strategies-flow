import { takeLatest } from "redux-saga/effects";
import * as instrumentValuesActions from "../actions/instrumentValuesActions";


export function* watchSagas() {
  yield takeLatest(
    instrumentValuesActions.GET_INSTRUMENTVALUES,
    instrumentValuesActions.genInstrumentValuesGet
  );
}
