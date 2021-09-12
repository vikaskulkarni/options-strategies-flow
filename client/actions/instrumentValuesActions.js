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
    // const RESOURCES_API =
    //   "https://www1.nseindia.com/live_market/dynaContent/live_watch/stock_watch/liveIndexWatchData.json";
    // const resourcesResponse = yield call(request, RESOURCES_API, {
    //   method: "GET",
    //   mode: "no-cors",
    // });
    yield put(
      getInstrumentValuesSuccess(
        {
          bnfty: 36683,
          nfty: 17369,
        } || {}
      )
    );
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
