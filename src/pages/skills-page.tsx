import React, { useState } from 'react';
import DoughnutChart from '../components/doughnutChart';

function SkillsPage() {
    const [chartsData, setChartsData] = useState([
        {
            id: 'clientSide',
            title: 'Client-Side Web Development',
            data: {
                labels: ['CSS 3', 'JavaScript', 'HTML 5', 'TypeScript', 'Angular'],
                datasets: [
                    {
                        data: [24, 24, 24, 3, 3],
                        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#FF9F40'],
                    },
                ],
            }
        },
        {
            id: 'serverSide',
            title: 'Server-Side Web Development',
            data: {
                labels: ['Java', 'Maven', 'Spring', 'Jode.js', 'Express.js'],
                datasets: [
                    {
                        data: [12, 3, 3, 3, 3],
                        backgroundColor: ['#A2FF63', '#A236EB', '#56FFCE', '#C04BC0', '#40FF9F'],
                    },
                ],
            }
        }
    ]);

    const handleDataChange = (chartId: string, label: string, value: number) => {
        const updatedChartsData = [...chartsData];
        const chart = updatedChartsData.find(chart => chart.id === chartId);
        if (chart) {
            const index = chart.data.labels.indexOf(label);
            if (index !== -1) {
                chart.data.datasets[0].data[index] = value;
            }
        }
        setChartsData(updatedChartsData);
    };

    return (
        <div className="chart-container">
            {chartsData.map(chart => (
                <DoughnutChart
                    key={chart.id}
                    data={chart.data}
                    handleChange={(label: string, value: number) => handleDataChange(chart.id, label, value)}
                    title={chart.title}
                />
            ))}
        </div>
    );
}

export default SkillsPage;
