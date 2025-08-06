import type { Node, NodeProps } from "@xyflow/react";
import { Handle, Position } from "@xyflow/react";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { PhoneIcon } from "lucide-react";
import { Separator } from "~/components/ui/separator";
import { CustomIcons, type CustomIconVariant } from "./custom-icons";
import {
  BaseNode,
  BaseNodeContent,
  BaseNodeFooter,
  BaseNodeHeader,
} from "~/components/base-node";

export type CustomNodeType = Node<
  {
    heading: {
      icon: CustomIconVariant;
      tags: string[];
      description: string;
      label: string;
      title: string;
      action: string;
    };
  },
  "custom"
>;

export const CustomNode = ({ data }: NodeProps<CustomNodeType>) => {
  const { title, description, tags, label, action, icon } = data.heading;

  return (
    <BaseNode className="text-primary-text grid gap-4 rounded-md bg-white pt-3 pb-4 shadow-sm">
      {/* Target handle at the top */}
      {/* <Handle
        type="target"
        position={Position.Top}
        className="h-3 w-3 border-2 border-white bg-blue-500"
      /> */}

      {/* Left target handle */}
      <Handle
        type="target"
        position={Position.Left}
        id="left"
        className="h-3 w-3 border-2 border-white bg-blue-500"
      />

      {/* Right target handle */}
      <Handle
        type="target"
        position={Position.Right}
        id="right"
        className="h-3 w-3 border-2 border-white bg-blue-500"
      />

      <BaseNodeHeader>
        <Button variant="outline" className="size-6 bg-[#ECF7EF]">
          <CustomIcons variant={icon} className="text-[#129438]" />
        </Button>
        <span className="self-center">{title}</span>
        <Badge
          variant="secondary"
          className="self-center rounded-sm bg-transparent py-1 text-[10px] font-normal"
        >
          {label}
        </Badge>
      </BaseNodeHeader>
      <BaseNodeContent className="">
        <span>{description}</span>
      </BaseNodeContent>
      <BaseNodeFooter className="flex flex-row justify-between pr-4 pl-[18px]">
        <ul className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag}>
              <Badge variant="secondary">{tag}</Badge>
            </li>
          ))}
        </ul>
        <Badge>{action}</Badge>
      </BaseNodeFooter>

      {/* Source handle at the bottom */}
      <Handle
        type="source"
        position={Position.Bottom}
        className="h-3 w-3 border-2 border-white bg-green-500"
      />
    </BaseNode>
  );
};
