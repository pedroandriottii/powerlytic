import { Card, CardContent } from "../ui/card";

export function TipCard() {
    return (
        <Card>
            <CardContent className="p-4">
                <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-lg bg-purple-100 p-3">
                        <div className="h-full w-full rounded bg-purple-400" />
                    </div>
                    <div className="space-y-1">
                        <h3 className="font-medium">Desligue a tomada durante a noite</h3>
                        <p className="text-sm text-gray-600">
                            Sua tomada 2 consome 16kWh durante a noite, ao desligá-la você reduz em 15% seu consumo final
                        </p>
                        <p className="text-xs text-gray-400">Baseado nos dados coletados de Tomada 2</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}