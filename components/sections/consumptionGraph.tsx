"use client"

import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
    { week: '1 semana', Oct: 31.68, Nov: 30.33 },
    { week: '2 semana', Oct: 35.51, Nov: 34.44 },
    { week: '3 semana', Oct: 42.13, Nov: 40.70 },
    { week: '4 semana', Oct: 46.87, Nov: 45.14 }
]

export function ConsumptionGraph() {
    return (
        <ChartContainer
            config={{
                Oct: {
                    label: "Outubro",
                    color: "hsl(var(--chart-1))",
                },
                Nov: {
                    label: "Novembro",
                    color: "hsl(var(--chart-2))",
                },
            }}
            className="h-[300px]"
        >
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis
                        dataKey="week"
                        className="text-xs"
                        tickLine={false}
                        axisLine={false}
                    />
                    <YAxis
                        className="text-xs"
                        tickLine={false}
                        axisLine={false}
                        tickFormatter={(value) => `${value} kWh`}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line
                        type="monotone"
                        dataKey="Oct"
                        stroke="var(--color-Oct)"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                    />
                    <Line
                        type="monotone"
                        dataKey="Nov"
                        stroke="var(--color-Nov)"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </ChartContainer>
    )
}