import React from 'react'

export default function WeatherDetails() {
    return (
        <div>
            <h1 className='text-gray-300 text-2xl font-semibold'>Weather Details</h1>
            <div className='flex grid-flow-row gap-3 mt-5'>
                <div className='w-24 h-28 backdrop-blur-sm bg-black/60 rounded-xl flex justify-center items-center flex-col gap-4'>
                <h1 className='text-gray-300 text-sm'>Feels Like</h1>
                <p className='text-white font-bold text-xl'>0°</p>
                </div>
                <div className='w-24 h-28 backdrop-blur-sm bg-black/60 rounded-xl'>
                </div>
                <div className='w-24 h-28 backdrop-blur-sm bg-black/60 rounded-xl'>
                </div>
                <div className='w-24 h-28 backdrop-blur-sm bg-black/60 rounded-xl'>
                </div>
                <div className='w-24 h-28 backdrop-blur-sm bg-black/60 rounded-xl'>
                </div>
                <div className='w-24 h-28 backdrop-blur-sm bg-black/60 rounded-xl'>
                </div>
            </div>

        </div>
    )
}
