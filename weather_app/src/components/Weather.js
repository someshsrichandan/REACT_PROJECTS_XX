import React, { useState } from 'react';
import Day from '../assets/bg2.jpg';
import WeatherDetails from './WeatherDetails';
import ForecastGraph from './ForecastGraph';

export const Weather = () => {
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchClick = () => {
        if (searchQuery) {
            // Implement your search functionality here
            console.log('Searching for:', searchQuery);
        } else {
            setIsSearchActive(!isSearchActive);
        }
    };

    const handleSearchInputBlur = () => {
        if (!searchQuery) {
            setIsSearchActive(false);
        }
    };

    return (
        <div 
            className="w-screen h-screen flex flex-col justify-center items-center"
            style={{ 
                backgroundImage: `url(${Day})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                filter: 'brightness(0.9)'  // Adjust the brightness value as needed
            }}
        >
            <div className="w-[80rem] h-[18rem] mt-10 backdrop-blur-sm bg-white/5 rounded-xl shadow-2xl flex justify-between ">
                <div className='flex flex-col ml-20 mt-14 gap-10 '>
                    <h1 className="text-4xl text-white font-bold">New York</h1>
                    <h1 className="text-6xl font-bold text-center text-yellow-400">25°C <span className='text-3xl text-white'>Overcast</span></h1>
                </div>
                <div className='flex flex-col gap-5 mx-20 my-10 relative'>
                    <div className="flex items-center justify-end relative">
                        <input 
                            type="text"
                            className={`bg-transparent border-b-2 border-yellow-400 text-white outline-none transition-all duration-300 placeholder-gray-200 ${isSearchActive ? 'w-40 opacity-300' : 'w-0 opacity-0'} `}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onBlur={handleSearchInputBlur}
                            autoFocus={isSearchActive}
                            placeholder="Search..."
                            style={{ transition: 'width 0.3s, opacity 0.7s' }}
                        />
                        <button 
                            className="ml-3 text-white focus:outline-none p-2" 
                            onClick={handleSearchClick}
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
                    </div>
                    <h1 className="text-2xl text-white font-bold text-right">Sun 25°C</h1>
                    <h1 className="text-2xl text-white font-bold">Air quality - 20 - Good</h1>
                </div>
            </div>
            
            <div className='flex'>
                <div className='w-[39rem] h-56 m-5 backdrop-blur-sm p-5 gap-3 bg-white/5 rounded-xl shadow-2xl '>
                    <WeatherDetails/>
                </div>
                <div className='w-[39rem] h-56 m-5 backdrop-blur-sm bg-white/5 rounded-xl shadow-2xl '>
                    <ForecastGraph/>
                </div>
            </div>
        </div>
    );
}
