import { connect } from "react-redux";
import App from "./App";
import { getInstrumentValues, showIronCondor } from "../actions/instrumentValuesActions";
import IronCondorShortStrangle from "../components/IronCondorShortStrangle";
import CounterShortStraddle from "../components/CounterShortStraddle";


export const AppCtr = connect(
  (state) => ({
    instrumentValues: state.instrumentValuesReducer.instrumentValues,
    selectedStrategy: state.instrumentValuesReducer.selectedStrategy,
  }),
  { getInstrumentValues, showIronCondor }
)(App);

export const IronCondorShortStrangleCtr = connect(
  (state) => ({
    instrumentValues: state.instrumentValuesReducer.instrumentValues,
    peStrike: state.peReducer.peStrike,
    peHedgelegOffset: state.peReducer.peHedgelegOffset,
    peExitOffset: state.peReducer.peExitOffset,
    ceStrike: state.ceReducer.ceStrike,
    ceHedgelegOffset: state.ceReducer.ceHedgelegOffset,
    ceExitOffset: state.ceReducer.ceExitOffset,
    strategy: state.instrumentValuesReducer.selectedStrategy
  }),
  { getInstrumentValues }
)(IronCondorShortStrangle);

export const CounterShortStraddleCtr = connect(
  (state) => ({
    instrumentValues: state.instrumentValuesReducer.instrumentValues,
    strikePrice: state.counterShortStraddleReducer.strikePrice,
    stopLossPercent: state.counterShortStraddleReducer.stopLossPercent,
    strategy: state.instrumentValuesReducer.selectedStrategy
  }),
  { getInstrumentValues }
)(CounterShortStraddle);


// THIS FILE CAN BE USED TO DEFINE ALL THE DISPLAY CONTAINERS THAT WRAPS THE COMPONENTS
