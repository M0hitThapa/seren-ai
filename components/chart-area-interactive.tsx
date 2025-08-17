"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export const description = "An interactive area chart"

const chartData = [{ date: "2024-04-01", moodScore: 222, stressLevel: 150 },
  { date: "2024-04-02", moodScore: 97, stressLevel: 180 },
  { date: "2024-04-03", moodScore: 167, stressLevel: 120 },
  { date: "2024-04-04", moodScore: 242, stressLevel: 260 },
  { date: "2024-04-05", moodScore: 373, stressLevel: 290 },
  { date: "2024-04-06", moodScore: 301, stressLevel: 340 },
  { date: "2024-04-07", moodScore: 245, stressLevel: 180 },
  { date: "2024-04-08", moodScore: 409, stressLevel: 320 },
  { date: "2024-04-09", moodScore: 59, stressLevel: 110 },
  { date: "2024-04-10", moodScore: 261, stressLevel: 190 },
  { date: "2024-04-11", moodScore: 327, stressLevel: 350 },
  { date: "2024-04-12", moodScore: 292, stressLevel: 210 },
  { date: "2024-04-13", moodScore: 342, stressLevel: 380 },
  { date: "2024-04-14", moodScore: 137, stressLevel: 220 },
  { date: "2024-04-15", moodScore: 120, stressLevel: 170 },
  { date: "2024-04-16", moodScore: 138, stressLevel: 190 },
  { date: "2024-04-17", moodScore: 446, stressLevel: 360 },
  { date: "2024-04-18", moodScore: 364, stressLevel: 410 },
  { date: "2024-04-19", moodScore: 243, stressLevel: 180 },
  { date: "2024-04-20", moodScore: 89, stressLevel: 150 },
  { date: "2024-04-21", moodScore: 137, stressLevel: 200 },
  { date: "2024-04-22", moodScore: 224, stressLevel: 170 },
  { date: "2024-04-23", moodScore: 138, stressLevel: 230 },
  { date: "2024-04-24", moodScore: 387, stressLevel: 290 },
  { date: "2024-04-25", moodScore: 215, stressLevel: 250 },
  { date: "2024-04-26", moodScore: 75, stressLevel: 130 },
  { date: "2024-04-27", moodScore: 383, stressLevel: 420 },
  { date: "2024-04-28", moodScore: 122, stressLevel: 180 },
  { date: "2024-04-29", moodScore: 315, stressLevel: 240 },
  { date: "2024-04-30", moodScore: 454, stressLevel: 380 },
  { date: "2024-05-01", moodScore: 165, stressLevel: 220 },
  { date: "2024-05-02", moodScore: 293, stressLevel: 310 },
  { date: "2024-05-03", moodScore: 247, stressLevel: 190 },
  { date: "2024-05-04", moodScore: 385, stressLevel: 420 },
  { date: "2024-05-05", moodScore: 481, stressLevel: 390 },
  { date: "2024-05-06", moodScore: 498, stressLevel: 520 },
  { date: "2024-05-07", moodScore: 388, stressLevel: 300 },
  { date: "2024-05-08", moodScore: 149, stressLevel: 210 },
  { date: "2024-05-09", moodScore: 227, stressLevel: 180 },
  { date: "2024-05-10", moodScore: 293, stressLevel: 330 },
  { date: "2024-05-11", moodScore: 335, stressLevel: 270 },
  { date: "2024-05-12", moodScore: 197, stressLevel: 240 },
  { date: "2024-05-13", moodScore: 197, stressLevel: 160 },
  { date: "2024-05-14", moodScore: 448, stressLevel: 490 },
  { date: "2024-05-15", moodScore: 473, stressLevel: 380 },
  { date: "2024-05-16", moodScore: 338, stressLevel: 400 },
  { date: "2024-05-17", moodScore: 499, stressLevel: 420 },
  { date: "2024-05-18", moodScore: 315, stressLevel: 350 },
  { date: "2024-05-19", moodScore: 235, stressLevel: 180 },
  { date: "2024-05-20", moodScore: 177, stressLevel: 230 },
  { date: "2024-05-21", moodScore: 82, stressLevel: 140 },
  { date: "2024-05-22", moodScore: 81, stressLevel: 120 },
  { date: "2024-05-23", moodScore: 252, stressLevel: 290 },
  { date: "2024-05-24", moodScore: 294, stressLevel: 220 },
  { date: "2024-05-25", moodScore: 201, stressLevel: 250 },
  { date: "2024-05-26", moodScore: 213, stressLevel: 170 },
  { date: "2024-05-27", moodScore: 420, stressLevel: 460 },
  { date: "2024-05-28", moodScore: 233, stressLevel: 190 },
  { date: "2024-05-29", moodScore: 78, stressLevel: 130 },
  { date: "2024-05-30", moodScore: 340, stressLevel: 280 },
  { date: "2024-05-31", moodScore: 178, stressLevel: 230 },
  { date: "2024-06-01", moodScore: 178, stressLevel: 200 },
  { date: "2024-06-02", moodScore: 470, stressLevel: 410 },
  { date: "2024-06-03", moodScore: 103, stressLevel: 160 },
  { date: "2024-06-04", moodScore: 439, stressLevel: 380 },
  { date: "2024-06-05", moodScore: 88, stressLevel: 140 },
  { date: "2024-06-06", moodScore: 294, stressLevel: 250 },
  { date: "2024-06-07", moodScore: 323, stressLevel: 370 },
  { date: "2024-06-08", moodScore: 385, stressLevel: 320 },
  { date: "2024-06-09", moodScore: 438, stressLevel: 480 },
  { date: "2024-06-10", moodScore: 155, stressLevel: 200 },
  { date: "2024-06-11", moodScore: 92, stressLevel: 150 },
  { date: "2024-06-12", moodScore: 492, stressLevel: 420 },
  { date: "2024-06-13", moodScore: 81, stressLevel: 130 },
  { date: "2024-06-14", moodScore: 426, stressLevel: 380 },
  { date: "2024-06-15", moodScore: 307, stressLevel: 350 },
  { date: "2024-06-16", moodScore: 371, stressLevel: 310 },
  { date: "2024-06-17", moodScore: 475, stressLevel: 520 },
  { date: "2024-06-18", moodScore: 107, stressLevel: 170 },]

const chartConfig = {
  moodScore: {
    label: "Mood Score",
    color: "var(--chart-1)",
  },
  stressLevel: {
    label: "Stress Level",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

export function ChartAreaInteractive() {
  const [timeRange, setTimeRange] = React.useState("90d")

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card className="pt-0 ">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Mental Health Trends</CardTitle>
          <CardDescription>
            Mood vs Stress levels over time
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillMood" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--chart-1)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--chart-1)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillStress" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--chart-2)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--chart-2)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="moodScore"
              type="natural"
              fill="url(#fillMood)"
              stroke="var(--chart-1)"
              stackId="a"
            />
            <Area
              dataKey="stressLevel"
              type="natural"
              fill="url(#fillStress)"
              stroke="var(--chart-2)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
