import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale);

const PriceChart = ({ coin }) => {
  const [chartData, setChartData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPriceData = async () => {
      try {
        const response = await fetch(`https://min-api.cryptocompare.com/data/price?fsym=${coin}&tsyms=USD`);
        if (!response.ok) {
          throw new Error('Failed to fetch price data');
        }
        const data = await response.json();
        const labels = ['Current'];
        const values = [data.USD];

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
      } catch (err) {
        setError(err.message);
      }
    };
    fetchPriceData();
  }, [coin]);

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>{coin} Price Chart</h2>
      <Line data={chartData} />
    </div>
  );
};

export default PriceChart;
