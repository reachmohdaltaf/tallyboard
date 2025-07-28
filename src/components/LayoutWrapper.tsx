'use client'

import { useState } from "react"
import AppSidebar from "@/components/AppSidebar"
import Navbar from "@/components/Navbar"

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false)
  const sidebarWidth = collapsed ? 40 : 215 // Tailwind w-10 = 2.5rem = 40px, w-64 = 16rem = 256px

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className="h-screen fixed left-0 top-0 z-20 border-r bg-white transition-all duration-300 ease-in-out"
        style={{ width: sidebarWidth }}
      >
        <AppSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      </div>

      {/* Main Content */}
      <div
        className="transition-all duration-300 ease-in-out flex-1"
        style={{ marginLeft: sidebarWidth }}
      >
  <div
  className="fixed top-0 right-0 h-10 z-10 border-b bg-white transition-all duration-300 ease-in-out"
  style={{ marginLeft: sidebarWidth, width: `calc(100% - ${sidebarWidth}px)` }}
>
  <Navbar />
</div>


        {/* Page Content */}
        <div className="mt-10">{children}</div>
      </div>
    </div>
  )
}
