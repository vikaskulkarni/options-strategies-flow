import React, { useEffect, useState } from 'react';
import ReactFlow, {
  removeElements,
  addEdge,
  Controls,
  Background,
} from "react-flow-renderer";
import { TextField } from "@material-ui/core";

import './updatenode.css';
import getCounterShortStraddleElements from './counterShortStraddleElements';

const onLoad = (reactFlowInstance) => {
  console.log("flow loaded:", reactFlowInstance);
  reactFlowInstance.fitView();
};

const CounterShortStraddle = (props) => {
  const [elements, setElements] = useState([]);
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const graphStyles = { width: "100%", height: "750px" };

  const {
    instrumentValues,
    strikePrice,
    stopLossPercent,
    getInstrumentValues
  } = props;

  let [strikePriceNode, setStrikePriceNode] = useState(strikePrice);
  let [stopLossPercentNode, setStopLossPercentNode] = useState(stopLossPercent);

  const getElementsForChart = () => getCounterShortStraddleElements(
    instumentSpot,
    strikePriceNode,
    stopLossPercentNode,
  )

  useEffect(() => {
    getInstrumentValues();
  }, []);

  useEffect(() => {
    setElements(getElementsForChart());
  }, [
    strikePriceNode,
    stopLossPercentNode,
    setElements
  ]);

  const instumentSpot = props.instrumentType === "bnfty" ? instrumentValues.bnfty : instrumentValues.nfty;

  const strikePriceDefault = Math.round(instumentSpot / 100) * 100;
  strikePriceNode = strikePriceNode === 0 ? strikePriceDefault : parseInt(strikePriceNode);

  stopLossPercentNode = 30;


  if (instumentSpot) {
    return (<ReactFlow
      elements={getElementsForChart()}
      onElementsRemove={onElementsRemove}
      onConnect={onConnect}
      onLoad={onLoad}
      snapToGrid={true}
      snapGrid={[15, 15]}
      style={graphStyles}
    >
      <Controls />
      <Background gap={16} />
      <div className="updatenode__controls">
        <div>
          <TextField
            label="Strike Price"
            value={strikePriceNode}
            onChange={(evt) => setStrikePriceNode(evt.target.value)}
            name="strikePrice"
            id="strikePrice"
            type="number"
            style={{ margin: '5px' }}
          />

          <TextField
            label="Stoploss Percent"
            value={stopLossPercentNode}
            onChange={(evt) => setStopLossPercentNode(evt.target.value)}
            name="stopLossPercent"
            id="stopLossPercent"
            type="number"
            style={{ margin: '5px' }}
          />
        </div>
      </div>

    </ReactFlow>);
  }
  else return (<div></div>)
};

export default CounterShortStraddle;