import React from 'react'

export default function WeatherDetails(weatherData) {
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
            <h1 className='text-gray-300 text-2xl font-semibold'>Weather Details</h1>
            <div className='flex grid-flow-row gap-3 mt-5'>
                {details.map((detail, index) => (
                    <div className='w-24 h-28 backdrop-blur-sm bg-black/60 rounded-xl flex justify-center items-center flex-col gap-4'>
                    <h1 className='text-gray-300 text-center text-sm'>{detail.label}</h1>
                    <p className='text-white text-center text-sm'>{detail.value}</p>
                </div>
                ))}


            </div>

        </div>
    )
}
