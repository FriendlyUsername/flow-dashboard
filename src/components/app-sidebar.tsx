"use client";

import * as React from "react";
import Image from "next/image";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "~/components/ui/sidebar";
import { LatestChat } from "~/app/_components/post";
import { api } from "~/trpc/react";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <Image src="/Vector.svg" alt="Nimbus" width={32} height={32} />
                <span className="font-body-bold-small self-end">Nimbus</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <div className="flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3">
            <span>Chat</span>
            <SidebarTrigger />
          </div>
          <Chat />
        </div>
      </SidebarContent>
      <SidebarFooter>
        <LatestChat />
      </SidebarFooter>
    </Sidebar>
  );
}
const Chat = () => {
  const { data: chats, isLoading, isError } = api.chat.getAll.useQuery();
  if (!chats) return null;
  return (
    <div className="font-body-p-xs flex flex-col gap-6 pt-3">
      {chats.map((chat) => (
        <div key={chat.id}>{chat.name}</div>
      ))}
      {isLoading ? <div>Loading...</div> : null}
      {isError && <div>Error</div>}
    </div>
  );
};
