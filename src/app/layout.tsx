import "~/styles/globals.css";

import { type Metadata } from "next";
import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import {
  SidebarInset,
  SidebarProvider,
  SideBarReOpenDesktop,
  SideBarReOpenMobile,
} from "~/components/ui/sidebar";
import { Button } from "~/components/ui/button";
import {
  ChevronDown,
  ChevronLeft,
  Circle,
  CloudLightning,
  Menu,
  RefreshCcw,
  Settings,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "~/components/ui/dropdown-menu";
import { AppSidebar } from "~/components/app-sidebar";
import { DropdownMenuTrigger } from "~/components/ui/dropdown-menu";
import { Separator } from "@radix-ui/react-separator";

export const metadata: Metadata = {
  title: "Flow Dashboard Coading Challenge",
  description: "created by Leon Meinhardt",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body>
        <TRPCReactProvider>
          <SidebarProvider
            style={
              {
                "--sidebar-width": "calc(var(--spacing) * 72)",
                "--header-height": "calc(var(--spacing) * 12)",
              } as React.CSSProperties
            }
          >
            <AppSidebar variant="inset" />

            <SidebarInset className="!mt-0">
              <div className="bg-sidebar flex h-10 items-center justify-between py-1.5 shadow-none">
                <SideBarReOpenDesktop />
                <SideBarReOpenMobile />

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="ml-auto gap-1 !px-2 py-1.5 md:hidden"
                    >
                      <Menu />
                      <span>Mobile Dropdown</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <span>Flow</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CloudLightning />
                      <span>Triggers</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings />
                      <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <RefreshCcw />
                      <span>Evaluate</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <div className="font-body-bold-small hidden w-full justify-between self-center md:flex">
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
              {children}
            </SidebarInset>
          </SidebarProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
