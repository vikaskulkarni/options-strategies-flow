import { call, put } from "redux-saga/effects";
import request from "../utils/request";

export const GET_INSTRUMENTVALUES = "GET_INSTRUMENTVALUES";
export const GET_INSTRUMENTVALUES_SUCCESS = "GET_INSTRUMENTVALUES_SUCCESS";
export const GET_INDSTRUMENTVALUES_FAIL = "GET_INDSTRUMENTVALUES_FAIL";

export const SHOW_STRATEGY = "SHOW_STRATEGY";

export const getInstrumentValues = (instrumentValues) => ({
  type: GET_INSTRUMENTVALUES,
  instrumentValues,
});

const getInstrumentValuesSuccess = (instrumentValues) => ({
  type: GET_INSTRUMENTVALUES_SUCCESS,
  instrumentValues,
});

const getInstrumentValuesFail = (error) => ({
  type: GET_INDSTRUMENTVALUES_FAIL,
  error,
});

export function* genInstrumentValuesGet(payload) {
  console.log();
  try {
    // const resourcesResponse = yield call(request, RESOURCES_API, {
    //     method: "GET",
    // });
    yield put(getInstrumentValuesSuccess({ bnfty: 34839, nfty: 15856 } || {}));
  } catch (err) {
    yield put(getInstrumentValuesFail(err));
  }
}

export const showStrategy = (strategy, instrumentType) => {
  return {
    type: SHOW_STRATEGY,
    payload: { strategy, instrumentType },
  };
};
