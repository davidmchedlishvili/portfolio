import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import './doughnutChart.css';

//defines the expected chart properties (any data type, callback function, title)
interface DoughnutChartProps {
    data: any;
    handleChange: (label: string, value: number) => void;
    title: string;
}


function DoughnutChart(props: DoughnutChartProps) {
    //initializing a canvas reference variable with initial value as null.
    const chartRef = useRef<HTMLCanvasElement | null>(null);

    //initializing a chart instance reference variable with initial value as null.
    const chartInstance = useRef<Chart | null>(null);

    //executes below logic when prop.data changes
    useEffect(() => {
        //checking whether canvas has any reference
        if (chartRef.current) {
            //checking whether any chart is present. If so, destroy it to build the new one.
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
            //fetching the 2D rendering context from the canvas
            const ctx = chartRef.current.getContext('2d');
            //creating a new chart
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

            //cleanup function when component unmounts
            return () => {
                if (chartInstance.current) {
                    chartInstance.current.destroy();
                }
            };
        }
    }, [props.data]);

    //returns javascript xml (JSX) for new chart component
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
