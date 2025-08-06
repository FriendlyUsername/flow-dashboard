import { AppSidebar } from "~/components/app-sidebar";
// import { ChartAreaInteractive } from "~/components/chart-area-interactive";
// import { DataTable } from "~/components/data-table";
// import { SectionCards } from "~/components/section-cards";
// import { SiteHeader } from "~/components/site-header";
import {
  SidebarInset,
  SidebarProvider,
  SideBarReOpen,
  SidebarTrigger,
  useSidebar,
} from "~/components/ui/sidebar";

// import data from "./data.json";
import { FlowApp } from "../_components/flow-app";
import {
  ChevronDown,
  ChevronLeft,
  CloudLightning,
  Circle,
  RefreshCcw,
  Settings,
} from "lucide-react";
import { Separator } from "~/components/ui/separator";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />

      <SidebarInset>
        <div className="bg-sidebar flex h-10 items-center justify-between pr-2 shadow-none">
          <SideBarReOpen />
          <div className="font-body-bold-small flex w-full justify-between">
            <div className="flex gap-0">
              <Button
                variant="outline"
                className="border-r-none outline-r-none rounded-r-none !px-2"
              >
                <ChevronLeft />
                <span>Flow</span>
              </Button>
              <Separator
                orientation="vertical"
                className="w-[1px] bg-[#EDEBE5]"
              />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="border-l-none outline-l-none rounded-l-none px-2 data-[state=open]:[&>svg]:-rotate-180"
                  >
                    <Circle className="size-4 text-[#129438]" />
                    Version 1.0 split A
                    <ChevronDown className="transition-transform duration-200" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Version 1.0 split A</DropdownMenuItem>
                  <DropdownMenuItem>Version 1.0 split B</DropdownMenuItem>
                  <DropdownMenuItem>Version 1.0 split C</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="font-body-medium-small">
              <Button variant="outline" className="gap-1 !px-2 py-1.5">
                <CloudLightning />
                Triggers
              </Button>
              <Button variant="outline" className="gap-1 !px-2 py-1.5">
                <Settings />
                Settings
              </Button>
              <Button variant="outline" className="gap-1 !px-2 py-1.5">
                <RefreshCcw />
                Evaluate
              </Button>
            </div>
            <div>
              <Button
                variant="outline"
                className="font-body-bold-small bg-[#FFD023] px-2.5 py-1.5"
              >
                Publish
              </Button>
            </div>
          </div>
        </div>
        <FlowApp />
      </SidebarInset>
    </SidebarProvider>
  );
}
