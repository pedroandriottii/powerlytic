import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    Title,
    Filler,
} from "chart.js";

// Registro dos componentes do Chart.js
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend, Title, Filler);

export function PredictionGraph({ data }: { data: { date: string; forecast: number }[] }) {
    // Preparação dos dados do gráfico
    const chartData = {
        labels: data.map((item) =>
            new Date(item.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "short" })
        ), // Datas formatadas
        datasets: [
            {
                label: "Previsão de Consumo (kWh)",
                data: data.map((item) => item.forecast), // Valores no eixo Y
                borderColor: "#3A1A55", // Cor da linha (power-dark)
                backgroundColor: "rgba(58, 26, 85, 0.1)", // Fundo transparente (power-dark com opacidade)
                pointRadius: 4, // Tamanho dos pontos
                pointBackgroundColor: "#3A1A55", // Cor dos pontos (power-dark)
                tension: 0.4, // Suavidade da linha
                fill: true, // Preenchimento abaixo da linha
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: "top" as const,
                labels: {
                    color: "#3A1A55", // Cor das legendas (power-dark)
                },
            },
            tooltip: {
                enabled: true,
                callbacks: {
                    label: (context: any) => `${context.raw.toFixed(2)} kWh`, // Formato do valor exibido
                },
            },
            title: {
                display: true,
                text: "Previsão de Consumo Diário",
                color: "#3A1A55", // Cor do título (power-dark)
                font: {
                    size: 16,
                    weight: "bold",
                },
                padding: {
                    top: 10,
                    bottom: 10,
                },
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Data",
                    color: "#3A1A55", // Cor do título do eixo (power-dark)
                    font: {
                        size: 12,
                        weight: "500",
                    },
                },
                ticks: {
                    color: "#3A1A55", // Cor dos rótulos (power-dark)
                    maxRotation: 45, // Rotação máxima
                    minRotation: 45, // Rotação mínima
                },
                grid: {
                    display: true,
                    color: "rgba(58, 26, 85, 0.2)", // Cor da grade (power-dark com opacidade)
                },
            },
            y: {
                title: {
                    display: true,
                    text: "Consumo (kWh)",
                    color: "#3A1A55", // Cor do título do eixo (power-dark)
                    font: {
                        size: 12,
                        weight: "500",
                    },
                },
                ticks: {
                    color: "#3A1A55", // Cor dos rótulos (power-dark)
                },
                grid: {
                    display: true,
                    color: "rgba(58, 26, 85, 0.2)", // Cor da grade (power-dark com opacidade)
                },
                beginAtZero: true,
            },
        },
    };

    return (
        <div style={{ height: "400px", width: "100%", backgroundColor: "#F6EBFF" }}> {/* Fundo power-light */}
            <Line data={chartData} options={options} />
        </div>
    );
}
