'use client'


import { SectionCards } from "@/components/section-cards";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { AnxietyGames } from "@/components/games/anxietygames";





export default function DashboardPage() {

    
    return <SidebarProvider className="pt-16 "
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" className="pt-16" />
      
      <SidebarInset className="bg-gradient-to-b from-gray-100 to-gray-100/50 ">
      
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        <div className='lg:col-span-3 space-y-6'>
          <AnxietyGames />
          
 
        </div>

    </div>
              
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>

}