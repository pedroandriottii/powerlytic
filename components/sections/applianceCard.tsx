interface ApplianceCardProps {
    title: string;
    consumption: string;
    change: string;
}

export function ApplianceCard({ title, consumption, change }: ApplianceCardProps) {
    return (
        <div className="rounded-lg bg-power-light p-4">
            <div className="text-sm font-medium">{title}</div>
            <div className="mt-2 flex items-baseline justify-between">
                <span className="font-semibold">{consumption}</span>
                <span className="text-sm text-red-500">{change}</span>
            </div>
        </div>
    )
}