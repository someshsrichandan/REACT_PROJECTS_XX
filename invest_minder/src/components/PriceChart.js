// src/components/PriceChart.js

import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { fetchPriceData } from '../services/apiService';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale);

const PriceChart = ({ coin }) => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const getPriceData = async () => {
      const data = await fetchPriceData(coin);
      const labels = data.prices.map(price => new Date(price[0]).toLocaleDateString());
      const values = data.prices.map(price => price[1]);
      
      setChartData({
        labels,
        datasets: [
          {
            label: `${coin} Price`,
            data: values,
            borderColor: 'rgba(75,192,192,1)',
            backgroundColor: 'rgba(75,192,192,0.2)',
          }
        ]
      });
    };

    getPriceData();
  }, [coin]);

  return (
    <div>
      <h2>{coin} Price Chart</h2>
      <Line data={chartData} />
    </div>
  );
};

export default PriceChart;
