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
import { ChevronLeft } from "lucide-react";
import { Separator } from "~/components/ui/separator";

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
        <div className="bg-sidebar flex h-10 items-center justify-between shadow-none">
          <div>
            <SideBarReOpen />
            <div className="flex">
              <ChevronLeft />
              <span>Flow</span>
              <Separator
                orientation="vertical"
                className="mx-1 h-10 bg-black"
              />
              <div>Version 1.0 split A</div>
            </div>
          </div>
        </div>
        <FlowApp />
      </SidebarInset>
    </SidebarProvider>
  );
}
