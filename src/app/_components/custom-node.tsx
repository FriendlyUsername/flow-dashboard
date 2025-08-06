import type { Node, NodeProps } from "@xyflow/react";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { PhoneIcon } from "lucide-react";

export type CustomNodeType = Node<
  {
    heading: {
      icon: string;
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
  const { title, description, tags, label, action } = data.heading;

  return (
    <div className="w-[288px] rounded-md bg-white pt-3 pr-4 pb-4 pl-[18px] text-black shadow-sm">
      <div className="grid gap-4">
        <div className="flex justify-evenly">
          <Button variant="outline" size="icon" className="size-8">
            <PhoneIcon className="h-3 w-3 self-center" />
          </Button>
          <span>{title}</span>
          <span>{label}</span>
        </div>
        <div>
          <span>{description}</span>
        </div>
        <div className="flex justify-between">
          <ul>
            {tags.map((tag) => (
              <li key={tag}>
                <Badge>{tag}</Badge>
              </li>
            ))}
          </ul>
          <Button>{action}</Button>
        </div>
      </div>
    </div>
  );
};
