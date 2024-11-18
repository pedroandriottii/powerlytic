"use client"

import { Bell } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ConsumptionCard } from '@/components/sections/consumptionCard'
import { ConsumptionGraph } from '@/components/sections/consumptionGraph'
import { NavBar } from '@/components/sections/navbar'

export default function Reports() {
    return (
        <div className="flex min-h-screen flex-col bg-gray-50">
            <header className="sticky top-0 z-10 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                    <div className="text-xl font-semibold text-[#2D0C57]">powerlytic</div>
                    <div className="flex items-center gap-2">
                        <Bell className="h-6 w-6 text-[#2D0C57]" />
                        <div className="h-8 w-8 rounded-full bg-gray-200" />
                    </div>
                </div>
            </header>

            <main className="flex-1 p-4">
                <h1 className="text-2xl font-semibold text-[#2D0C57] mb-4">Reports</h1>

                <Tabs defaultValue="geral" className="space-y-4">
                    <TabsList className="w-full justify-start border-b bg-transparent p-0">
                        <TabsTrigger
                            value="geral"
                            className="border-b-2 border-transparent px-4 py-2 data-[state=active]:border-[#2D0C57] data-[state=active]:bg-transparent"
                        >
                            Geral
                        </TabsTrigger>
                        <TabsTrigger
                            value="individual"
                            className="border-b-2 border-transparent px-4 py-2 data-[state=active]:border-[#2D0C57] data-[state=active]:bg-transparent"
                        >
                            Aparelhos Individuais
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="geral" className="space-y-4">
                        <ConsumptionCard showTip />

                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h2 className="text-sm font-medium">Comparativo</h2>
                                <Select defaultValue="6">
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Selecione o período" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="6">Últimos 6 meses</SelectItem>
                                        <SelectItem value="3">Últimos 3 meses</SelectItem>
                                        <SelectItem value="1">Último mês</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <ConsumptionGraph />
                        </div>
                    </TabsContent>

                    <TabsContent value="individual">
                        {/* Individual appliances content */}
                    </TabsContent>
                </Tabs>
            </main>

            <NavBar currentPath="/reports" />
        </div>
    )
}