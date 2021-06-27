import React, { useState } from "react";

import ReactFlow, {
  removeElements,
  addEdge,
  MiniMap,
  Controls,
  Background,
} from "react-flow-renderer";

import initialElements from "./flow-elements";

const onLoad = (reactFlowInstance) => {
  console.log("flow loaded:", reactFlowInstance);
  reactFlowInstance.fitView();
};

const FlowChart = () => {
  const [elements, setElements] = useState(initialElements);
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const graphStyles = { width: "100%", height: "750px" };

  return (
    <ReactFlow
      elements={elements}
      onElementsRemove={onElementsRemove}
      onConnect={onConnect}
      onLoad={onLoad}
      snapToGrid={true}
      snapGrid={[15, 15]}
      style={graphStyles}
    >
      <Controls />
      <Background color="#aaa" gap={16} />
    </ReactFlow>
  );
};

export default FlowChart;
