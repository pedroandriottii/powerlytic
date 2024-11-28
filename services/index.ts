import { getData } from "@/lib/apiHelper";
import { MonthlySpendProps } from "@/lib/types";
import { TipProps } from "@/lib/types";
import { ApplianceSpendResponse } from "@/lib/types";
import { WeeklySpendProps } from "@/lib/types";

const API_URL = 'http://localhost:5000/';

export const getMonthlySpendProps = async (
): Promise<MonthlySpendProps> => {
    try {
        const data = await getData<MonthlySpendProps>(
            `compare_months?month1=2&year1=2016&month2=3&year2=2016`
        );

        return data;
    } catch (error) {
        console.error('Error fetching data from Flask API:', error);
        throw error;
    }
};

export const getTips = async (
): Promise<TipProps> => {
    try {
        const data = await getData<TipProps>(
            `generate_tip`
        );

        return data;
    } catch (error) {
        console.error('Error fetching data from Flask API:', error);
        throw error;
    }
}

export const getApplianceSpend = async (): Promise<ApplianceSpendResponse> => {
    try {
        const response = await fetch(`${API_URL}calculate_appliance_contribution`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`Error fetching appliance spend data: ${response.statusText}`);
        }

        const data: ApplianceSpendResponse = await response.json(); 
        console.log('Fetched appliance spend data successfully:', data);
        return data;
    } catch (error) {
        console.error('Error fetching appliance spend data:', error);
        throw error;
    }
};


export const getWeeklySpend = async (
): Promise<WeeklySpendProps> => {
    try {
        const data = await getData<WeeklySpendProps>(
            `compare_weeks?week1=2&year1=2016&week2=3&year2=2016`
        );
        return data;
    } catch (error) {
        console.error('Error fetching data from Flask API:', error);
        throw error;
    }
}