"use client";
import { useState, useCallback } from "react";
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  type NodeChange,
  type EdgeChange,
  type Connection,
  type EdgeTypes,
  useStore,
  type Edge,
  type OnNodesChange,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import CustomEdge, {
  CustomConnectionLine,
  type CustomEdgeIconVariant,
} from "./custom-edge";
import { PhoneIcon, Bug, X } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { CustomNode, type CustomNodeType } from "./custom-node";
const MAX_NODE_HEIGHT = 400;

const initialNodes: CustomNodeType[] = [
  {
    id: "n1",
    position: { x: 200, y: 0 },
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
    targetHandle: null,
    type: "custom",
    data: { label: "Edge 1", icons: ["mail", "message", "phone"] },
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
  console.log("State", { nodes, edges });

  return (
    <div
      style={{ height: "100vh" }}
      className="relative shadow-sm lg:w-[calc(100vw-var(--sidebar-width))]"
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        edgeTypes={edgeTypes}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        connectionLineComponent={CustomConnectionLine}
        onConnect={onConnect}
        fitView
      />
      <DebugPanel nodes={nodes} edges={edges} edgeTypes={edgeTypes} />
    </div>
  );
};

const DebugPanel = ({
  nodes,
  edges,
  edgeTypes,
}: {
  nodes: typeof initialNodes;
  edges: typeof initialEdges;
  edgeTypes: EdgeTypes;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const togglePanel = () => setIsVisible(!isVisible);
  if (!isVisible)
    return (
      <div className="absolute top-4 left-4 z-10">
        <Button
          variant="outline"
          size="sm"
          onClick={togglePanel}
          className="h-8 w-8 border-gray-200 bg-white/90 p-0 backdrop-blur-sm hover:bg-white"
        >
          <Bug className="h-4 w-4" />
        </Button>
      </div>
    );

  return (
    <div className="absolute top-4 left-4 z-10">
      <div className="max-w-sm rounded-lg border border-gray-200 bg-white/90 p-4 shadow-lg backdrop-blur-sm">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-800">Debug Info</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={togglePanel}
            className="h-6 w-6 p-0 hover:bg-gray-100"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="space-y-1 font-mono text-xs break-words text-gray-600">
          <div>
            <span className="font-medium text-gray-800">Nodes:</span>{" "}
            <span className="text-blue-600">
              [
              {nodes.map(
                (node, index) => `node${index}: ${JSON.stringify(node)} + `,
              )}
              ]
            </span>
          </div>
          <div>
            <span className="font-medium text-gray-800">Edges:</span>{" "}
            <span className="text-green-600">
              [{edges.map((edge) => edge.id).join(", ")}]
            </span>
          </div>
          <div>
            <span className="font-medium text-gray-800">Edge Types:</span>{" "}
            <span className="text-purple-600">
              [{Object.keys(edgeTypes).join(", ")}]
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
