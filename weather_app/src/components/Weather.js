import React, { useState, useEffect } from 'react';
import Day from '../assets/bg2.jpg';
import WeatherDetails from './WeatherDetails';
import ForecastGraph from './ForecastGraph';
import Shimmer from './Shimmer';

export const Weather = () => {
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);
    const [suggestions, setSuggestions] = useState([]);
    const [airQuality, setAirQuality] = useState(null);
    const [loading, setLoading] = useState(true);
    

    const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;
    
    

    useEffect(() => {
        getWeatherCurrent(28.6139, 77.2090); // Coordinates for Delhi, India
    }, []);

    const getWeatherCurrent = async (lat, lon) => {
        setLoading(true);
        const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
        const weatherData = await weatherResponse.json();
        setWeatherData(weatherData);

        const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
        const forecastData = await forecastResponse.json();
        const dailyForecasts = forecastData.list.filter((item) => item.dt_txt.includes('12:00:00'));
        setForecastData(dailyForecasts);

        const airQualityResponse = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`);
        const airQualityJson = await airQualityResponse.json();
        setAirQuality(airQualityJson.list[0].main.aqi);

        setLoading(false);
    };

    const fetchSuggestions = async (query) => {
        if (query.length > 2) {
            const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${apiKey}`);
            const jsonData = await response.json();
            setSuggestions(jsonData);
        } else {
            setSuggestions([]);
        }
    };

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        fetchSuggestions(query);
        setIsSearchActive(true);
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchQuery(suggestion.name);
        setSuggestions([]);
        getWeatherCurrent(suggestion.lat, suggestion.lon);
        setIsSearchActive(false);
    };

    const getCurrentDate = () => {
        const date = new Date();
        const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
        const day = date.getDate();
        const month = date.toLocaleDateString('en-US', { month: 'long' });
        return `${dayName}, ${month} ${day}`;
    };

    return (
        <div 
            className="flex flex-col items-center justify-center w-screen h-screen"
            style={{ 
                backgroundImage: `url(${Day})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                filter: 'brightness(0.9)'  
            }}
        >
            <div className="w-[80rem] h-[18rem] mt-10 backdrop-blur-sm bg-white/5 rounded-xl shadow-2xl flex justify-between">
                <div className='flex flex-col gap-10 ml-20 text-left mt-14'>
                    {loading ? (
                        <div className="w-32 h-8 bg-gray-700 rounded-md animate-pulse"></div>
                    ) : (
                        <h1 className="text-4xl font-bold text-white">{weatherData?.name}</h1>
                    )}
                    {loading ? (
                        <div className="w-40 h-12 bg-gray-700 rounded-md animate-pulse"></div>
                    ) : (
                        <h1 className="text-6xl font-bold text-yellow-400">
                            {Math.round(weatherData?.main?.temp)}°C 
                            <span className='ml-4 text-2xl text-white'>{weatherData?.weather[0]?.description}</span>
                        </h1>
                    )}
                </div>
                <div className='relative flex flex-col gap-5 mx-20 my-10'>
                    <div className="relative flex items-center justify-end">
                        <input 
                            type="text"
                            className="w-40 text-white placeholder-gray-200 transition-all duration-300 bg-transparent border-b-2 border-yellow-400 outline-none opacity-100"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            placeholder="Search..."
                            style={{ transition: 'width 0.3s, opacity 0.7s' }}
                        />
                        <button 
                            className="p-2 ml-3 text-white focus:outline-none" 
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="w-6 h-6"
                            >
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                        </button>
                        {isSearchActive && suggestions.length > 0 && (
                            <ul className="absolute w-full mt-2 overflow-y-auto text-white rounded-md shadow-md top-full bg-black/60 backdrop-blur-lg max-h-48">
                                {suggestions.map((suggestion) => (
                                    <li
                                        key={suggestion.name}
                                        onClick={() => handleSuggestionClick(suggestion)}
                                        className="p-2 cursor-pointer hover:bg-white/40"
                                    >
                                        {suggestion.name}, {suggestion.country}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    {loading ? (
                        <div className="w-40 h-8 bg-gray-700 rounded-md animate-pulse"></div>
                    ) : (
                        <h1 className="text-2xl font-bold text-right text-white">
                            {getCurrentDate()} 
                        </h1>
                    )}
                    {loading ? (
                        <div className="w-48 h-8 bg-gray-700 rounded-md animate-pulse"></div>
                    ) : (
                        <h1 className="text-2xl font-bold text-right text-white">
                            Air Quality - {airQuality} - {airQuality === 1 ? 'Good' : airQuality === 2 ? 'Fair' : airQuality === 3 ? 'Moderate' : airQuality === 4 ? 'Poor' : 'Very Poor'}
                        </h1>
                    )}
                </div>
            </div>
            
            <div className='flex'>
            {/* Weather Details */}
            <div className='w-[39rem] h-56 m-5 backdrop-blur-sm p-5 gap-3 bg-white/5 rounded-xl shadow-2xl'>
                {loading ? (
                    <div className='mt-10'><Shimmer count={5} /></div>
                ) : (
                    <WeatherDetails weatherData={weatherData} />
                )}
            </div>

            {/* Forecast Graph */}
            <div className='w-[39rem] h-56 m-5 backdrop-blur-sm bg-white/5 rounded-xl shadow-2xl'>
                {loading ? (
                    <Shimmer className="" count={5} />
                ) : (
                    <div className='mt-14'><ForecastGraph forecastData={forecastData} /></div>
                )}
            </div>
        </div>
        </div>
    );
};
