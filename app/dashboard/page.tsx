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
      <AppSidebar  className="pt-16 " />
      
      <SidebarInset>
      
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 px-2">
                <ChartAreaInteractive />
                <AnxietyGames />
              </div>
              <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
      

    </div>
              
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>

}