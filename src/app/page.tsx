import { HydrateClient } from "~/trpc/server";
import { FlowApp } from "./_components/flow-app";
import "~/styles/globals.css";
import { SidebarInset } from "~/components/ui/sidebar";
import { AppSidebar } from "~/components/app-sidebar";
import { TopBar } from "./_components/top-bar";

export default async function Home() {
  return (
    <HydrateClient>
      <AppSidebar variant="inset" />
      <SidebarInset className="!mt-0">
        <TopBar />
        <FlowApp />
      </SidebarInset>
    </HydrateClient>
  );
}
