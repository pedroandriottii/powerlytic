import React, { useEffect, useState } from "react";
import { MatrixController, MatrixElement } from "chartjs-chart-matrix";
import { Chart as ChartJS, Tooltip, Legend, CategoryScale, LinearScale } from "chart.js";
import { Chart } from "react-chartjs-2";

// Registrar os componentes necessários no Chart.js
ChartJS.register(MatrixController, MatrixElement, Tooltip, Legend, CategoryScale, LinearScale);

type CorrelationData = {
    [variable: string]: { [correlatedVariable: string]: number };
};

export function CorrelationHeatmap() {
    const [correlationData, setCorrelationData] = useState<CorrelationData | null>(null);

    useEffect(() => {
        // Fetch correlation data from API
        fetch("http://localhost:5000/correlations")
            .then((response) => response.json())
            .then((result) => {
                if (result.status === "success") {
                    setCorrelationData(result.data);
                }
            })
            .catch((error) => console.error("Error fetching correlation data:", error));
    }, []);

    if (!correlationData) {
        return <p>Carregando correlações...</p>;
    }

    // Preparar os dados para o gráfico
    const variables = Object.keys(correlationData);
    const matrixData: { x: number; y: number; v: number; }[] = [];

    variables.forEach((varX, i) => {
        variables.forEach((varY, j) => {
            matrixData.push({
                x: i,
                y: j,
                v: correlationData[varX][varY], // Valor de correlação
            });
        });
    });

    const data = {
        datasets: [
            {
                label: "Correlação",
                data: matrixData,
                backgroundColor: (ctx: any) => {
                    const value = ctx.raw.v;
                    if (value > 0) return `rgba(0, 200, 0, ${Math.abs(value)})`; // Verde para correlações positivas
                    return `rgba(200, 0, 0, ${Math.abs(value)})`; // Vermelho para correlações negativas
                },
                borderWidth: 1,
                borderColor: "rgba(255,255,255,0.2)",
                width: ({ chart }: any) =>
                    chart.chartArea
                        ? (chart.chartArea.width / variables.length) * 0.95
                        : 10, // Valor padrão se chartArea não estiver disponível
                height: ({ chart }: any) =>
                    chart.chartArea
                        ? (chart.chartArea.height / variables.length) * 0.95
                        : 10, // Valor padrão se chartArea não estiver disponível
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    title: (ctx: any) => {
                        const { x, y } = ctx[0].raw;
                        return `${variables[x]} x ${variables[y]}`;
                    },
                    label: (ctx: any) => `Correlação: ${ctx.raw.v.toFixed(2)}`,
                },
            },
            legend: {
                display: false,
            },
        },
        scales: {
            x: {
                type: "category" as const,
                labels: variables,
                title: {
                    display: true,
                    text: "Variáveis",
                    color: "#4B5563",
                },
                grid: { display: false },
            },
            y: {
                type: "category" as const,
                labels: variables,
                title: {
                    display: true,
                    text: "Variáveis",
                    color: "#4B5563",
                },
                grid: { display: false },
            },
        },
    };

    return (
        <div style={{ height: "500px", width: "100%" }}>
            <Chart type="matrix" data={data} options={options} />
        </div>
    );
}
