// src/App.js
import React, { useState } from 'react';
import MyChart from './components/MyChart';
import NewsList from './components/NewsList';
import Suggestion from './components/Suggestion';

function App() {
    const [suggestion, setSuggestion] = useState('');

    const analyzeNews = (news) => {
        let positive = 0, negative = 0;
        news.forEach(article => {
            if (article.description.includes('rise') || article.description.includes('gain')) positive++;
            if (article.description.includes('fall') || article.description.includes('loss')) negative++;
        });
        if (positive > negative) {
            setSuggestion('Buy');
        } else if (negative > positive) {
            setSuggestion('Sell');
        } else {
            setSuggestion('Hold');
        }
    };

    return (
        <div className="min-h-screen p-8 bg-gray-50">
            <h1 className="mb-8 text-4xl font-bold text-indigo-700">InvestMinder</h1>
            <MyChart />
            <NewsList onAnalyze={analyzeNews} />
            <Suggestion suggestion={suggestion} />
        </div>
    );
}

export default App;
