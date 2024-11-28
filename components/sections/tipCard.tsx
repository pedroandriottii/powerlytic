import { TipProps } from "@/lib/types";
import { Card, CardContent } from "../ui/card";

export function TipCard(tip: TipProps) {
    return (
        <Card>
            <CardContent className="p-4">
                <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-lg bg-purple-100 p-3">
                        <div className="h-full w-full rounded bg-purple-400" />
                    </div>
                    <div className="space-y-1">
                        <h3 className="font-medium">Se atente à essas dicas!</h3>
                        <p className="text-xs text-gray-600">
                            {Array.isArray(tip.tips)
                                ? tip.tips.map((tip) => tip.replace(/\.csv/g, '')).join(', ')
                                : tip.tips.replace(/\.csv/g, '')}
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}