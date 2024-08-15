// src/components/NewsList.js
import React, { useState, useEffect } from 'react';

const NewsList = ({ onAnalyze }) => {
    const [news, setNews] = useState([]);

    const fetchNews = async () => {
        try {
            const response = await fetch('https://newsapi.org/v2/everything?q=crypto&apiKey=9aa20d5bd4dc4db7a18a25652018e7ff');
            const data = await response.json();
            setNews(data.articles);
            onAnalyze(data.articles);
        } catch (error) {
            console.error("Error fetching news data", error);
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <div className="mt-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">Latest Crypto News</h2>
            <ul className="space-y-4">
                {news.map((article, index) => (
                    <li key={index} className="pb-4 border-b">
                        <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-indigo-600 hover:underline">
                            {article.title}
                        </a>
                        <p className="mt-2 text-sm text-gray-600">{article.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewsList;
