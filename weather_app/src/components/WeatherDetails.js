import React from 'react'

export default function WeatherDetails({weatherData}) {
    const details = [
        { label: 'Feels Like', value: `${weatherData?.main?.feels_like}°` || 'N/A' },
        { label: 'Humidity', value: `${weatherData?.main?.humidity}%` || 'N/A' },
        { label: 'Wind Speed', value: `${weatherData?.wind?.speed} m/s` || 'N/A' },
        { label: 'Pressure', value: `${weatherData?.main?.pressure} hPa` || 'N/A' },
        { label: 'Visibility', value: `${weatherData?.visibility / 1000} km` || 'N/A' },
        { label: 'Cloudiness', value: `${weatherData?.clouds?.all}%` || 'N/A' },
    ];
    return (
        <div>
            <h1 className='text-2xl font-semibold text-gray-300'>Weather Details</h1>
            <div className='flex grid-flow-row gap-3 mt-5'>
                {details.map((detail, index) => (
                    <div key={index} className='flex flex-col items-center justify-center w-24 gap-4 h-28 backdrop-blur-sm bg-black/60 rounded-xl' >
                    <h1 className='text-sm text-center text-gray-300'>{detail.label}</h1>
                    <p className='text-sm text-center text-white'>{detail.value}</p>
                </div>
                ))}


            </div>

        </div>
    )
}
