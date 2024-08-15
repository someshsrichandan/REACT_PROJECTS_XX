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
        <div className="flex flex-wrap items-center justify-center py-4 mt-10">
            {forecastData && forecastData.map((dayData, index) => (
                <div key={index} className="flex flex-col items-center w-1/2 p-2 text-lg font-semibold sm:w-1/3 md:w-1/5 lg:w-1/6">
                    <div className="text-center text-white">
                        {new Date(dayData.dt_txt).toLocaleDateString('en-US', { weekday: 'short' })}
                    </div>
                    <div className="mb-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                        {getWeatherIcon(dayData.weather[0].description)}
                    </div>
                    <div className="text-xl font-bold md:text-2xl lg:text-3xl">
                        {Math.round(dayData.main.temp)}°C
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ForecastGraph;
