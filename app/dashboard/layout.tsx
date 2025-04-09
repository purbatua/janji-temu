import { cookies } from "next/headers"

import { DashboardHeader } from "@/app/dashboard/components/dashboard-header"
import { AppSidebar } from "@/app/dashboard/components/dashboard-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

import "./theme.css"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"

  return (
    <SidebarProvider
      defaultOpen={defaultOpen}
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset>
        <DashboardHeader />
        <div>{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}
