import React from 'react';

const getWeatherIcon = (temp) => {
    if (temp >= 30) {
        return '🔥'; 
    } else if (temp >= 25) {
        return '☀️'; 
    } else if (temp >= 20) {
        return '🌤️'; 
    } else if (temp >= 15) {
        return '⛅'; 
    } else if (temp >= 10) {
        return '🌧️'; 
    } else if (temp >= 0) {
        return '❄️'; 
    } else {
        return '🌡️'; 
    }
};

const ForecastGraph = () => {

    const forecastData = [
        { day: 'Mon', temp: 22 },
        { day: 'Tue', temp: 24 },
        { day: 'Wed', temp: 20 },
        { day: 'Thu', temp: 23 },
        { day: 'Fri', temp: 25 },
    ];

    return (
        <div className="flex justify-around items-center py-4 mt-10">
            {forecastData.map((dayData, index) => (
                <div key={index} className="text-center text-white">
                    <div className="text-lg font-semibold mb-1">{dayData.day}</div>
                    <div className="text-4xl mb-2">{getWeatherIcon(dayData.temp)}</div>
                    <div className="text-xl font-bold">{dayData.temp}°C</div>
                </div>
            ))}
        </div>
    );
};

export default ForecastGraph;
