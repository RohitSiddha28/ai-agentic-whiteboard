"use client";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { useUser } from "@clerk/nextjs";
import { Archive, LayoutGrid, Settings, Sparkles, Users } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function AppSidebar() {
  const pathname = usePathname();
  const { user } = useUser();
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-3">
          <Image src="/logo.svg" alt="Logo" width={30} height={30} />
          <h2 className="text-lg font-bold">Drawly</h2>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <Button>+ Create New Board</Button>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>My Boards</SidebarGroupLabel>
          <SidebarMenuButton
            className="p-5"
            isActive={pathname === "/dashboard"}
          >
            <LayoutGrid />
            <span>All Files</span>
          </SidebarMenuButton>
          <SidebarMenuButton
            className="p-5 mt-2"
            isActive={pathname === "/shared-files"}
          >
            <Users />
            <span>Shared</span>
          </SidebarMenuButton>
          <SidebarMenuButton
            className="p-5 mt-2"
            isActive={pathname === "/archieved"}
          >
            <Archive />
            <span>Archieved</span>
          </SidebarMenuButton>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Others</SidebarGroupLabel>
          <SidebarMenuButton className="p-5" isActive={pathname === "/ai"}>
            <Sparkles />
            <span>AI helper</span>
          </SidebarMenuButton>
          <SidebarMenuButton
            className="p-5"
            isActive={pathname === "/settings"}
          >
            <Settings />
            <span>Settings</span>
          </SidebarMenuButton>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <Button>+ Create New Board</Button>
        <div className="p-4 my-3 border rounded-md mb-1">
          <h2 className="text-sm flex justify-between">
            2 files created <span>total 3</span>
          </h2>
          <Progress value={66} className="h-2 mt-2"></Progress>
        </div>
        <div className="flex items-center gap-2 p-2 border rounded-md">
          <Image src={user?.imageUrl ?? ''} alt="User Image" width={40} height={40} 
          className="rounded-full"/>
          <h2>{user?.firstName} {user?.lastName}</h2>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
