export interface MonthlyData {
    month: number;
    total_consumption: number;
    year: number;
}

export interface MonthlySpendProps {
    month1: MonthlyData;
    month2: MonthlyData;
    percentage_change: number;

}

export interface TipProps {
    tips: string;
}

export interface ApplianceData {
    [appliance: string]: {
        mean_power: number;
        percentage: number;
    };
}

export interface ApplianceSpendResponse {
    data: {
        appliance_data: ApplianceData;
        total_consumption: number;
    };
    status: string;
}

export interface WeeklyData {
    week: number;
    total_consumption: number;
    year: number;
}

export interface WeeklySpendProps {
    week1: WeeklyData;
    week2: WeeklyData;
    percentage_change: number;
}
