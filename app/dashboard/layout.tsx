import AppHeader from '@/components/custom/dashboard/appHeader'
import { AppSidebar } from '@/components/custom/dashboard/appSideBar'
import { SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <SidebarProvider>
        <AppSidebar />
    <div className="flex flex-1 flex-col">
        <AppHeader />
      <div className="p-5">
        {children}
      </div>
    </div>
    </SidebarProvider>
  )
}

export default DashboardLayout
