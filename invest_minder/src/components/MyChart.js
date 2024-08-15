// src/components/MyChart.js
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const MyChart = () => {
    const [chartData, setChartData] = useState({});
    const [coin] = useState('BTC'); // You can change this to any other cryptocurrency symbol

    const fetchChartData = async () => {
        try {
            const response = await fetch(`https://min-api.cryptocompare.com/data/price?fsym=${coin}&tsyms=USD`);
            const data = await response.json();
            const price = data.USD;
            const time = new Date().toLocaleTimeString();

            setChartData(prevData => {
                const labels = prevData.labels ? [...prevData.labels, time] : [time];
                const prices = prevData.datasets ? [...prevData.datasets[0].data, price] : [price];

                return {
                    labels,
                    datasets: [{
                        label: `${coin} Price`,
                        data: prices,
                        fill: false,
                        borderColor: '#742774'
                    }]
                };
            });
        } catch (error) {
            console.error("Error fetching price data", error);
        }
    };

    useEffect(() => {
        fetchChartData(); // Fetch once immediately on component mount

        const interval = setInterval(fetchChartData, 60000); // Fetch every minute
        return () => clearInterval(interval); // Clean up on component unmount
    }, [coin]);

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <Line data={chartData} />
        </div>
    );
};

export default MyChart;
