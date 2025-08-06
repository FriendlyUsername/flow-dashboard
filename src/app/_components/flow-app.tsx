"use client";

import { useState, useCallback } from "react";
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  type EdgeChange,
  type Connection,
  type EdgeTypes,
  type OnNodesChange,
  Background,
  type BackgroundVariant,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import CustomEdge, { CustomConnectionLine } from "./custom-edge";
import { CustomNode, type CustomNodeType } from "./custom-node";
import { DevTools } from "~/components/devtools";
const MAX_NODE_HEIGHT = 200;

const initialNodes: CustomNodeType[] = [
  {
    id: "n1",
    position: { x: 400, y: -MAX_NODE_HEIGHT },
    type: "custom",
    data: {
      heading: {
        title: "Reschedule call",
        description:
          "Ask the caller to find another time for the call. Suggest different time slots.",
        icon: "thunder",
        label: "Default",
        tags: ["tag1", "tag2"],
        action: "Reschedule",
      },
    },
  },
  {
    id: "n2",
    position: { x: 0, y: MAX_NODE_HEIGHT },
    type: "custom",
    data: {
      heading: {
        title: "Who is calling",
        description:
          "Introduction to the call. Get the caller's name and why they are calling",
        icon: "thunder",
        label: "State",
        tags: ["On site", "Why"],
        action: "Label",
      },
    },
  },
  {
    id: "n3",
    position: { x: 800, y: MAX_NODE_HEIGHT },
    type: "custom",
    data: {
      heading: {
        title: "Customer name",
        description: "Ask the caller for their name",
        icon: "chat",
        label: "Default",
        tags: [],
        action: "Add_Name",
      },
    },
  },
  {
    id: "n4",
    position: { x: 800, y: MAX_NODE_HEIGHT * 2 },
    type: "custom",
    data: {
      heading: {
        title: "Customer date of birth",
        description:
          "Ask the caller for date of birth once the name has been recieved.",
        icon: "chat",
        label: "Default",
        tags: ["Age"],
        action: "Add_DOB",
      },
    },
  },
];

const initialEdges: CustomEdge[] = [
  {
    id: "n1-n2",
    source: "n1",
    target: "n2",
    sourceHandle: null,
    targetHandle: "right",
    type: "custom",
    data: { label: "Is not available", icons: ["mail", "message", "phone"] },
  },
  {
    id: "n1-n3",
    source: "n1",
    target: "n3",
    sourceHandle: null,
    targetHandle: "left",
    type: "custom",
    data: { label: "Is available", icons: ["mail", "message", "phone"] },
  },
];

const edgeTypes: EdgeTypes = {
  custom: CustomEdge,
};
const nodeTypes = {
  custom: CustomNode,
};

export const FlowApp = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange: OnNodesChange<CustomNodeType> = useCallback(
    (changes) =>
      setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange<(typeof initialEdges)[number]>[]) =>
      setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );
  const onConnect = useCallback(
    (params: Connection) =>
      setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    [],
  );

  return (
    <div style={{ height: "100%" }} className="shadow-sm">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        edgeTypes={edgeTypes}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        connectionLineComponent={CustomConnectionLine}
        onConnect={onConnect}
        minZoom={1}
      >
        <Background variant={"dots" as BackgroundVariant} />
        <DevTools position="top-left" />
      </ReactFlow>
    </div>
  );
};
