import React from 'react'

export default function Shimmer({ count }) {
  return (
    <div className="flex m-10 gap-4">
    {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="w-24 h-28 bg-gray-700 rounded-md animate-pulse"></div>
    ))}
</div>
  )
}
