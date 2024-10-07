"use client"

import { useState } from "react"
import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const generateChartData = (year) => [
  { month: "Jan", basic: 1000 + Math.random() * 500, premium: 500 + Math.random() * 300, premiumPlus: 100 + Math.random() * 100 },
  { month: "Feb", basic: 1000 + Math.random() * 500, premium: 500 + Math.random() * 300, premiumPlus: 100 + Math.random() * 100 },
  { month: "Mar", basic: 1000 + Math.random() * 500, premium: 500 + Math.random() * 300, premiumPlus: 100 + Math.random() * 100 },
  { month: "Apr", basic: 1000 + Math.random() * 500, premium: 500 + Math.random() * 300, premiumPlus: 100 + Math.random() * 100 },
  { month: "May", basic: 1000 + Math.random() * 500, premium: 500 + Math.random() * 300, premiumPlus: 100 + Math.random() * 100 },
  { month: "Jun", basic: 1000 + Math.random() * 500, premium: 500 + Math.random() * 300, premiumPlus: 100 + Math.random() * 100 },
  { month: "Jul", basic: 1000 + Math.random() * 500, premium: 500 + Math.random() * 300, premiumPlus: 100 + Math.random() * 100 },
  { month: "Aug", basic: 1000 + Math.random() * 500, premium: 500 + Math.random() * 300, premiumPlus: 100 + Math.random() * 100 },
  { month: "Sep", basic: 1000 + Math.random() * 500, premium: 500 + Math.random() * 300, premiumPlus: 100 + Math.random() * 100 },
  { month: "Oct", basic: 1000 + Math.random() * 500, premium: 500 + Math.random() * 300, premiumPlus: 100 + Math.random() * 100 },
  { month: "Nov", basic: 1000 + Math.random() * 500, premium: 500 + Math.random() * 300, premiumPlus: 100 + Math.random() * 100 },
  { month: "Dec", basic: 1000 + Math.random() * 500, premium: 500 + Math.random() * 300, premiumPlus: 100 + Math.random() * 100 },
]

const chartConfig = {
  basic: {
    label: "Jyotish Lite - Basic",
    color: "hsl(var(--chart-1))",
  },

  premium: {
    label: "Nakshtra - Premium",
    color: "hsl(var(--chart-2))",
  },

  premiumPlus: {
    label: "Cosmos Supreme - Premium Plus",
    color: "hsl(var(--chart-3))",
  }
}

export function AstrologySubscriptionGrowth() {
  const [selectedYear, setSelectedYear] = useState(2024)
  const [chartData, setChartData] = useState(generateChartData(selectedYear))

  const handleYearChange = (year) => {
    const newYear = parseInt(year, 10)
    setSelectedYear(newYear)
    setChartData(generateChartData(newYear))
  }

  return (
    (<Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Subscription Plans</CardTitle>
            <CardDescription>
              Number of users subscribed to each plan throughout the year
            </CardDescription>
          </div>
          <Select onValueChange={handleYearChange} defaultValue={selectedYear.toString()}>
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              {[2022, 2023, 2024, 2025].map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillBasic" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-basic)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-basic)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillPremium" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-premium)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-premium)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillPremiumPlus" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-premiumPlus)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-premiumPlus)" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <Area
              dataKey="basic"
              type="monotone"
              fill="url(#fillBasic)"
              fillOpacity={0.4}
              stroke="var(--color-basic)"
              stackId="1" />
            <Area
              dataKey="premium"
              type="monotone"
              fill="url(#fillPremium)"
              fillOpacity={0.4}
              stroke="var(--color-premium)"
              stackId="1" />
            <Area
              dataKey="premiumPlus"
              type="monotone"
              fill="url(#fillPremiumPlus)"
              fillOpacity={0.4}
              stroke="var(--color-premiumPlus)"
              stackId="1" />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 7.5% this year <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              {selectedYear} Subscription Data
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>)
  );
}