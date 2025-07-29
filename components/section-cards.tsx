import { Brain, ChartBar, Heart, LineChart, LucideMove, TrendingDownIcon, TrendingUpIcon, Trophy } from "lucide-react"

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card lg:px-6">
      <Card className="@container/card bg-teal-100 ">
        <CardHeader className="relative">
          <div className="flex gap-2 items-center">
            <Brain />
          <CardDescription>Mood Score</CardDescription>
          </div>
          
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            No Data
          </CardTitle>
          
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Todays Average mood
          </div>
          
        </CardFooter>
      </Card>
      <Card className="@container/card bg-blue-100">
        <CardHeader className="relative">
          <div className="flex gap-2 items-center">
            <Trophy />
          <CardDescription>Completion Rate</CardDescription>
          </div>
          
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            0%
          </CardTitle>
          
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Activities completed
          </div>
          
        </CardFooter>
      </Card>
      <Card className="@container/card bg-purple-100">
        <CardHeader className="relative">
          <div className="flex gap-2 items-center">
            <Heart />
          <CardDescription>MindFulness</CardDescription>
          </div>
          
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            0 sessions
          </CardTitle>
          
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Mindfulness activities
          </div>
          
        </CardFooter>
      </Card>
      <Card className="@container/card bg-rose-100">
        <CardHeader className="relative">
          <div className="flex gap-2 items-center">
            <LineChart />
          <CardDescription>Total Activities</CardDescription>
          </div>
          
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
            0
          </CardTitle>
          
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Planned for today
          </div>
          
        </CardFooter>
      </Card>
      
    </div>
  )
}
