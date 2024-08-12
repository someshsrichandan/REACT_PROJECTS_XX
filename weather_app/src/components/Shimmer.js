import React from 'react'

export default function Shimmer({ count }) {
  return (
    <div className="flex gap-4 m-10">
    {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="w-24 bg-gray-700 rounded-md h-28 animate-pulse"></div>
    ))}
</div>
  )
}
