import React from 'react';

const ForecastGraph = () => {
    // Example data, replace with actual forecast data
    const forecastData = [
        { day: 'Mon', temp: 22, icon: '☀️' }, // sunny
        { day: 'Tue', temp: 24, icon: '🌤️' }, // partly cloudy
        { day: 'Wed', temp: 20, icon: '🌧️' }, // rainy
        { day: 'Thu', temp: 23, icon: '⛅' }, // cloudy
        { day: 'Fri', temp: 25, icon: '☀️' }, // sunny
    ];

    return (
        <div className="flex justify-around items-center py-4 mt-10 ">
            {forecastData.map((dayData, index) => (
                <div key={index} className="text-center text-white">
                    <div className="text-lg font-semibold mb-1">{dayData.day}</div>
                    <div className="text-4xl mb-2">{dayData.icon}</div>
                    <div className="text-xl font-bold">{dayData.temp}°C</div>
                </div>
            ))}
        </div>
    );
};

export default ForecastGraph;
