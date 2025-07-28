'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  Home,
  User,
  Settings,
  Sidebar as SidebarIcon,
  Moon,
  Inbox,
  Calendar,
  LucideRotateCw,
  Users,
  Settings2Icon,
  LogOut,
  Bell
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import toast from 'react-hot-toast'
import { useState } from 'react'

type AppSidebarProps = {
  collapsed: boolean
  setCollapsed: (value: boolean) => void
}

const AppSidebar = ({ collapsed, setCollapsed }: AppSidebarProps) => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const SignOut = async () => {
    try {
      setLoading(true)
      const res = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({})
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Sign out failed')

      toast.success('Logged out successfully')
      router.push('/login')
    } catch (error: any) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <aside
      className={cn(
        'h-screen bg-muted border-r rounded-sm transition-all duration-300 ease-in-out flex flex-col',
        collapsed ? 'w-10' : 'w-54'
      )}
    >
      {/* Top */}
      <div className="flex items-center justify-between py-0.5 px-2">
        {!collapsed && <h1 className="text-lg font-bold">Dashboard</h1>}
        <Button size="icon" variant="ghost" onClick={() => setCollapsed(!collapsed)}>
          <SidebarIcon className="h-5 w-5" />
        </Button>
      </div>

      {/* Menu */}
      <nav className="flex flex-col items-start h-full justify-between">
        <div className="flex flex-col p-2 space-y-1">
          <SidebarItem icon={<Home />} label="Home" href="/" collapsed={collapsed} />
          <SidebarItem icon={<Inbox />} label="Inbox" href="/inbox" collapsed={collapsed} />
          <SidebarItem icon={<Bell />} label="Notifications" href="/notifications" collapsed={collapsed} />
          <SidebarItem icon={<User />} label="Profile" href="/profile" collapsed={collapsed} />
          <SidebarItem icon={<LucideRotateCw />} label="Switch" href="/switch" collapsed={collapsed} />
          <SidebarItem icon={<Settings />} label="Settings" href="/settings" collapsed={collapsed} />
          <SidebarItem icon={<Moon />} label="Theme" href="/theme" collapsed={collapsed} />
          <SidebarItem icon={<Calendar />} label="Planner" href="/planner" collapsed={collapsed} />
          <SidebarItem icon={<Users />} label="Team" href="/team" collapsed={collapsed} />
          <SidebarItem icon={<Settings2Icon />} label="Administrator" href="/admin" collapsed={collapsed} />
        </div>

        {/* Footer */}
        <div className="flex flex-col p-2 space-y-1">
          <Button
            onClick={SignOut}
            disabled={loading}
            variant="ghost"
            className={cn(
              'w-full justify-start px-3 py-2 space-x-3 text-left transition-all',
              collapsed && 'justify-center px-0'
            )}
          >
            <span className="text-muted-foreground">
              <LogOut />
            </span>
            {!collapsed && <span>{loading ? 'Logging out...' : 'Logout'}</span>}
          </Button>
        </div>
      </nav>
    </aside>
  )
}

type SidebarItemProps = {
  icon: React.ReactNode
  label: string
  href: string
  collapsed: boolean
}

const SidebarItem = ({ icon, label, href, collapsed }: SidebarItemProps) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link href={href} className="w-full">
      <Button
        variant="ghost"
        className={cn(
          'w-full justify-start px-3 py-2 space-x-3 text-left transition-all',
          collapsed && 'justify-center px-0',
          isActive && 'bg-accent'
        )}
      >
        <span className="text-muted-foreground">{icon}</span>
        {!collapsed && <span>{label}</span>}
      </Button>
    </Link>
  )
}

export default AppSidebar
