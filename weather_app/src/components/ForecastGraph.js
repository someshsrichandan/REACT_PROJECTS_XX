import React from 'react';

const getWeatherIcon = (description) => {
    if (description.includes('cloud')) return '☁️';
    if (description.includes('rain')) return '🌧️';
    if (description.includes('clear')) return '☀️';
    if (description.includes('snow')) return '❄️';
    return '🌤️';
};


const ForecastGraph = ({ forecastData }) => {
    return (
        <div className="flex items-center justify-around py-4 mt-10">
            {forecastData && forecastData.map((dayData, index) => (
                <div className="mb-1 text-lg font-semibold">
                        <div key={index} className="text-center text-white">
                        {new Date(dayData.dt_txt).toLocaleDateString('en-US', { weekday: 'short' })}
                    </div>
                    <div className="mb-2 text-4xl">
                        {getWeatherIcon(dayData.weather[0].description)}
                    </div>
                    <div className="text-xl font-bold">{Math.round(dayData.main.temp)}°C</div>
                </div>
            ))}
        </div>
    );
};

export default ForecastGraph;
