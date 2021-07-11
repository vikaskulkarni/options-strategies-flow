import React, { useEffect, useState } from 'react';
import ReactFlow, {
  removeElements,
  addEdge,
  Controls,
  Background,
} from "react-flow-renderer";
import { TextField } from "@material-ui/core";
import getIronCondorShortStangleElements from "./ironCondorShortStangleElements";

import './updatenode.css';

const onLoad = (reactFlowInstance) => {
  console.log("flow loaded:", reactFlowInstance);
  reactFlowInstance.fitView();
};

const IronCondorShortStrangle = (props) => {
  const [elements, setElements] = useState([]);
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const graphStyles = { width: "100%", height: "750px" };

  const {
    instrumentValues,
    peStrike,
    peHedgelegOffset,
    peExitOffset,
    ceStrike,
    ceHedgelegOffset,
    ceExitOffset,
    getInstrumentValues
  } = props;

  let [peStrikeNode, setPEStrikeNode] = useState(peStrike);
  let [ceStrikeNode, setCEStrikeNode] = useState(ceStrike);

  let [peHedgelegOffsetNode, setPEHedgelegOffsetNode] = useState(peHedgelegOffset);
  let [ceHedgelegOffsetNode, setCEHedgelegOffsetNode] = useState(ceHedgelegOffset);

  let [peExitOffsetNode, setPEExitOffsetNode] = useState(peExitOffset);
  let [ceExitOffsetNode, setCEExitOffsetNode] = useState(ceExitOffset);

  const getElementsForChart = () => getIronCondorShortStangleElements(
    instumentSpot,
    peStrikeNode,
    ceStrikeNode,
    peHedgelegOffsetNode,
    ceHedgelegOffsetNode,
    peExitOffsetNode,
    ceExitOffsetNode
  )

  useEffect(() => {
    getInstrumentValues();
  }, []);

  useEffect(() => {
    setElements(getElementsForChart());
  }, [
    peStrikeNode,
    ceStrikeNode,
    peHedgelegOffsetNode,
    ceHedgelegOffsetNode,
    peExitOffsetNode,
    ceExitOffsetNode,
    setElements
  ]);

  const instumentSpot = props.instrumentType === "bnfty" ? instrumentValues.bnfty : instrumentValues.nfty;

  const peStrikeDefault = Math.round((instumentSpot - (instumentSpot / 100) * 4) / 100) * 100;
  peStrikeNode = peStrikeNode === 0 ? peStrikeDefault : parseInt(peStrikeNode);

  const peHedgelegOffsetDefault = Math.round(((peStrikeDefault / 100) * 1.5) / 100) * 100;
  peHedgelegOffsetNode = peHedgelegOffsetNode === 0 ? peHedgelegOffsetDefault : parseInt(peHedgelegOffsetNode);

  const ceStrikeDefault = Math.round((instumentSpot + (instumentSpot / 100) * 4) / 100) * 100;
  ceStrikeNode = ceStrikeNode === 0 ? ceStrikeDefault : parseInt(ceStrikeNode);

  const ceHedgelegOffsetDefault = Math.round(((ceStrikeDefault / 100) * 1.5) / 100) * 100;
  ceHedgelegOffsetNode = ceHedgelegOffsetNode === 0 ? ceHedgelegOffsetDefault : parseInt(ceHedgelegOffsetNode);

  peExitOffsetNode = peExitOffsetNode === 0 ? peHedgelegOffsetDefault : parseInt(peExitOffsetNode);
  ceExitOffsetNode = ceExitOffsetNode === 0 ? ceHedgelegOffsetDefault : parseInt(ceExitOffsetNode);

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
            label="PE Strike Price"
            value={peStrikeNode}
            onChange={(evt) => setPEStrikeNode(evt.target.value)}
            name="peStrikePrice"
            id="peStrikePrice"
            type="number"
            style={{ margin: '5px' }}
          />

          <TextField
            label="CE Strike Price"
            value={ceStrikeNode}
            onChange={(evt) => setCEStrikeNode(evt.target.value)}
            name="ceStrikePrice"
            id="ceStrikePrice"
            type="number"
            style={{ margin: '5px' }}
          />
        </div>
        <div>
          <TextField
            label="PE Hedge Leg Offset"
            value={peHedgelegOffsetNode}
            onChange={(evt) => setPEHedgelegOffsetNode(evt.target.value)}
            name="peHedgelegOffset"
            id="peHedgelegOffset"
            type="number"
            style={{ margin: '5px' }}
          />

          <TextField
            label="CE Hedge Leg Offset"
            value={ceHedgelegOffsetNode}
            onChange={(evt) => setCEHedgelegOffsetNode(evt.target.value)}
            name="ceHedgelegOffset"
            id="ceHedgelegOffset"
            type="number"
            style={{ margin: '5px' }}
          />
        </div>
        <div>
          <TextField
            label="PE EXIT Offset"
            value={peExitOffsetNode}
            onChange={(evt) => setPEExitOffsetNode(evt.target.value)}
            name="peExitOffset"
            id="peExitOffset"
            type="number"
            style={{ margin: '5px' }}
          />

          <TextField
            label="CE EXIT Offset"
            value={ceExitOffsetNode}
            onChange={(evt) => setCEExitOffsetNode(evt.target.value)}
            name="ceExitOffset"
            id="ceExitOffset"
            type="number"
            style={{ margin: '5px' }}
          />
        </div>
      </div>

    </ReactFlow>);
  }
  else return (<div></div>)
};

export default IronCondorShortStrangle;