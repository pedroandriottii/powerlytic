"use client";

import { useEffect, useState } from "react";
import { Bell } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NavBar } from "@/components/sections/navbar";
import { fetchPredictionData } from "@/lib/apiHelper";
import { PredictionGraph } from "@/components/sections/predictionGraph";


type PredictionData = {
    date: string;
    forecast: number;
}[];

export default function Reports() {
    const [predictions, setPredictions] = useState<PredictionData | null>(null);

    useEffect(() => {
        const getPredictions = async () => {
            const result = await fetchPredictionData();
            if (result && result.status === "success") {
                setPredictions(result.data);
            }
        };
        getPredictions();
    }, []);

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
                <h1 className="text-2xl font-semibold text-[#2D0C57] mb-4">Estimativas</h1>

                <Tabs defaultValue="geral" className="space-y-4">
                    <TabsList className="w-full justify-start border-b bg-transparent p-0">
                        <TabsTrigger
                            value="geral"
                            className="border-b-2 border-transparent px-4 py-2 data-[state=active]:border-[#2D0C57] data-[state=active]:bg-transparent"
                        >
                            Geral
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="geral" className="space-y-4 ">
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h2 className=" font-medium ">Previsão de Consumo por dia</h2>
                            </div>
                            <p className="text-sm text-gray-500">De acordo com os dados coletados dos últimos meses</p>
                            {predictions ? (
                                <PredictionGraph data={predictions} />
                            ) : (
                                <p>Carregando previsão...</p>
                            )}
                        </div>
                    </TabsContent>

                    {/* <TabsContent value="geral" className="space-y-4">
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h2 className="text-sm font-medium">Heatmap de Correlações</h2>
                            </div>
                            <CorrelationHeatmap />
                        </div>
                    </TabsContent> */}

                </Tabs>
            </main>

            <NavBar currentPath="/reports" />
        </div>
    );
}
