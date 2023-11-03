import React, { useState } from 'react';
import DoughnutChart from '../components/doughnutChart';

function SkillsPage() {
    //initializing the component's state (chartsData) using useState hook.
    //chartData contains an array of objects representing chart's data.
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

    //this function handles data changes. It updates the corresponding data in chartsData state.
    const handleDataChange = (chartId: string, label: string, value: number) => {
        //current chartsData state is cloned into a new array (not to mutate the state directly).
        const updatedChartsData = [...chartsData];
        //finds the relevant chart by matching the chart.Id
        const chart = updatedChartsData.find(chart => chart.id === chartId);
        if (chart) {
            //This line finds the index of the specified label within the labels array of the found chart
            const index = chart.data.labels.indexOf(label);
            //this code updates the value in the data array of the first dataset (datasets[0]) at the specified index with the new value provided to the function.
            if (index !== -1) {
                chart.data.datasets[0].data[index] = value;
            }
        }
        setChartsData(updatedChartsData);
    };

    //returns the rendered component by iterating over each item in chartsData state.
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
