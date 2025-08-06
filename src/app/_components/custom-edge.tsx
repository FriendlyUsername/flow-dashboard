import React, { type FC } from "react";
import {
  getBezierPath,
  EdgeLabelRenderer,
  BaseEdge,
  type EdgeProps,
  type Edge,
  useConnection,
} from "@xyflow/react";
import { Button } from "~/components/ui/button";
import { CustomIcons } from "./custom-icons";

export type CustomEdgeIconVariant = "message" | "phone" | "mail" | undefined;

type CustomEdge = Edge<
  { icons: CustomEdgeIconVariant[]; label: string },
  "custom"
>;

const CustomEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  data,
}: EdgeProps<CustomEdge>) => {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });
  console.log("data", data);

  return (
    <>
      <BaseEdge id={id} path={edgePath} />
      <EdgeLabelRenderer>
        <div
          style={{
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
          }}
          className="edge-label-renderer__custom-edge nodrag nopan flex max-h-fit max-w-fit flex-col gap-1"
        >
          <div className="bg-accent">
            <Button variant={"ghost"}>
              {/*{data?.label}*/}
              is not available
            </Button>
          </div>
          <div className="bg-accent mx-auto flex max-w-fit justify-center">
            {data?.icons?.map((icon: CustomEdgeIconVariant) => (
              <Button key={icon} variant="ghost" size="icon" className="size-8">
                <CustomIcons variant={icon} />
              </Button>
            ))}
          </div>
        </div>
      </EdgeLabelRenderer>
    </>
  );
};

export const CustomConnectionLine = ({
  fromX,
  fromY,
  toX,
  toY,
}: {
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
}) => {
  const { fromHandle } = useConnection();

  return (
    <g>
      <path
        fill="none"
        stroke={"black"}
        strokeWidth={1.5}
        className="animated"
        d={`M${fromX},${fromY} C ${fromX} ${toY} ${fromX} ${toY} ${toX},${toY}`}
      />
      <circle
        cx={toX}
        cy={toY}
        fill="#131313"
        r={3}
        stroke={fromHandle?.id ?? ""}
        strokeWidth={1.5}
      />
    </g>
  );
};

export default CustomEdge;
