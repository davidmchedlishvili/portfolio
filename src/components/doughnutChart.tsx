import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import './doughnutChart.css';

//defines the expected chart properties (any data type, callback function, title)
interface DoughnutChartProps {
    data: any;
    handleChange: (label: string, value: number) => void;
    title: string;
}

//
function DoughnutChart(props: DoughnutChartProps) {
    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstance = useRef<Chart | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }

            const ctx = chartRef.current.getContext('2d');
            chartInstance.current = new Chart(ctx!, {
                type: 'doughnut',
                data: props.data,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });

            return () => {
                if (chartInstance.current) {
                    chartInstance.current.destroy();
                }
            };
        }
    }, [props.data]);

    return (
        <div className="chart-wrapper">
            <h2>{props.title}</h2>
            <div className="doughnut-chart-container">
                <canvas ref={chartRef} width={400} height={400} />
            </div>
            <div className="label-container">
                {props.data.labels.map((label: string, index: number) => (
                    <span key={index} style={{backgroundColor: props.data.datasets[0].backgroundColor[index]}}>
                        {label}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default DoughnutChart;
