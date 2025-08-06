import type { Node, NodeProps } from "@xyflow/react";
import { Handle, Position } from "@xyflow/react";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { PhoneIcon } from "lucide-react";
import { Separator } from "~/components/ui/separator";
import { CustomIcons, type CustomIconVariant } from "./custom-icons";

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
    <div className="text-primary-text w-[288px] rounded-md bg-white pt-3 pb-4 shadow-sm">
      {/* Target handle at the top */}
      <Handle
        type="target"
        position={Position.Top}
        className="h-3 w-3 border-2 border-white bg-blue-500"
      />

      <div className="grid gap-4">
        <div>
          <div className="flex justify-between pr-4 pb-2 pl-[18px]">
            <CustomIcons variant={icon} />
            <span className="self-center text-sm font-normal">{title}</span>
            <Badge
              variant="secondary"
              className="self-center rounded-sm bg-transparent py-1 text-[10px] font-normal"
            >
              {label}
            </Badge>
          </div>
          <Separator orientation="horizontal" />
        </div>
        <div className="pr-4 pl-[18px]">
          <span>{description}</span>
        </div>
        <div className="flex justify-between pr-4 pl-[18px]">
          <ul className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li key={tag}>
                <Badge variant="secondary">{tag}</Badge>
              </li>
            ))}
          </ul>
          <Badge>{action}</Badge>
        </div>
      </div>

      {/* Source handle at the bottom */}
      <Handle
        type="source"
        position={Position.Bottom}
        className="h-3 w-3 border-2 border-white bg-green-500"
      />
    </div>
  );
};
