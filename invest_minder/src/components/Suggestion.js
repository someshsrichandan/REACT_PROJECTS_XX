// src/components/Suggestion.js
import React from 'react';

const Suggestion = ({ suggestion }) => (
    <div className="p-4 mt-8 bg-gray-100 rounded-lg shadow-md">
        <h3 className={`text-xl font-bold ${suggestion === 'Buy' ? 'text-green-600' : suggestion === 'Sell' ? 'text-red-600' : 'text-yellow-600'}`}>
            Investment Suggestion: {suggestion}
        </h3>
        <p className="mt-2 text-gray-700">Buy Amount: 0.1 BTC</p>
        <p className="mt-1 text-gray-700">Suggested Hold Time: 1 week</p>
    </div>
);

export default Suggestion;
