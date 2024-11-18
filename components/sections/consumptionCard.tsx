import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export function ConsumptionCard({ showTip = false }) {
  return (
    <Card className="bg-purple-900 text-white">
      <CardContent className="p-4 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm">Semana</span>
          <span className="text-sm">Mês</span>
        </div>
        <div>
          <div className="text-sm">Gasto total / Nov</div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold">14.5 kWh</span>
            <span className="text-sm text-red-300">+14%</span>
          </div>
        </div>
        {showTip && (
          <>
            <p className="text-sm">Houve um aumento de 14% no consumo nesse período em relação ao mês de Outubro.</p>
            <Button variant="secondary" className="w-full bg-purple-800 text-white hover:bg-purple-700">
              Ver dicas relacionadas
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  )
}