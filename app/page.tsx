'use client'

import * as React from "react"
import { Bell, Home, LineChart, User } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ConsumptionCard } from "@/components/sections/consumptionCard"
import { ApplianceCard } from "@/components/sections/applianceCard"
import { TipCard } from "@/components/sections/tipCard"
import { NavButton } from "@/components/sections/nav"
import { ConsumptionGraph } from "@/components/sections/consumptionGraph"
import Image from "next/image"

export default function Component() {
  const [activeTab, setActiveTab] = React.useState("overview")

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <header className="sticky top-0 z-10 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <Image src={'/powerlyticLogo.png'}
            width={100}
            height={120}
            alt="oi" />
          <div className="flex items-center gap-2">
            <Bell className="h-6 w-6 text-power-dark" />
            <div className="h-8 w-8 rounded-full bg-gray-200" />
          </div>
        </div>
      </header>

      <main className="flex-1 p-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsContent value="overview" className="space-y-4">
            <h1 className="text-2xl font-semibold text-power-dark">Olá, Pedro!</h1>
            <p className="text-sm text-gray-600">Essas são as últimas atualizações de seu consumo</p>

            <ConsumptionCard />

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="flex items-center gap-2 text-sm font-medium">
                  <span className="h-2 w-2 rounded-full bg-yellow-400" />
                  Gastos individuais
                </h2>
                <Button variant="link" className="text-sm text-power-dark bg-power-light">
                  Ver todos
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <ApplianceCard title="Geladeira" consumption="10.5kWh" change="-21%" />
                <ApplianceCard title="Tomada 1" consumption="10.5kWh" change="-21%" />
                <ApplianceCard title="Tomada 2" consumption="10.5kWh" change="-21%" />
                <ApplianceCard title="Ar condicionado sala" consumption="10.5kWh" change="-21%" />
              </div>

              <TipCard />
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-4">
            <h1 className="text-2xl font-semibold text-power-dark">Reports</h1>

            <Tabs defaultValue="geral" className="space-y-4">
              <TabsList className="w-full justify-start border-b bg-transparent p-0">
                <TabsTrigger
                  value="geral"
                  className="border-b-2 border-transparent px-4 py-2 data-[state=active]:border-purple-600 data-[state=active]:bg-transparent"
                >
                  Geral
                </TabsTrigger>
                <TabsTrigger
                  value="individual"
                  className="border-b-2 border-transparent px-4 py-2 data-[state=active]:border-purple-600 data-[state=active]:bg-transparent"
                >
                  Aparelhos Individuais
                </TabsTrigger>
              </TabsList>

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
            </Tabs>
          </TabsContent>
        </Tabs>
      </main>

      <nav className="sticky bottom-0 border-t bg-white">
        <div className="flex justify-around p-4">
          <NavButton icon={Home} label="Overview" isActive={activeTab === "overview"} onClick={() => setActiveTab("overview")} />
          <NavButton icon={LineChart} label="Reports" isActive={activeTab === "reports"} onClick={() => setActiveTab("reports")} />
          <NavButton icon={Bell} label="Notificações" isActive={false} onClick={function (): void {
            throw new Error("Function not implemented.")
          }} />
          <NavButton icon={User} label="Perfil" isActive={false} onClick={function (): void {
            throw new Error("Function not implemented.")
          }} />
        </div>
      </nav>
    </div>
  )
}









