import React, { useState, useEffect } from 'react';
import Day from '../assets/bg2.jpg';
import WeatherDetails from './WeatherDetails';
import ForecastGraph from './ForecastGraph';

export const Weather = () => {
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [suggestions, setSuggestions] = useState([]);
    const [airQuality, setAirQuality] = useState(null);

    const apiKey = '4088cfc1b43e1e1ec6e8b38ac9186ce3';

    useEffect(() => {
        getWeatherCurrent(28.6139, 77.2090); // Coordinates for Delhi, India
    }, []);

    const getWeatherCurrent = async (lat, lon) => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
        const jsonData = await response.json();
        setWeatherData(jsonData);

        // Fetch air quality data
        const airQualityResponse = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`);
        const airQualityJson = await airQualityResponse.json();
        setAirQuality(airQualityJson.list[0].main.aqi);
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
            className="w-screen h-screen flex flex-col justify-center items-center"
            style={{ 
                backgroundImage: `url(${Day})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                filter: 'brightness(0.9)'  
            }}
        >
            <div className="w-[80rem] h-[18rem] mt-10 backdrop-blur-sm bg-white/5 rounded-xl shadow-2xl flex justify-between">
                <div className='flex flex-col ml-20 text-left mt-14 gap-10'>
                    <h1 className="text-4xl text-white font-bold">{weatherData?.name}</h1>
                    <h1 className="text-6xl font-bold  text-yellow-400">
                        {Math.round(weatherData?.main?.temp)}°C 
                        <span className='text-2xl ml-4 text-white'>{weatherData?.weather[0]?.description}</span>
                    </h1>
                </div>
                <div className='flex flex-col gap-5 mx-20 my-10 relative'>
                    <div className="flex items-center justify-end relative">
                        <input 
                            type="text"
                            className="bg-transparent border-b-2 border-yellow-400 text-white outline-none transition-all duration-300 placeholder-gray-200 w-40 opacity-100"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            placeholder="Search..."
                            style={{ transition: 'width 0.3s, opacity 0.7s' }}
                        />
                        <button 
                            className="ml-3 text-white focus:outline-none p-2" 
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="h-6 w-6"
                            >
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                        </button>
                        {isSearchActive && suggestions.length > 0 && (
                            <ul className="absolute top-full mt-2 w-full bg-black/60 text-white backdrop-blur-lg shadow-md rounded-md max-h-48 overflow-y-auto">
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
                    <h1 className="text-2xl text-white font-bold text-right">
                        {getCurrentDate()} 
                    </h1>
                    <h1 className="text-2xl text-white font-bold text-right">
                        Air Quality - {airQuality} - {airQuality === 1 ? 'Good' : airQuality === 2 ? 'Fair' : airQuality === 3 ? 'Moderate' : airQuality === 4 ? 'Poor' : 'Very Poor'}
                    </h1>
                </div>
            </div>
            
            <div className='flex'>
                <div className='w-[39rem] h-56 m-5 backdrop-blur-sm p-5 gap-3 bg-white/5 rounded-xl shadow-2xl '>
                    <WeatherDetails weatherData={weatherData} />
                </div>
                <div className='w-[39rem] h-56 m-5 backdrop-blur-sm bg-white/5 rounded-xl shadow-2xl '>
                    <ForecastGraph forecastData={weatherData} />
                </div>
            </div>
        </div>
    );
};
