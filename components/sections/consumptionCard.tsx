import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { MonthlySpendProps, WeeklySpendProps } from "@/lib/types";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";
import React, { useState } from "react";

export function ConsumptionCard({
  showTip = false,
  data,
  weeklyData,
}: {
  showTip?: boolean;
  data: MonthlySpendProps;
  weeklyData: WeeklySpendProps;
}) {
  const [period, setPeriod] = useState<"week" | "month">("month");

  return (
    <Card className="bg-purple-900 text-white">
      <CardContent className="p-4 space-y-4">
        {/* Toggle Group for Week/Month Selection */}
        <div className="flex w-full items-end justify-end">
          <div className="bg-purple-800/50 rounded-md p-1 flex gap-1 w-fit">
            <ToggleGroup
              type="single"
              value={period}
              onValueChange={(value) => value && setPeriod(value as "week" | "month")}
            >
              <ToggleGroupItem
                value="week"
                className="rounded-md px-4 data-[state=on]:bg-white data-[state=on]:text-purple-900 text-xs"
              >
                Semana
              </ToggleGroupItem>
              <ToggleGroupItem
                value="month"
                className="rounded-md px-4 data-[state=on]:bg-white data-[state=on]:text-purple-900 text-xs"
              >
                Mês
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>

        {/* Display Based on Selected Period */}
        {period === "week" ? (
          <div>
            <div className="text-sm">Gasto total / Semana {weeklyData.week2.week}</div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold">{(weeklyData.week2.total_consumption / 1000).toFixed(2)} kWh</span>
              <span
                className={`text-sm ${
                  weeklyData.percentage_change >= 0 ? "text-green-300" : "text-red-300"
                }`}
              >
                {weeklyData.percentage_change.toFixed(2)}%
              </span>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-sm">Gasto total / Mês {data.month2.month}</div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold">{(data.month2.total_consumption / 1000).toFixed(2)} kWh</span>
              <span
                className={`text-sm ${
                  data.percentage_change >= 0 ? "text-green-300" : "text-red-300"
                }`}
              >
                {data.percentage_change.toFixed(2)}%
              </span>
            </div>
          </div>
        )}

        {/* Show Tip Section */}
        {showTip && (
          <>
            <p className="text-sm">
              Houve uma {period === "week" ? "redução" : "diminuição"} de{" "}
              {period === "week"
                ? weeklyData.percentage_change.toFixed(2)
                : data.percentage_change.toFixed(2)}
              % no consumo em relação ao {period === "week" ? "período anterior" : "mês anterior"}.
            </p>
            <Button
              variant="secondary"
              className="w-full bg-purple-800 text-white hover:bg-purple-700"
            >
              Ver dicas relacionadas
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
}
