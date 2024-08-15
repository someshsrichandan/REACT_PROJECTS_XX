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
            className="flex flex-col items-center justify-center w-screen min-h-screen p-4 lg:p-8"
            style={{ 
                backgroundImage: `url(${Day})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                filter: 'brightness(0.9)'  
            }}
        >
            <div className="w-full max-w-7xl h-auto lg:h-[18rem] mt-10 backdrop-blur-sm bg-white/5 rounded-xl shadow-2xl flex flex-col lg:flex-row justify-between p-6 lg:p-10">
                <div className='flex flex-col gap-6 text-center lg:gap-10 lg:text-left'>
                    {loading ? (
                        <div className="w-32 h-8 mx-auto bg-gray-700 rounded-md animate-pulse lg:mx-0"></div>
                    ) : (
                        <h1 className="text-3xl font-bold text-white lg:text-4xl">{weatherData?.name}</h1>
                    )}
                    {loading ? (
                        <div className="w-40 h-12 mx-auto bg-gray-700 rounded-md animate-pulse lg:mx-0"></div>
                    ) : (
                        <h1 className="text-4xl font-bold text-yellow-400 lg:text-6xl">
                            {Math.round(weatherData?.main?.temp)}°C 
                            <span className='ml-2 text-lg text-white lg:ml-4 lg:text-2xl'>{weatherData?.weather[0]?.description}</span>
                        </h1>
                    )}
                </div>
                <div className='relative flex flex-col gap-5 mt-6 lg:mt-0 lg:mx-10'>
                    <div className="relative flex items-center justify-center lg:justify-end">
                        <input 
                            type="text"
                            className="text-white placeholder-gray-200 transition-all duration-300 bg-transparent border-b-2 border-yellow-400 outline-none w-60"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            placeholder="Search..."
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
                        <div className="w-40 h-8 mx-auto bg-gray-700 rounded-md animate-pulse lg:mx-0"></div>
                    ) : (
                        <h1 className="text-xl font-bold text-center text-white lg:text-2xl lg:text-right">
                            {getCurrentDate()} 
                        </h1>
                    )}
                    {loading ? (
                        <div className="w-48 h-8 mx-auto bg-gray-700 rounded-md animate-pulse lg:mx-0"></div>
                    ) : (
                        <h1 className="text-xl font-bold text-center text-white lg:text-2xl lg:text-right">
                            Air Quality - {airQuality} - {airQuality === 1 ? 'Good' : airQuality === 2 ? 'Fair' : airQuality === 3 ? 'Moderate' : airQuality === 4 ? 'Poor' : 'Very Poor'}
                        </h1>
                    )}
                </div>
            </div>
            
            <div className='flex flex-col items-center justify-center w-full mt-10 lg:flex-row max-w-7xl'>
                {/* Weather Details */}
                <div className='w-full h-auto gap-3 p-5 m-5 shadow-2xl lg:w-1/2 lg:h-56 backdrop-blur-sm bg-white/5 rounded-xl'>
                    {loading ? (
                        <div className='mt-10'><Shimmer count={5} /></div>
                    ) : (
                        <WeatherDetails weatherData={weatherData} />
                    )}
                </div>

                {/* Forecast Graph */}
                <div className='w-full h-auto m-5 shadow-2xl lg:w-1/2 lg:h-56 backdrop-blur-sm bg-white/5 rounded-xl'>
                    {loading ? (
                        <Shimmer className="" count={5} />
                    ) : (
                        <div className='mt-10 lg:mt-14'><ForecastGraph forecastData={forecastData} /></div>
                    )}
                </div>
            </div>
        </div>
    );
};
